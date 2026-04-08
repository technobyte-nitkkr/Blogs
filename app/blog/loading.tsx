export default function BlogListingLoading() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-5 py-8 lg:px-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="space-y-4 rounded-[2rem] border border-zinc-900/10 bg-white/70 p-7 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="h-4 w-24 animate-pulse rounded-full bg-zinc-200" />
          <div className="h-10 w-2/3 animate-pulse rounded-2xl bg-zinc-200" />
          <div className="h-4 w-full animate-pulse rounded-full bg-zinc-200" />
          <div className="h-28 w-full animate-pulse rounded-3xl bg-zinc-200" />
        </div>

        <div className="grid gap-6">
          <div className="h-[28rem] animate-pulse rounded-[2rem] bg-zinc-200/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)]" />
          <div className="h-80 animate-pulse rounded-[2rem] bg-zinc-200/80 shadow-[0_18px_60px_rgba(15,23,42,0.08)]" />
        </div>
      </div>
    </main>
  );
}
