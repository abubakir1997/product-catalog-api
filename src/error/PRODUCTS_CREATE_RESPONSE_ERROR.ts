export const PRODUCTS_CREATE_RESPONSE_ERROR = {
  MISSING_SKU: (sku: any) => `Missing 'sku' parameter. Received: ${sku}`,
  INVALID_SKU: (sku: any) => `Invalide 'sku' parameter. Expecting 'string', Received: ${sku}`,

  MISSING_NAME: (name: any) => `Missing 'name' parameter. Received: ${name}`,
  INVALID_NAME: (name: any) => `Invalide 'name' parameter. Expecting 'string', Received: ${name}`,

  ERROR: (message: string) => `Error creating product. Error Message: "${message}"`,
}
