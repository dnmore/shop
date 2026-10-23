import Link from "next/link"
import { CategoriesGrid } from "@/components/categories/categories-grid"

export default function Page() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex h-10 w-full items-center justify-center bg-black text-center text-base/[18px] text-nowrap text-white">
        Sale 50% OFF
        <Link href="/" className="ml-2 underline hover:no-underline">
          Shop Now
        </Link>
      </div>
      <CategoriesGrid />
    </div>
  )
}
