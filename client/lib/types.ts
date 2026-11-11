interface Product {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
    categoryTitle: string
}


interface CartItem extends Product {
    quantity: number,
}

interface Order {
    id: string,
    status: "PENDING" | "PAID" | " COMPLETED" | "RETURNED" | "REFUNDED"
    total: number
    createdAt: Date
}