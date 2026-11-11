const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export async function getHomepageProducts() {
  const data = await fetch(`${apiUrl}/api/products`)
  const productsData = await data.json()

  return productsData
}


export async function getAllProducts() {
    const data = await fetch(`${apiUrl}/api/products/all`)
  const productsData = await data.json()
  return productsData
}


export async function getProductsPerCategory(category:string){
    const data = await fetch(`${apiUrl}/api/categories/${category}`)
  const productsData = await data.json()

  return productsData
}

export async function getAllOrders(){
   const data = await fetch(`${apiUrl}/api/orders/all`)
  const ordersData = await data.json()

  return ordersData
}

export async function getDashboardStats(){
  const fetchedStatsData = await fetch(`${apiUrl}/api/dashboard/stats`)
  const statsData = await fetchedStatsData.json()
  return statsData
}

export async function getChartData(){
  const  fetchedChartData = await fetch(`${apiUrl}/api/dashboard/chart-data`)
  const chartData = await fetchedChartData.json()
  return chartData
}

export async function getLastOrders(){
  const fetchedLastOrders = await fetch(`${apiUrl}/api/orders/last`)
  const tableData = await fetchedLastOrders.json()
  return tableData
}