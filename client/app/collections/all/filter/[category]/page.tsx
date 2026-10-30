import { ProductCard } from "@/components/products/product-card"

export default async function Page(props: {
  params: Promise<{ category: string }>
}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
  const { category } = await props.params
  const data = await fetch(`${apiUrl}/api/categories/${category}`)
  const productsData = await data.json()

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {productsData.map((product: ProductCard) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
