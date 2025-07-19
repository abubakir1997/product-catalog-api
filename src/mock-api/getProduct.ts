import { MOCK_API } from '@/lib/constants'
import { DummyProduct } from '@/types/DummyProductsResponse'
import { Product } from '@/types/Product'

export async function getProduct(index: number): Promise<Product> {
  const response = await fetch(`${MOCK_API}/products/${index}`)
  const product = (await response.json()) as DummyProduct

  return {
    category: product.category,
    description: product.description,
    id: product.id + '',
    name: product.title,
    brand: product.brand,
    sku: product.sku,
    image: product.images[0],
  } satisfies Product
}
