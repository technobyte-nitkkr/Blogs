import "server-only";

import matter from "gray-matter";
import { cache } from "react";

import type { BlogPost, PaginatedPosts } from "@/types/blog";

export const REVALIDATE_SECONDS = 43200;
export const POSTS_PER_PAGE = 6;
export const HOME_PAGE_POST_LIMIT = 3;
export const POSTS_CACHE_TAG = "posts";

const SOURCE_OWNER = process.env.BLOG_SOURCE_OWNER ?? "technobyte-nitkkr";
const SOURCE_REPO = process.env.BLOG_SOURCE_REPO ?? "Techno-Blog-Garden";
const SOURCE_BRANCH = process.env.BLOG_SOURCE_BRANCH ?? "master";

const GITHUB_API_BASE = `https://api.github.com/repos/${SOURCE_OWNER}/${SOURCE_REPO}`;
const RAW_BASE = `https://raw.githubusercontent.com/${SOURCE_OWNER}/${SOURCE_REPO}/${SOURCE_BRANCH}`;

interface GitTreeNode {
  path: string;
  type: "blob" | "tree";
}

interface GitTreeResponse {
  tree: GitTreeNode[];
}

interface SourcePostFrontmatter {
  title?: string;
  slug?: string;
  date?: string;
  excerpt?: string;
  description?: string;
  cover?: string;
  draft?: boolean;
  tags?: string[];
  category?: string;
  authors?: string[];
}

interface SourceAuthor {
  id?: string;
  name?: string;
}

function getIsrFetchOptions(tags: string[] = [POSTS_CACHE_TAG]) {
  const authToken = process.env.BLOG_SOURCE_GITHUB_TOKEN;

  return {
    headers: authToken
      ? {
          Authorization: `Bearer ${authToken}`,
        }
      : undefined,
    next: {
      revalidate: REVALIDATE_SECONDS,
      tags,
    },
  } as const;
}

async function fetchJson<T>(url: string, tags: string[] = [POSTS_CACHE_TAG]): Promise<T> {
  const response = await fetch(url, getIsrFetchOptions(tags));

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return (await response.json()) as T;
}

async function fetchText(url: string, tags: string[] = [POSTS_CACHE_TAG]): Promise<string> {
  const response = await fetch(url, getIsrFetchOptions(tags));

  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return response.text();
}

function parsePublishedAt(dateValue?: string): string {
  if (!dateValue) {
    return new Date(0).toISOString();
  }

  const parsed = new Date(dateValue);
  return Number.isNaN(parsed.getTime()) ? new Date(0).toISOString() : parsed.toISOString();
}

