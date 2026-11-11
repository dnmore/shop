import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CartDrawer } from "@/components/cart/cart-drawer"

export function Nav() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-background transition-shadow duration-250">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-5 lg:px-10">
        <Link href="/">Shop</Link>
        <div className="flex items-center gap-2">
          <Button variant="link">
            <Link href="/admin/dashboard">Admin</Link>
          </Button>
          <CartDrawer />
        </div>
      </div>
    </nav>
  )
}
