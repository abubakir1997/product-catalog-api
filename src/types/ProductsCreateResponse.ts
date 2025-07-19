import type { Product } from '@/types/Product'

export interface ProductsCreateResponse {
  product?: Product
  error?: string
}
