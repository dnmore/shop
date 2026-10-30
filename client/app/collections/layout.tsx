import { FilterDrawer } from "@/components/filter/filter-drawer"

export default function CollectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex w-full flex-col gap-2 px-5 py-10 lg:px-10">
      <h2 className="text-2xl sm:text-3xl">Products</h2>
      <div>
        <FilterDrawer />
      </div>

      {children}
    </div>
  )
}
