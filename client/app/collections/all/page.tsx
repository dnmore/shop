import { ProductsGrid } from "@/components/products/products-grid"
import { getAllProducts } from "@/lib/data"

export default async function Page() {
  const data = await getAllProducts()

  return (
    <div>
      <ProductsGrid productsData={data} />
    </div>
  )
}
