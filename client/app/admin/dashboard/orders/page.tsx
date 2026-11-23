import type { Metadata} from "next"
import { getAllOrders } from "@/lib/data"
import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Folder } from "lucide-react"

export const metadata: Metadata = {
  title: "Orders"
}

export default async function Page() {
  const data = await getAllOrders()

  return (
    <div className="px-2">
      {data.orders.length === 0 ? (
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Folder />
            </EmptyMedia>
            <EmptyTitle>No Orders Yet</EmptyTitle>
          </EmptyHeader>
          <EmptyContent></EmptyContent>
        </Empty>
      ) : (
        <DataTable columns={columns} data={data.orders} />
      )}
    </div>
  )
}
