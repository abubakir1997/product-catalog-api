import { Product } from '@/types/Product'
import { model, Schema } from 'mongoose'

const productSchema = new Schema<Product>({
  id: String,
  name: String,
  sku: String,
  description: String,
  category: String,
  image: String,
  brand: String,
})

export const ProductModel = model('Product', productSchema)
