import { ProductModel } from '@/schema/product'
import { Product } from '@/types/Product'

export async function deleteProducts(ids: string[]): Promise<Product[]> {
  // First find the documents to get the originals
  const originalDocs = await ProductModel.find({ _id: { $in: ids } })

  // Then delete them
  await ProductModel.deleteMany({ _id: { $in: ids } })

  return originalDocs
}
