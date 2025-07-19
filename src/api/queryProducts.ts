import { ProductModel } from '@/schema/product'
import type { Product } from '@/types/Product'

export async function queryProducts(query: string, limit: number, page: number = 0): Promise<Product[]> {
  const skip = Math.max(page - 1, 0) * limit

  return ProductModel.find({ $text: { $search: query } }, { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
    .skip(skip)
    .limit(limit)
}
