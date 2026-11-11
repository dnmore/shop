"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TrendingUpIcon, TrendingDownIcon } from "lucide-react"

type SectionCardsProps = {
  stats: [
     {
      totalSales: number
    },
    {
      totalOrders: number
    },
    {
      averageOrder: number
    }
  ]
}

export function SectionCards({stats}: SectionCardsProps) {

   const formattedAvgOrder = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(stats[2].averageOrder)
  const formattedTotalSales = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(stats[0].totalSales)


  return (
    <div className="grid grid-cols-1 gap-4 px-4  *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-3 @5xl/main:grid-cols-3 dark:*:data-[slot=card]:bg-card">
      
       <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-primary">Total Sales</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formattedTotalSales}
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              <TrendingUpIcon
              />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
       
      </Card>
       <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-primary">Total Orders</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {stats[1].totalOrders}
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
              <TrendingUpIcon
              />
              +8.3%
            </Badge>
          </CardAction>
        </CardHeader>
        
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="text-primary">Average Order</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {formattedAvgOrder}
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
              <TrendingDownIcon
              />
              -$4.20
            </Badge>
          </CardAction>
        </CardHeader>
        
      </Card>
    </div>
  )
}
