import { ProductModel } from '@/schema/product'
import { Product } from '@/types/Product'

export async function updateProduct(id: string, product: Partial<Product>): Promise<Product | null> {
  return ProductModel.findByIdAndUpdate({ _id: id }, product, { new: true })
}
