export const PRODUCTS_DELETE_RESPONSE_ERROR = {
  MISSING_PRODUCT_ID: (productId: any) => `Missing 'productId' parameter. Received: ${productId}`,
  INVALID_PRODUCT_ID: (productId: any) => `Invalide 'productId' parameter. Expecting 'string', Received: ${productId}`,

  ERROR: (message: string) => `Error deleting product. Error Message: "${message}"`,
}
