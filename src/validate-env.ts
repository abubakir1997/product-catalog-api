// Environment Variables
// ************************************
// NODE_ENV
// MONGO_DB_URI
// CORS_ORIGIN

if (!process.env.MONGO_DB_URI?.trim()) {
  console.error("[product-catalog-api] Missing required environment variable 'MONGO_DB_URI'")
  process.exit(1)
}
