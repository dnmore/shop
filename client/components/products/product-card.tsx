"use client"

import { useCartStore } from "@/app/store/cart-store"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"







export function ProductCard({ product }: { product: ProductCard }) {

  const { addToCart} = useCartStore()
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
        <Button className="w-full" onClick={() => addToCart({ ...product, quantity: 1 })}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
