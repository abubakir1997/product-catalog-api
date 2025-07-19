import { getProduct as getDummyProduct } from '@/mock-api/getProduct'
import { ProductModel } from '@/schema/product'
import { Product } from '@/types/Product'
import { random } from 'lodash'

export async function createRandomProduct(): Promise<Product> {
  const dummyProduct = await getDummyProduct(random(0, 100))
  const product = new ProductModel(dummyProduct)

  return product.save()
}
