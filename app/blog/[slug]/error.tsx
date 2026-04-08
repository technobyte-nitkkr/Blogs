"use client";

import { useEffect } from "react";

export default function BlogPostError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface route-level errors for observability tooling.
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 lg:px-8 lg:py-12">
      <div className="max-w-xl rounded-4xl border border-zinc-900/10 bg-(--surface-elevated) p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Error</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">Failed to load this blog post</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          A temporary content fetch error occurred. Please retry.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-600"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
