import { ProductsGrid } from "@/components/products/products-grid"

export default async function Page() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
  const data = await fetch(`${apiUrl}/api/products/all`)
  const productsData = await data.json()

  return (
    <div>
      <ProductsGrid productsData={productsData} />
    </div>
  )
}
