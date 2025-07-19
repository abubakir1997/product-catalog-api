export interface ProductsRequest {
  sortBy?: string
  sortByDirection?: 'desc' | 'asc'
  limit: number
  page: number
}
