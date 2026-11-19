import { ProductsGrid } from "@/components/products/products-grid"
import { getAllProducts } from "@/lib/data"
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Folder } from "lucide-react"

export default async function Page() {
  const data = await getAllProducts()

  return (
    <div>
      {data.products.length === 0 ? (
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
        <ProductsGrid productsData={data} />
      )}
    </div>
  )
}
