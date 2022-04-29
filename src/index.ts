import express from "express"

const server = express()

server.get("/", (_req, res) => {
  res.json("Hello express")
})

server.listen(3000, () => {
  console.log("start server on http://localhost:3000")
})
