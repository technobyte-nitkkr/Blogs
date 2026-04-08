import type { Metadata } from "next";
import Link from "next/link";

import { HOME_PAGE_POST_LIMIT, REVALIDATE_SECONDS, getLatestPosts } from "@/lib/api";
import { PostCard } from "@/components/post-card";

export const revalidate = REVALIDATE_SECONDS;

export const metadata: Metadata = {
  title: "Home",
  description: "Technobyte's editorial archive, latest featured blogs, and static-first reading experience.",
};

const highlights = [
  "Mostly static delivery with 12-hour ISR.",
  "Editorial layout inspired by the older Technobyte React app.",
  "Server-rendered content with SEO metadata built in.",
];

const quickLinks = [
  { label: "System design", href: "/blog" },
  { label: "Development", href: "/blog" },
  { label: "Projects", href: "/blog" },
];

export default async function Home() {
  const posts = await getLatestPosts(HOME_PAGE_POST_LIMIT);
  const featuredPost = posts[0];
  const supportingPosts = posts.slice(1);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-5 py-8 lg:px-8 lg:py-12">
      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="surface-card space-y-6 p-7 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
            Static first. Editorial second.
          </div>

          <div className="space-y-4">
            <p className="max-w-xl text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
              Technobyte knowledge archive
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-950 lg:text-6xl">
              Read blogs with the structure of a magazine and the speed of static pages.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-zinc-600 lg:text-lg">
              The content pipeline stays server-only and cached for 12 hours, while the UI borrows the older React app’s layout-forward feel, image panels, and feed-style hierarchy.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="surface-card-soft rounded-3xl p-4 text-sm text-zinc-700">
                {item}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/blog" className="rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-600">
              Browse archive
            </Link>
            <Link href={featuredPost ? `/blog/${featuredPost.slug}` : "/blog"} className="rounded-full border border-zinc-900/10 bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-950 hover:bg-zinc-950 hover:text-white">
              Open featured post
            </Link>
          </div>
        </div>

        <aside className="surface-card grid gap-6 p-7">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Quick links</p>
            <div className="grid gap-3">
              {quickLinks.map((item) => (
                <Link key={item.label} href={item.href} className="surface-card-soft flex items-center justify-between px-4 py-3 text-sm font-medium text-zinc-800 transition-colors hover:border-amber-600/40 hover:bg-amber-50">
                  <span>{item.label}</span>
                  <span className="text-zinc-400">→</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="surface-card-dark p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-400">Publishing model</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight">ISR with a 12-hour cadence.</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              New content appears automatically after revalidation, keeping the archive current without sacrificing static performance.
            </p>
          </div>
        </aside>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        {featuredPost ? <PostCard post={featuredPost} featured /> : null}

        <div className="grid gap-6">
          {supportingPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="surface-card grid gap-4 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Editorial notes</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
            Old-layout energy, modern static rendering.
          </h2>
        </div>
        <p className="text-sm leading-7 text-zinc-600 lg:text-base">
          The older Technobyte React app leaned on structured panels, a visible navigation frame, and bold content cards. This refresh keeps that visual discipline while the Next.js implementation stays SEO-friendly, cacheable, and fast.
        </p>
      </section>
    </main>
  );
}
