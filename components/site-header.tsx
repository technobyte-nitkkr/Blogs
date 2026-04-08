import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Archive" },
];

export function SiteHeader() {
  return (
    <header className="surface-header sticky top-0 z-30">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-500/30 bg-amber-500/10 text-sm font-semibold text-amber-700 shadow-[0_12px_40px_rgba(217,119,6,0.12)] transition-transform group-hover:-translate-y-0.5">
            TB
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.24em] text-zinc-950 uppercase">
              Technobyte
            </span>
            <span className="text-xs text-zinc-500">Static blog archive</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/75 p-1 shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-950 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="surface-card-soft px-4 py-2 text-right shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Revalidation
            </p>
            <p className="text-sm font-medium text-zinc-950">12h ISR</p>
          </div>
          <div className="surface-card-dark px-4 py-2 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
              Build mode
            </p>
            <p className="text-sm font-medium">Static by default</p>
          </div>
        </div>
      </div>
    </header>
  );
}