declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // Server Configuration
      PORT?: string
      NODE_ENV?: 'development' | 'production' | 'test'

      // MongoDB Configuration
      MONGO_DB_USERNAME?: string
      MONGO_DB_PASSWORD?: string

      // CORS Configuration
      CORS_ORIGIN?: string
    }
  }
}

export {}
