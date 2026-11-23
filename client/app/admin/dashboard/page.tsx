import type { Metadata} from "next"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"

import { SectionCards } from "@/components/section-cards"
import { OrdersTable } from "@/components/orders-table"
import { getDashboardStats, getChartData, getLastOrders } from "@/lib/data"
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Folder } from "lucide-react"

export const metadata: Metadata = {
  title: "Analytics"
}

export default async function Page() {
  const statsData = await getDashboardStats()
  const chartData = await getChartData()
  const tableData = await getLastOrders()

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        {statsData.stats.length === 0 ? (
          <Empty>
            <EmptyHeader>
              <EmptyMedia variant="icon">
                <Folder />
              </EmptyMedia>
              <EmptyTitle>No Data Yet</EmptyTitle>
            </EmptyHeader>
            <EmptyContent></EmptyContent>
          </Empty>
        ) : (
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards stats={statsData.stats} />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive chartData={chartData} />
            </div>
            <OrdersTable lastOrders={tableData.lastOrders} />
          </div>
        )}
      </div>
    </div>
  )
}
