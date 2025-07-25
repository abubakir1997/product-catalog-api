import { ProductModel } from '@/schema/product'
import { Product } from '@/types/Product'
import { SortOrder } from 'mongoose'

export async function getProducts(
  sortBy: string,
  sortByDirection: SortOrder,
  limit: number,
  page: number = 0
): Promise<Product[]> {
  const skip = page * limit

  return ProductModel.find()
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortByDirection })
}
