interface ProductCard {
    id: string,
    name: string,
    imageUrl: string,
    price: number,
}


interface CartItem extends ProductCard {
    quantity: number,
}