import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductsGrid } from "@/components/products/products-grid"
export default async function Page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
  const data = await fetch(`${apiUrl}/api/products`)
  const productsData = await data.json()

  return (
    <div className="flex w-full flex-col">
      <section className="grid grid-cols-1">
        <div className="col-start-1 row-start-1 hidden md:block md:aspect-4/1" />
        <div className="relative col-start-1 row-start-1 flex items-center justify-center px-5 py-10 lg:px-10">
          <div className="flex flex-col items-center gap-2.5 text-center">
            <h1 className="max-w-3xl text-3xl text-foreground md:text-5xl">
              Storefront With Admin Dashboard
            </h1>
            <p className="max-w-xl text-sm text-foreground md:text-base">
              Commerce powered by Next.js, Node.js, and PostgreSQL.
            </p>
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col gap-5 px-5 py-10 lg:px-10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl">Products</h2>
          <Button variant="link">
            <Link href="/collections/all">View All</Link>
          </Button>
        </div>
        <ProductsGrid productsData={productsData} />
      </section>
    </div>
  )
}
