import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"







export function ProductCard({ product }: { product: ProductCard }) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={product.imageUrl}
        alt={product.name}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        
        <CardTitle>{product.name}</CardTitle>
       
          <span>${product.price}</span>
   
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
