import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
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
    <div className="px-2">
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
        <DataTable columns={columns} data={data.products} />
      )}
    </div>
  )
}
