"use client";

import { useEffect } from "react";

export default function BlogRouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 py-8 lg:px-8 lg:py-12">
      <div className="max-w-xl rounded-4xl border border-zinc-900/10 bg-(--surface-elevated) p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Error</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">Unable to load blog listings</h2>
        <p className="mt-3 text-sm leading-6 text-zinc-600">
          Listing content is temporarily unavailable. Please retry shortly.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-amber-600"
        >
          Retry
        </button>
      </div>
    </main>
  );
}
