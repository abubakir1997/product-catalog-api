import cors from 'cors'
import express from 'express'

import '@/db/connection'

import { productsRouter } from '@/routes/products'

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', productsRouter)

app.listen(PORT, () => {
  console.log(`🚀 Server ready at: http://localhost:${PORT}`)
})
