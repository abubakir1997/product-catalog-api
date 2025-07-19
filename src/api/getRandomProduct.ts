import { getProduct as getDummyProduct } from '@/mock-api/getProduct'
import { Product } from '@/types/Product'
import { random } from 'lodash'

export async function getRandomProduct(): Promise<Product> {
  return getDummyProduct(random(0, 100))
}
