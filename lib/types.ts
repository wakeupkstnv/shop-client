export interface Product {
  id: number
  name: string
  shortDescription: string
  fullDescription: string
  price: number
  image: string
  inStock: boolean
  specifications?: Record<string, string>
  category: string
}
