import { ProductCard } from "./product-card"

type ProductsGridProps = {
  productsData: {
    products: ProductCard[]
  }
}

export async function ProductsGrid({productsData}: ProductsGridProps) {
  

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {productsData.products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
