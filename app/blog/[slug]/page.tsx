import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import {
  REVALIDATE_SECONDS,
  getAllPostSlugs,
  getPostBySlug,
  getSourceRepositoryInfo,
} from "@/lib/api";

export const revalidate = REVALIDATE_SECONDS;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

function toAbsoluteUrl(path: string): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://technobyte.vercel.app";
  return new URL(path, base).toString();
}

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested post does not exist.",
    };
  }

  const canonicalPath = `/blog/${post.slug}`;
  const sourceInfo = getSourceRepositoryInfo();

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonicalPath,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: post.coverImage
        ? [
            {
              url: post.coverImage,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    other: {
      "source:repo": `${sourceInfo.owner}/${sourceInfo.repo}`,
      "source:branch": sourceInfo.branch,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-8 lg:px-8 lg:py-12">
      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] xl:grid-cols-[0.72fr_1.28fr]">
          <aside className="surface-card sticky top-24 space-y-5 self-start p-7">
          <Link className="inline-flex rounded-full border border-zinc-900/10 bg-white px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:border-amber-600/40 hover:text-amber-700" href="/blog">
            ← Back to archive
          </Link>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Article details</p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">{post.title}</h1>
            <p className="text-sm leading-6 text-zinc-600">
              {post.description}
            </p>
          </div>

            <dl className="surface-card-soft grid gap-4 rounded-3xl p-5 text-sm">
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Author</dt>
              <dd className="mt-1 font-medium text-zinc-950">{post.author.name}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Published</dt>
              <dd className="mt-1 font-medium text-zinc-950">{new Date(post.publishedAt).toLocaleDateString("en-IN")}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Reading time</dt>
              <dd className="mt-1 font-medium text-zinc-950">{getReadingTime(post.content)} min</dd>
            </div>
            <div>
              <dt className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">Category</dt>
              <dd className="mt-1 font-medium text-zinc-950">{post.category ?? "General"}</dd>
            </div>
          </dl>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Tags</p>
            <div className="flex flex-wrap gap-2">
              {(post.tags.length > 0 ? post.tags : [post.category ?? "blog"]).map((tag) => (
                <span key={tag} className="rounded-full border border-zinc-900/10 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-zinc-950 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">Source</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">
              Content is pulled from Techno-Blog-Garden and revalidated every 12 hours.
            </p>
            <p className="mt-3 text-xs text-zinc-400 break-all">{toAbsoluteUrl(`/blog/${post.slug}`)}</p>
          </div>
        </aside>

        <article className="space-y-6 rounded-4xl border border-zinc-900/10 bg-(--surface-elevated) p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:p-8 xl:p-10">
          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              <span>Technobyte editorial</span>
              <span className="h-1 w-1 rounded-full bg-amber-600" />
              <span>Static content</span>
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 lg:text-6xl">
              {post.title}
            </h1>

            <p className="max-w-3xl text-base leading-7 text-zinc-600 lg:text-lg">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600">
              <span>{post.author.name}</span>
              <span className="h-1 w-1 rounded-full bg-amber-600" />
              <span>{new Date(post.publishedAt).toLocaleDateString("en-IN")}</span>
              <span className="h-1 w-1 rounded-full bg-amber-600" />
              <span>{getReadingTime(post.content)} min read</span>
            </div>

            {post.coverImage ? (
              <div className="relative h-88 w-full overflow-hidden rounded-[28px] border border-zinc-900/10">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover"
                />
              </div>
            ) : null}
          </header>

          <section className="max-w-none space-y-5 text-[1.04rem] leading-8 text-zinc-800 [&_a]:underline [&_a]:decoration-amber-500 [&_h1]:text-3xl [&_h1]:font-semibold [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:text-xl [&_h3]:font-semibold [&_img]:my-5 [&_img]:rounded-2xl [&_li]:ml-6 [&_li]:list-disc [&_pre]:overflow-x-auto [&_pre]:rounded-2xl [&_pre]:bg-zinc-950 [&_pre]:p-5 [&_pre]:text-zinc-100 [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic">
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [
                      rehypeAutolinkHeadings,
                      {
                        behavior: "wrap",
                      },
                    ],
                  ],
                },
              }}
            />
          </section>
        </article>
      </section>
    </main>
  );
}
