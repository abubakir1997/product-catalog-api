import type { Product } from '@/types/Product'

export interface ProductsUpdateResponse {
  id: string
  product?: Product | null
  error?: string
}
