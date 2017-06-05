'use strict'

import { MongoClient } from 'mongodb'

const url = 'mongodb://localhost/expedientes'

/**
 * Connect to database
 */

export default function connect () {
  return new Promise(function(resolve, reject) {
    try {
      MongoClient.connect(url, (err, db) => {
        if (err) return reject(err)
        else return resolve(db)
      })
    } catch (err) {
      return reject(err)
    }
  })
}
