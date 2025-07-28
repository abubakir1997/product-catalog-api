import { MongoClient, ServerApiVersion } from 'mongodb'
import mongoose from 'mongoose'

const uri = process.env.MONGODB_URI || process.env.MONGO_DB_URI || ''

mongoose.connect(uri, {
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
})

mongoose.connection.on('connected', () => {
  console.log('✅ Connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('⚠️ MongoDB disconnected')
})

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
})

export const db = client.db('products')
