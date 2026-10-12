import { Globe } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-border px-6 py-4">
      <div className="flex items-center gap-3">
        <Globe className="size-6 text-primary" aria-hidden="true" />
        <span className="font-mono text-sm font-semibold">
          <span className="text-primary">Literature</span>Chick
        </span>
        <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
          literaturechick.com
        </span>
      </div>
      <span className="inline-flex items-center gap-2 rounded-full border border-destructive/40 px-3 py-1 font-mono text-xs text-destructive">
        <span className="size-1.5 rounded-full bg-destructive" aria-hidden="true" />
        CONFISCATED
      </span>
    </header>
  )
}
