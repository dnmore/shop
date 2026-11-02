"use client"
import { useCartStore } from "@/app/store/cart-store"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { HandbagIcon, X, Minus, Plus, Trash } from "lucide-react"

export function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCartStore()

  const totalItems = useCartStore((state) =>
    state.cartItems.reduce((acc, item) => acc + item.quantity, 0)
  )

  const totalPrice = useCartStore((state) =>
    state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  )
  return (
    <Drawer swipeDirection="right">
      <DrawerTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Shopping cart with ${totalItems} items`}
            className="relative inline-flex items-center justify-center"
          >
            <HandbagIcon className="size-5" />
            {totalItems > 0 && (
              <span
                aria-live="polite"
                className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-primary-foreground"
              >
                {totalItems}
              </span>
            )}
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle className="text-xl">Cart</DrawerTitle>

            <DrawerClose
              render={
                <Button variant="ghost">
                  <X className="size-5" />
                </Button>
              }
            />
          </div>
        </DrawerHeader>
        <div className="flex flex-col px-4 py-2">
          {cartItems.length > 0 ? (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="size-16 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-lg font-bold">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      <Minus className="size-4" />
                    </Button>
                    <span className="text-sm">{item.quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      <Plus className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Trash className="size-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm">Your cart is empty</p>
          )}
        </div>
        <DrawerFooter>
          {cartItems.length > 0 && (
            <>
              <div className="mb-4 flex w-full justify-between">
                <p className="text-lg">Total</p>
                <p className="text-xl font-bold">${totalPrice}</p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Button>Go To Checkout</Button>
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
