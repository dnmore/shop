
import { getAllOrders } from "@/lib/data"
import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

export default async function Page() {
  const data = await getAllOrders()

  return (
    <div className="px-2">
      <DataTable columns={columns} data={data.orders} />
    </div>
  )
}
