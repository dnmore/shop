import { ProductCard } from "@/components/products/product-card"
import { getProductsPerCategory } from "@/lib/data"

export default async function Page(props: {
  params: Promise<{ category: string }>
}) {
 
  const { category } = await props.params
  const data = await getProductsPerCategory(category)

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
