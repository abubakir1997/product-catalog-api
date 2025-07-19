import { PRODUCTS_RESPONSE_ERROR } from '@/error/PRODUCTS_RESPONSE_ERROR'

export const SEARCH_PRODUCTS_RESPONSE_ERROR = {
  ...PRODUCTS_RESPONSE_ERROR,
  MISSING_QUERY: (query: any) => `Missing 'q' (query) parameter. Received: ${query}`,
  INVALID_QUERY: (query: any) => `Invalide 'q' (query) parameter. Must be a srting. Received: ${typeof query}`,
}
