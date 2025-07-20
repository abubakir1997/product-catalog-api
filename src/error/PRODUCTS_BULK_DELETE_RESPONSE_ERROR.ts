export const PRODUCTS_BULK_DELETE_RESPONSE_ERROR = {
  MISSING_PRODUCT_IDS: (ids: any) => `Missing 'ids' parameter. Received: ${ids}`,
  INVALID_PRODUCT_IDS: (ids: any) => `Invalide 'ids' parameter. Expecting array of 'string', Received: ${ids}`,

  ERROR: (message: string) => `Error bulk deleting products. Error Message: "${message}"`,
}
