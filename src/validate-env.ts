// Environment Variables
// ************************************
// NODE_ENV
// MONGO_DB_URI
// CORS_ORIGIN

const mongoUri = process.env.MONGODB_URI || process.env.MONGO_DB_URI
if (!mongoUri?.trim()) {
  console.error("[product-catalog-api] Missing required environment variable 'MONGODB_URI' or 'MONGO_DB_URI'")
  process.exit(1)
}
