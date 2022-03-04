export interface Product {

  id: number,
  title: string,
  price: number,
  description?: string | null,
  category: string,
  image?: string | null,
  rating: {
    rate: number,
  count: number
  }

}
