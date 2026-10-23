
import { CategoryCard } from "./category-card"

export async function CategoriesGrid() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"
  const data = await fetch(`${apiUrl}/api/categories`)
  const categoriesData = await data.json()
  
  return (
    <div className="flex w-full flex-wrap justify-between">
      {categoriesData.categories.map((category: CategoryCard) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  )
}
