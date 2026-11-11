"use client"

import { createColumnHelper } from "@tanstack/react-table"

import { type DataTableFeatures } from "../data-table-features"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"


const columnHelper = createColumnHelper<DataTableFeatures, Product>()

export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "Id",
  }),
  columnHelper.accessor("name", {
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
         Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  }),
   columnHelper.accessor("categoryTitle", {
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  }),
   columnHelper.accessor("imageUrl", {
    header: "Image",
    cell: ({row}) => {
        const imageUrl = row.getValue("imageUrl")
        return <img src={`${imageUrl}`} alt="Product Image" className="w-16 h-16 object-cover rounded" />
    }
  }),
  columnHelper.accessor("price", {
     header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(price)
 
      return <div>{formatted}</div>}
  }),
  
])