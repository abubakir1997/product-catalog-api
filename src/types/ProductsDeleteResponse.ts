import { Product } from '@/types/Product'

export interface ProductsDeleteResponse {
  id: string
  product?: Product | null
  error?: string
}
