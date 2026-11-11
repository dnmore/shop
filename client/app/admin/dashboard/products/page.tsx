import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import { getAllProducts } from "@/lib/data"

export default async function Page() {
   const data = await getAllProducts()
  return (
    <div className="px-2">
      <DataTable columns={columns} data={data.products} />
    </div>
  )
}