import type { Metadata } from "next";
import Link from "next/link";

import { PostCard } from "@/components/post-card";
import { POSTS_PER_PAGE, REVALIDATE_SECONDS, getBlogPagePath, getPaginatedPosts } from "@/lib/api";

export const revalidate = REVALIDATE_SECONDS;

export const metadata: Metadata = {
  title: "Blog",
  description: "Browse the Technobyte archive with static pagination and editorial cards.",
};

const archiveNotes = [
  "Feed-style cards with richer metadata.",
  "Pagination stays static with 12-hour ISR.",
  "All content is rendered on the server.",
];

export default async function BlogListingPage() {
  const result = await getPaginatedPosts(1, POSTS_PER_PAGE);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-8 lg:px-8 lg:py-12">
      <section className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="surface-card sticky top-24 space-y-5 self-start p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Archive</p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950">All blogs</h1>
          <p className="text-sm leading-6 text-zinc-600">
            {result.totalPosts} published posts, rendered statically and refreshed every 12 hours.
          </p>

          <div className="grid gap-3">
            {archiveNotes.map((item) => (
              <div key={item} className="rounded-2xl border border-zinc-900/10 bg-white/80 px-4 py-3 text-sm text-zinc-700">
                {item}
              </div>
            ))}
          </div>

            <div className="surface-card-dark p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">Pagination</p>
            <p className="mt-3 text-xl font-semibold">Page {result.page} of {result.totalPages}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Navigate the archive with a static route tree that stays cache-friendly and SEO-ready.
            </p>
          </div>
        </aside>

        <section className="grid gap-6">
          {result.posts.map((post, index) => (
            <PostCard key={post.slug} post={post} featured={index === 0} />
          ))}

            <nav className="surface-card-soft flex items-center justify-between rounded-full px-5 py-4 text-sm shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
            <span className="text-zinc-600">
              Page {result.page} of {result.totalPages}
            </span>
            {result.totalPages > 1 ? (
              <Link className="font-medium text-zinc-950 transition-colors hover:text-amber-700" href={getBlogPagePath(2)}>
                Next page →
              </Link>
            ) : null}
          </nav>
        </section>
      </section>
    </main>
  );
}
