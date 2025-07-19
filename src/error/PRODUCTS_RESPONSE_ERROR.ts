export const PRODUCTS_RESPONSE_ERROR = {
  MISSING_LIMIT: (limit: any) => `Missing 'limit' parameter. Must be a number greater than 0. Received: ${limit}`,
  INVALID_LIMIT: (limit: any) => `Invalide 'limit' parameter. Must be a number greater than 0. Received: ${limit}`,

  MISSING_PAGE: (page: any) => `Missing 'page' parameter. Must be a number greater than 0. Received: ${page}`,
  INVALID_PAGE: (page: any) => `Invalide 'page' parameter. Must be a number greater than 0. Received: ${page}`,
}
