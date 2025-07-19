import type { Product } from '@/types/Product'

export interface ProductsUpdateRequest {
  id: string
  product: Partial<Product>
}
