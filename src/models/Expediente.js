'use strict'

import mongoose from 'mongoose'
import { MongoClient, ObjectId } from 'mongodb'

const url = 'mongodb://localhost/expedientes'

/**
 * Find all `expedientes`
 */

export function find (query, callback) {
  MongoClient.connect(url, (err, db) => {
    if (err) return callback(err)

    const collection = db.collection('expedientes')

    collection.find({}).toArray((err, docs) => {
      if (err) return callback(err)

      db.close()
      return callback(null, docs)
    })
  })
}

/**
 * Find one expediente.
 */

export function findById (id, callback) {
  MongoClient.connect(url, (err, db) => {
    if (err) return callback(err)

    const collection = db.collection('expedientes')

    collection.findOne({ _id: ObjectId(id) }, (err, doc) => {
      if (err) return callback(err)
      db.close()
      return callback(null, doc)
    })
  })
}

/**
 * Insert `expediente`
 */

export function save (data, callback) {
  MongoClient.connect(url, (err, db) => {
    if (err) return callback(err)

    const collection = db.collection('expedientes')

    collection.insert(data, (err, result) => {
      if (err) return callback(err)

      db.close()
      return callback(null, result.ops[0])
    })
  })
}

/**
 * Find one element by id and remove it.
 */

export function findByIdAndRemove (id, callback) {
  MongoClient.connect(url, (err, db) => {
    if (err) return callback(err)

    const collection = db.collection('expedientes')

    // Find element by id
    collection.findOne({ _id: ObjectId(id) }, (err, doc) => {
      if (err) return callback(err)
      else if (!doc) return callback()

      // If exist, remove it
      collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) return callback(err)

        db.close()
        return callback(null, true)
      })
    })
  })
}

/**
 * Update doc info.
 */

export function updateOne (id, updateInfo, callback) {
  MongoClient.connect(url, (err, db) => {
    if (err) return callback(err)

    const collection = db.collection('expedientes')

    // Update element info
    collection.updateOne({ _id: ObjectId(id) }, updateInfo, (err, result) => {
      if (err) return callback(err)
      return callback(null, result)
    })
  })
}
