import Link from "next/link"
import { CartDrawer} from "@/components/cart/cart-drawer"

export function Nav() {
  return (
    <nav className="sticky top-0 z-30 w-full bg-background transition-shadow duration-250">
      <div className="mx-auto flex h-16 w-full items-center justify-between px-5 lg:px-10">
        <Link href="/">Shop</Link>

        <CartDrawer/>
      </div>
    </nav>
  )
}
