import { ShieldAlert } from 'lucide-react'

export function ConfiscationNotice() {
  return (
    <section
      aria-labelledby="notice-title"
      className="w-full max-w-2xl rounded-lg border border-border bg-input/40"
    >
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold">
          <ShieldAlert className="size-4 text-accent" aria-hidden="true" />
          Domain Notice
        </div>
        <span className="rounded-md bg-destructive/15 px-2 py-0.5 font-mono text-xs text-destructive">
          status: confiscated
        </span>
      </div>

      <div className="px-5 py-12 text-center sm:px-10 sm:py-16">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          literaturechick.com
        </p>
        <h1
          id="notice-title"
          className="font-mono text-2xl font-semibold leading-snug text-balance sm:text-4xl"
        >
          This domain has been confiscated by{' '}
          <a
            href="https://zeroauthority.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-2"
          >
            ZeroAuthority.org
          </a>
        </h1>
      </div>
    </section>
  )
}
