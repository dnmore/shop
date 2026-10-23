import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CategoryCard({ category }: { category: CategoryCard }) {
  return (
    <div className="m-[0 7.5px 15px] m-2 flex h-50 min-w-[30%] flex-[1_1_auto] items-center justify-center overflow-hidden">
      <div
        style={{ backgroundImage: `url("${category.imageUrl}")` }}
        className="h-full w-full bg-cover bg-center brightness-60"
      />

      <div className="absolute flex flex-col items-center justify-center gap-2 text-white">
        <h2 className="text-3xl font-bold">{category.title}</h2>
        <div className="group flex items-center justify-center gap-1">
          <Link
            href={`/categories/${category.title.toLowerCase()}`}
            className="text-xs uppercase"
          >
            Shop Now
          </Link>
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </div>
  )
}
