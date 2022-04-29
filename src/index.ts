import express from "express"
import { middleware as openApiValidator } from "express-openapi-validator"

const server = express()

server.use(
  openApiValidator({
    apiSpec: "./src/openapi.yml",
    validateResponses: true,
  })
)

server.get("/", (_req, res) => {
  res.json({
    message: "Hello express",
    test: "1234-12-12",
    test2: "2"
  })
})

server.listen(3000, () => {
  console.log("start server on http://localhost:3000")
})
