import { ObjectId } from 'mongodb'

export interface Product {
  _id: ObjectId
  name: string
  sku: string
  description: string
  category: string
  image: string
  brand: string
}
