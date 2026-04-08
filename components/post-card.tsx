import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/types/blog";

interface PostCardProps {
  post: BlogPost;
  featured?: boolean;
}

function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const readingTime = getReadingTime(post.content);

  return (
    <article
      className={[
        "group overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-[color:var(--surface-elevated)] shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1",
        featured ? "lg:grid lg:grid-cols-[1.25fr_0.95fr]" : "",
      ].join(" ")}
    >
      <div className={featured ? "relative min-h-[18rem] lg:min-h-[28rem]" : "relative h-56"}>
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 960px"}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            priority={featured}
          />
        ) : (
          <div className="flex h-full items-end bg-[linear-gradient(135deg,rgba(2,6,23,0.96),rgba(120,53,15,0.72),rgba(15,23,42,0.98))] p-6 text-white">
            <div className="max-w-xs space-y-2">
              <p className="text-xs uppercase tracking-[0.24em] text-amber-200">Technobyte</p>
              <h3 className="text-2xl font-semibold">{post.title}</h3>
            </div>
          </div>
        )}
      </div>

      <div className={featured ? "flex flex-col justify-between gap-6 p-6 lg:p-8" : "space-y-4 p-6"}>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
            <span>{post.author.name}</span>
            <span className="h-1 w-1 rounded-full bg-amber-500" />
            <span>{new Date(post.publishedAt).toLocaleDateString("en-IN")}</span>
            <span className="h-1 w-1 rounded-full bg-amber-500" />
            <span>{readingTime} min read</span>
          </div>

          <div className="space-y-3">
            <h2 className={featured ? "text-3xl font-semibold tracking-tight text-zinc-950 lg:text-5xl" : "text-2xl font-semibold tracking-tight text-zinc-950"}>
              <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-amber-700">
                {post.title}
              </Link>
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-zinc-600 lg:text-base">
              {post.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {(post.tags.length > 0 ? post.tags : [post.category ?? "blog"]).slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-900/10 bg-white px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="rounded-full border border-zinc-950 bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-amber-600 hover:border-amber-600"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
}