export const PRODUCTS_UPDATE_RESPONSE_ERROR = {
  MISSING_ID: (id: any) => `Missing 'id' parameter. Received: ${id}`,
  INVALID_ID: (id: any) => `Invalide 'id' parameter. Expecting 'string', Received: ${id}`,

  INVALID_SKU: (sku: any) => `Invalide 'sku' parameter. Expecting 'string', Received: ${sku}`,
  INVALID_NAME: (name: any) => `Invalide 'name' parameter. Expecting 'string', Received: ${name}`,

  ERROR: (message: string) => `Error updating product. Error Message: "${message}"`,
}
