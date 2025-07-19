import { ProductModel } from '@/schema/product'
import { Product } from '@/types/Product'

export async function deleteProduct(productId: string): Promise<Product | null> {
  return ProductModel.findOneAndDelete({ id: productId })
}
