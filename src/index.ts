import express from 'express'

const app = express()

app.use(express.json())

app.get('/products', (req, res) => {
  return res.json({
    products: [],
  })
})


app.listen(3000, () => {
  console.log(
    "🚀 Server ready at: http://localhost:3000\n" +
    "// ⭐️ See sample requests: https://github.com/prisma/prisma-examples/blob/latest/orm/express/README.md#using-the-rest-api")
})