function toAbsoluteAssetUrl(markdownPath: string, assetPath?: string): string | null {
  if (!assetPath) {
    return null;
  }

  if (assetPath.startsWith("http://") || assetPath.startsWith("https://")) {
    return assetPath;
  }

  if (assetPath.startsWith("/")) {
    return `${RAW_BASE}/public${assetPath}`;
  }

  const folderPath = markdownPath.replace(/\/index\.md$/, "");
  const normalizedAsset = assetPath.replace(/^\.\//, "");
  return `${RAW_BASE}/${folderPath}/${normalizedAsset}`;
}

function normalizeSlug(path: string, sourceSlug?: string): string {
  if (sourceSlug && sourceSlug.trim()) {
    return sourceSlug.trim();
  }

  const folderName = path.split("/")[2] ?? "";
  const withoutDatePrefix = folderName.replace(/^\d{4}-\d{2}-\d{2}-/, "");

  if (!withoutDatePrefix) {
    throw new Error(`Unable to infer slug from folder: ${path}`);
  }

  return withoutDatePrefix;
}

function normalizePost(markdownPath: string, markdownContent: string, authors: Map<string, string>): BlogPost | null {
  const { data, content } = matter(markdownContent);
  const frontmatter = data as SourcePostFrontmatter;

  if (frontmatter.draft) {
    return null;
  }

  const slug = normalizeSlug(markdownPath, frontmatter.slug);
  const authorId = Array.isArray(frontmatter.authors) ? frontmatter.authors[0] : "unknown";

  return {
    slug,
    title: frontmatter.title?.trim() || slug,
    description: frontmatter.excerpt?.trim() || frontmatter.description?.trim() || "",
    content,
    coverImage: toAbsoluteAssetUrl(markdownPath, frontmatter.cover),
    author: {
      id: authorId,
      name: authors.get(authorId) ?? authorId,
    },
    publishedAt: parsePublishedAt(frontmatter.date),
    tags: Array.isArray(frontmatter.tags)
      ? frontmatter.tags.filter((tag): tag is string => typeof tag === "string")
      : [],
    category: typeof frontmatter.category === "string" ? frontmatter.category : null,
  };
}

const getRepositoryTree = cache(async (): Promise<GitTreeNode[]> => {
  const payload = await fetchJson<GitTreeResponse>(
    `${GITHUB_API_BASE}/git/trees/${SOURCE_BRANCH}?recursive=1`,
  );
  return payload.tree;
});

const getBlogMarkdownPaths = cache(async (): Promise<string[]> => {
  const tree = await getRepositoryTree();
  return tree
    .filter((node) => node.type === "blob" && /^content\/blogs\/[^/]+\/index\.md$/.test(node.path))
    .map((node) => node.path)
    .sort((a, b) => a.localeCompare(b));
});

const getAuthorsMap = cache(async (): Promise<Map<string, string>> => {
  const tree = await getRepositoryTree();
  const authorPaths = tree
    .filter((node) => node.type === "blob" && /^content\/authors\/[^/]+\.json$/.test(node.path))
    .map((node) => node.path);

  const authorEntries = await Promise.all(
    authorPaths.map(async (path) => {
      const raw = await fetchText(`${RAW_BASE}/${path}`);
      const parsed = JSON.parse(raw) as SourceAuthor;

      if (!parsed.id || !parsed.name) {
        return null;
      }

      return [parsed.id, parsed.name] as const;
    }),
  );

  return new Map(authorEntries.filter((entry): entry is readonly [string, string] => entry !== null));
});

export const getAllPosts = cache(async (): Promise<BlogPost[]> => {
  const [paths, authors] = await Promise.all([getBlogMarkdownPaths(), getAuthorsMap()]);

  const mappedPosts = await Promise.all(
    paths.map(async (path) => {
      const markdown = await fetchText(`${RAW_BASE}/${path}`);
      return normalizePost(path, markdown, authors);
    }),
  );

  const posts = mappedPosts.filter((post): post is BlogPost => post !== null);
  const slugSet = new Set<string>();

  for (const post of posts) {
    if (slugSet.has(post.slug)) {
      throw new Error(`Duplicate slug detected: ${post.slug}`);
    }
    slugSet.add(post.slug);
  }

  return posts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
});

export async function getLatestPosts(limit = HOME_PAGE_POST_LIMIT): Promise<BlogPost[]> {
  const posts = await getAllPosts();
  return posts.slice(0, limit);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug) ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();
  return posts.map((post) => post.slug);
}

export async function getPaginatedPosts(page: number, pageSize = POSTS_PER_PAGE): Promise<PaginatedPosts> {
  const posts = await getAllPosts();
  const normalizedPage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;

  const totalPosts = posts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / pageSize));
  const safePage = Math.min(normalizedPage, totalPages);
  const startIndex = (safePage - 1) * pageSize;

  return {
    posts: posts.slice(startIndex, startIndex + pageSize),
    page: safePage,
    pageSize,
    totalPosts,
    totalPages,
  };
}

export function getBlogPagePath(page: number): string {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

export function getSourceRepositoryInfo() {
  return {
    owner: SOURCE_OWNER,
    repo: SOURCE_REPO,
    branch: SOURCE_BRANCH,
  };
}
