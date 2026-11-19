import { ProductCard } from "@/components/products/product-card"
import { getProductsPerCategory } from "@/lib/data"
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Folder } from "lucide-react"

export default async function Page(props: {
  params: Promise<{ category: string }>
}) {
  const { category } = await props.params
  const data = await getProductsPerCategory(category)

  return (
    <>
      {data.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Folder />
            </EmptyMedia>
            <EmptyTitle>No Products Yet</EmptyTitle>
          </EmptyHeader>
          <EmptyContent></EmptyContent>
        </Empty>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {data.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  )
}
