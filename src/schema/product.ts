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

productSchema.index({ sku: 'text', name: 'text', description: 'text', category: 'text', brand: 'text' })

export const ProductModel = model('Product', productSchema)
