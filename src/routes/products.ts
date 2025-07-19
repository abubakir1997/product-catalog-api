import { createRandomProduct } from '@/api/createRandomProduct'
import { getProducts } from '@/api/getProducts'
import { queryProducts } from '@/api/queryProducts'
import { PRODUCTS_RESPONSE_ERROR } from '@/error/PRODUCTS_RESPONSE_ERROR'
import { SEARCH_PRODUCTS_RESPONSE_ERROR } from '@/error/SEARCH_PRODUCTS_RESPONSE_ERROR'
import { ProductsRequest } from '@/types/ProductsRequest'
import { ProductsResponse } from '@/types/ProductsResponse'
import { SearchProductsRequest } from '@/types/SearchProductsRequest'
import { Router } from 'express'

const productsRouter = Router()

productsRouter.get<{}, ProductsResponse, {}, ProductsRequest>('/', async (req, res) => {
  const { limit, page, sortBy = 'sku', sortByDirection = 'desc' } = req.query

  if (limit === undefined) {
    return res.status(400).send({
      products: [],
      error: PRODUCTS_RESPONSE_ERROR.MISSING_LIMIT(limit),
    })
  }
  if (page === undefined) {
    return res.status(400).send({
      products: [],
      error: PRODUCTS_RESPONSE_ERROR.MISSING_PAGE(page),
    })
  }
  if (limit < 0) {
    return res.status(400).send({
      products: [],
      error: PRODUCTS_RESPONSE_ERROR.INVALID_LIMIT(limit),
    })
  }
  if (page < 0) {
    return res.status(400).send({
      products: [],
      error: PRODUCTS_RESPONSE_ERROR.INVALID_PAGE(page),
    })
  }

  const skip = page * limit
  const products = await getProducts(sortBy, sortByDirection, limit, page)

  return res.json({
    products,
    total: products.length,
    skip,
    limit,
  })
})

productsRouter.get<{}, ProductsResponse, {}, SearchProductsRequest>('/search', async (req, res) => {
  const { q, limit, page } = req.query

  if (q === undefined) {
    return res.status(400).send({
      products: [],
      error: SEARCH_PRODUCTS_RESPONSE_ERROR.MISSING_QUERY(q),
    })
  }
  if (limit === undefined) {
    return res.status(400).send({
      products: [],
      error: SEARCH_PRODUCTS_RESPONSE_ERROR.MISSING_LIMIT(limit),
    })
  }
  if (page === undefined) {
    return res.status(400).send({
      products: [],
      error: SEARCH_PRODUCTS_RESPONSE_ERROR.MISSING_PAGE(page),
    })
  }
  if (typeof q !== 'string') {
    return res.status(400).send({
      products: [],
      error: SEARCH_PRODUCTS_RESPONSE_ERROR.INVALID_QUERY(q),
    })
  }
  if (limit < 0) {
    return res.status(400).send({
      products: [],
      error: SEARCH_PRODUCTS_RESPONSE_ERROR.INVALID_LIMIT(limit),
    })
  }
  if (page < 0) {
    return res.status(400).send({
      products: [],
      error: SEARCH_PRODUCTS_RESPONSE_ERROR.INVALID_PAGE(page),
    })
  }

  const products = await queryProducts(q, limit, page)

  return res.json({
    products,
    total: products.length,
    skip: 0,
    limit,
  })
})

productsRouter.get('/create/random', async (req, res) => {
  try {
    const product = await createRandomProduct()

    res.status(200).send(`Successfully created random product: ${product.sku}`)
  } catch {
    res.status(500).send('Failed to create random product')
  }
})

export { productsRouter }
