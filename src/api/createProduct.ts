import { ProductModel } from '@/schema/product'
import { Product } from '@/types/Product'

export async function createProduct(product: Product): Promise<Product> {
  return ProductModel.create(product)
}
