"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "../data-table-features"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"


const columnHelper = createColumnHelper<DataTableFeatures, Order>()

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "Id",
  }),
  columnHelper.accessor("status", {
    header: "Status",
  }),
  columnHelper.accessor("total", {
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Total
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const total = parseFloat(row.getValue("total"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(total)
 
      return <div>{formatted}</div>}
  }),
  columnHelper.accessor("createdAt", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
     cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt")).toLocaleString()

      return <div>{date}</div>
    },
  })
])