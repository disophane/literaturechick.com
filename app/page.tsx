import { ConfiscationNotice } from '@/components/confiscation-notice'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <ConfiscationNotice />
      </main>
    </div>
  )
}
