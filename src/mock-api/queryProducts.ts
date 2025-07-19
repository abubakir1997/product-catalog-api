import { MOCK_API } from '@/lib/constants'
import type { DummyProductsResponse } from '@/types/DummyProductsResponse'
import type { Product } from '@/types/Product'

export async function queryProducts(query: string, limit: number, page: number = 0): Promise<Product[]> {
  const response = await fetch(`${MOCK_API}/products/search?q=${query}&limit=${limit}&skip=${page * limit}`)
  const data = (await response.json()) as DummyProductsResponse

  return data.products.map(
    (product) =>
      ({
        category: product.category,
        description: product.description,
        id: product.id + '',
        name: product.title,
        brand: product.brand,
        sku: product.sku,
        image: product.images[0],
      }) satisfies Product
  )
}
