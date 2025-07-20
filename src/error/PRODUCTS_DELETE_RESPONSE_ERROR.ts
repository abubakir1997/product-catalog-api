export const PRODUCTS_DELETE_RESPONSE_ERROR = {
  MISSING_PRODUCT_ID: (id: any) => `Missing 'id' parameter. Received: ${id}`,
  INVALID_PRODUCT_ID: (id: any) => `Invalide 'id' parameter. Expecting 'string', Received: ${id}`,

  ERROR: (message: string) => `Error deleting product. Error Message: "${message}"`,
}
