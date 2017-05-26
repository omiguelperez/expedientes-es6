'use strict'

import express from 'express'
import http from 'http'

const port = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)

app.get('/', (req ,res) => {
  res.end('Hello world!')
})

server.listen(port, err => {
  if (err) console.log(err.message), process.exit(0)
  console.log(`Server runing at http://localhost:${port}`)
})
