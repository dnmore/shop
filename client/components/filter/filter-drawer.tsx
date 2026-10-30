import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { SlidersHorizontal } from "lucide-react"

type Category = {
  title: string
}
export async function FilterDrawer() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
  const data = await fetch(`${apiUrl}/api/categories`)
  const categoriesData = await data.json()

  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <Button variant="ghost">
            <SlidersHorizontal data-icon="inline-start" />
            Categories
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl">Categories</DrawerTitle>
        </DrawerHeader>
        <div className="flex flex-col p-2">
          <Button variant="link" className="w-full justify-start">
            <Link
              href={`/collections/all`}
              className="text-sm font-medium text-gray-700 capitalize hover:text-gray-900"
            >
              All
            </Link>
          </Button>
          {categoriesData.categories.map((category: Category) => (
            <Button
              variant="link"
              key={category.title}
              className="w-full justify-start"
            >
              <Link
                href={`/collections/all/filter/${category.title.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 capitalize hover:text-gray-900"
              >
                {category.title}
              </Link>
            </Button>
          ))}
        </div>
        <DrawerFooter>
          <DrawerClose render={<Button>Close</Button>} />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
