import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PostCard } from "@/components/post-card";
import {
  POSTS_PER_PAGE,
  REVALIDATE_SECONDS,
  getAllPosts,
  getBlogPagePath,
  getPaginatedPosts,
} from "@/lib/api";

export const revalidate = REVALIDATE_SECONDS;

type BlogPaginationPageProps = {
  params: Promise<{ page: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));

  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({ params }: BlogPaginationPageProps): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number.parseInt(page, 10);

  if (!Number.isFinite(pageNumber) || pageNumber < 2) {
    return { title: "Blog" };
  }

  return {
    title: `Blog - Page ${pageNumber}`,
    description: `Technobyte blog listing page ${pageNumber}.`,
  };
}

export default async function BlogPaginationPage({ params }: BlogPaginationPageProps) {
  const { page } = await params;
  const pageNumber = Number.parseInt(page, 10);

  if (!Number.isFinite(pageNumber) || pageNumber < 2) {
    notFound();
  }

  const result = await getPaginatedPosts(pageNumber, POSTS_PER_PAGE);

  if (result.page !== pageNumber) {
    notFound();
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-8 lg:px-8 lg:py-12">
      <section className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <aside className="surface-card sticky top-24 space-y-5 self-start p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Archive</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">All blogs</h1>
          <p className="text-sm leading-6 text-zinc-600">
            {result.totalPosts} published posts. Page {result.page} of {result.totalPages}.
          </p>

          <div className="surface-card-dark p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">Pagination</p>
            <p className="mt-3 text-xl font-semibold">Page {result.page}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Static route expansion keeps the archive fast while preserving clean search discovery.
            </p>
          </div>
        </aside>

        <section className="grid gap-6">
          {result.posts.map((post, index) => (
            <PostCard key={post.slug} post={post} featured={index === 0} />
          ))}

          <nav className="surface-card-soft flex items-center justify-between rounded-full px-5 py-4 text-sm shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            {result.page > 1 ? (
              <Link className="font-medium text-zinc-950 transition-colors hover:text-amber-700" href={getBlogPagePath(result.page - 1)}>
                ← Previous page
              </Link>
            ) : (
              <span />
            )}
            {result.page < result.totalPages ? (
              <Link className="font-medium text-zinc-950 transition-colors hover:text-amber-700" href={getBlogPagePath(result.page + 1)}>
                Next page →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </section>
      </section>
    </main>
  );
}
