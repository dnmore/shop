"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

type OrderTableProps = {
  lastOrders: Order[]
}

export function OrdersTable({ lastOrders }: OrderTableProps) {


  return (
    <Table>
      <TableCaption>A list of the latest orders.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-25">Order</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lastOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>{order.status}</TableCell>
            <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
            <TableCell className="text-right">{new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(order.total)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      
    </Table>
  )
}
