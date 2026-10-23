import Link from "next/link"
import { HandbagIcon, Search } from "lucide-react"

export function Nav() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-background transition-shadow duration-250">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-5 lg:px-10">
        <Link href="/">Shop</Link>
        <div className="flex items-center gap-2.5">
          <Search className="size-5" />
          <HandbagIcon className="size-5" />
        </div>
      </div>
    </nav>
  )
}
