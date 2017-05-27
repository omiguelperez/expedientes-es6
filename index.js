'use strict'

import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import mongoose from 'mongoose'

import api from 'src/api'

mongoose.connect('mongodb://localhost/expendientes')

const port = process.env.PORT || 8080

const app = express()
const server = http.createServer(app)

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', api)

server.listen(port, err => {
  if (err) console.log(err.message), process.exit(0)
  console.log(`Server runing at http://localhost:${port}`)
})
