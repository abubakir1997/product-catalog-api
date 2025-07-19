import { createProduct } from '@/api/createProduct'
import { deleteProduct } from '@/api/deleteProduct'
import { getProducts } from '@/api/getProducts'
import { getRandomProduct } from '@/api/getRandomProduct'
import { queryProducts } from '@/api/queryProducts'
import { updateProduct } from '@/api/updateProduct'
import { PRODUCTS_CREATE_RESPONSE_ERROR } from '@/error/PRODUCTS_CREATE_RESPONSE_ERROR'
import { PRODUCTS_DELETE_RESPONSE_ERROR } from '@/error/PRODUCTS_DELETE_RESPONSE_ERROR'
import { PRODUCTS_RANDOM_RESPONSE_ERROR } from '@/error/PRODUCTS_RANDOM_RESPONSE_ERROR'
import { PRODUCTS_RESPONSE_ERROR } from '@/error/PRODUCTS_RESPONSE_ERROR'
import { PRODUCTS_UPDATE_RESPONSE_ERROR } from '@/error/PRODUCTS_UPDATE_RESPONSE_ERROR'
import { SEARCH_PRODUCTS_RESPONSE_ERROR } from '@/error/SEARCH_PRODUCTS_RESPONSE_ERROR'
import { ProductModel } from '@/schema/product'
import { ProductsCreateRequest } from '@/types/ProductsCreateRequest'
import { ProductsCreateResponse } from '@/types/ProductsCreateResponse'
import { ProductsDeleteRequest } from '@/types/ProductsDeleteRequest'
import { ProductsDeleteResponse } from '@/types/ProductsDeleteResponse'
import { ProductsRandomResponse } from '@/types/ProductsRandomResponse'
import { ProductsRequest } from '@/types/ProductsRequest'
import { ProductsResponse } from '@/types/ProductsResponse'
import { ProductsUpdateRequest } from '@/types/ProductsUpdateRequest'
import { ProductsUpdateResponse } from '@/types/ProductsUpdateResponse'
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
  const productTotalCount = await ProductModel.estimatedDocumentCount()

  return res.json({
    products,
    total: productTotalCount + 1,
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

productsRouter.get<{}, ProductsRandomResponse>('/random', async (req, res) => {
  try {
    const product = await getRandomProduct()

    res.status(200).send({ product })
  } catch (err) {
    const error = err as Error

    res.status(500).send({ error: PRODUCTS_RANDOM_RESPONSE_ERROR.ERROR(error.message) })
  }
})

productsRouter.post<{}, ProductsCreateResponse, ProductsCreateRequest>('/', async (req, res) => {
  try {
    if (typeof req.body.product.sku !== 'string') {
      return res.status(400).send({ error: PRODUCTS_CREATE_RESPONSE_ERROR.INVALID_SKU(req.body.product.sku) })
    }
    if (!req.body.product.sku.trim()) {
      return res.status(400).send({ error: PRODUCTS_CREATE_RESPONSE_ERROR.MISSING_SKU(req.body.product.sku) })
    }
    if (typeof req.body.product.name !== 'string') {
      return res.status(400).send({ error: PRODUCTS_CREATE_RESPONSE_ERROR.INVALID_NAME(req.body.product.name) })
    }
    if (!req.body.product.name.trim()) {
      return res.status(400).send({ error: PRODUCTS_CREATE_RESPONSE_ERROR.MISSING_NAME(req.body.product.name) })
    }

    const product = await createProduct(req.body.product)

    res.status(200).send({ product })
  } catch (err) {
    const error = err as Error

    res.status(500).send({ error: PRODUCTS_CREATE_RESPONSE_ERROR.ERROR(error.message) })
  }
})

productsRouter.put<{}, ProductsUpdateResponse, ProductsUpdateRequest>('/', async (req, res) => {
  const id = req.body.id || ''

  try {
    if (typeof id !== 'string') {
      return res.status(400).send({ id, error: PRODUCTS_UPDATE_RESPONSE_ERROR.INVALID_ID(id) })
    }
    if (!id.trim()) {
      return res.status(400).send({ id, error: PRODUCTS_UPDATE_RESPONSE_ERROR.MISSING_ID(id) })
    }
    if (req.body.product.sku !== undefined && typeof req.body.product.sku !== 'string') {
      return res.status(400).send({ id, error: PRODUCTS_UPDATE_RESPONSE_ERROR.INVALID_SKU(req.body.product.sku) })
    }
    if (req.body.product.name !== undefined && typeof req.body.product.name !== 'string') {
      return res.status(400).send({ id, error: PRODUCTS_UPDATE_RESPONSE_ERROR.INVALID_NAME(req.body.product.name) })
    }

    const product = await updateProduct(id, req.body.product)

    res.status(200).send({ id, product })
  } catch (err) {
    const error = err as Error

    res.status(500).send({ id, error: PRODUCTS_CREATE_RESPONSE_ERROR.ERROR(error.message) })
  }
})

productsRouter.delete<ProductsDeleteRequest, ProductsDeleteResponse>('/:id', async (req, res) => {
  const id = req.params.id || ''

  try {
    if (typeof id !== 'string') {
      return res.status(400).send({ id, error: PRODUCTS_DELETE_RESPONSE_ERROR.INVALID_PRODUCT_ID(id) })
    }
    if (!id.trim()) {
      return res.status(400).send({ id, error: PRODUCTS_DELETE_RESPONSE_ERROR.MISSING_PRODUCT_ID(id) })
    }

    const product = await deleteProduct(id)

    res.status(200).send({ id, product })
  } catch (err) {
    const error = err as Error

    res.status(500).send({ id, error: PRODUCTS_DELETE_RESPONSE_ERROR.ERROR(error.message) })
  }
})

export { productsRouter }
