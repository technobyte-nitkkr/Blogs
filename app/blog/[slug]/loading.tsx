export default function BlogPostLoading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-5 py-8 lg:px-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] xl:grid-cols-[0.72fr_1.28fr]">
        <div className="space-y-4 rounded-[2rem] border border-zinc-900/10 bg-white/70 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-200" />
          <div className="h-10 w-4/5 animate-pulse rounded-2xl bg-zinc-200" />
          <div className="h-4 w-full animate-pulse rounded-full bg-zinc-200" />
          <div className="h-44 w-full animate-pulse rounded-[1.5rem] bg-zinc-200" />
        </div>

        <div className="space-y-6 rounded-[2rem] border border-zinc-900/10 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] lg:p-8 xl:p-10">
          <div className="space-y-3">
            <div className="h-4 w-28 animate-pulse rounded-full bg-zinc-200" />
            <div className="h-12 w-11/12 animate-pulse rounded-2xl bg-zinc-200" />
            <div className="h-5 w-2/3 animate-pulse rounded-full bg-zinc-200" />
          </div>
          <div className="h-[22rem] w-full animate-pulse rounded-[1.75rem] bg-zinc-200" />
          <div className="space-y-3">
            <div className="h-4 w-full animate-pulse rounded-full bg-zinc-200" />
            <div className="h-4 w-11/12 animate-pulse rounded-full bg-zinc-200" />
            <div className="h-4 w-5/6 animate-pulse rounded-full bg-zinc-200" />
          </div>
        </div>
      </div>
    </main>
  );
}
