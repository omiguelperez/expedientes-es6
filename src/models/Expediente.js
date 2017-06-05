'use strict'

import { MongoClient, ObjectId } from 'mongodb'
import { handleError, sendResponse } from 'src/models/helper'
import connect from 'src/models/connect'

const url = 'mongodb://localhost/expedientes'

/**
 * Find all `expedientes`
 */

export function find (query, callback) {
  connect()
    .then(db => findExpedientes(db))
    .catch(err => handleError(err, callback))

  function findExpedientes (db) {
    const collection = db.collection('expedientes')

    collection.find({}).toArray((err, docs) => {
      if (err) return handleError(err, callback, db)
      return sendResponse(docs, callback, db)
    })
  }
}

/**
 * Find one expediente.
 */

export function findById (id, callback) {
  try {
    MongoClient.connect(url, (err, db) => {
      if (err) return handleError(err, callback, db)

      const collection = db.collection('expedientes')

      collection.findOne({ _id: ObjectId(id) }, (err, doc) => {
        if (err) return handleError(err, callback, db)
        return sendResponse(doc, callback, db)
      })
    })
  } catch (err) {
    handleError(err, callback)
  }
}

/**
 * Insert `expediente`
 */

export function save (data, callback) {
  try {
    MongoClient.connect(url, (err, db) => {
      if (err) return handleError(err, callback, db)

      const collection = db.collection('expedientes')

      collection.insert(data, (err, result) => {
        if (err) return handleError(err, callback, db)
        return sendResponse(result.ops[0], callback, db)
      })
    })
  } catch (err) {
    handleError(err, callback)
  }
}

/**
 * Find one element by id and remove it.
 */

export function findByIdAndRemove (id, callback) {
  try {
    MongoClient.connect(url, (err, db) => {
      if (err) return handleError(err, callback, db)

      const collection = db.collection('expedientes')

      collection.findOne({ _id: ObjectId(id) }, (err, doc) => {
        if (err) return handleError(err, callback, db)
        else if (!doc) return callback()

        collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
          if (err) return handleError(err, callback, db)
          return sendResponse(true, callback, db)
        })
      })
    })
  } catch (err) {
    handleError(err, callback)
  }
}

/**
 * Update doc info.
 */

export function updateOne (id, updateInfo, callback) {
  try {
    MongoClient.connect(url, (err, db) => {
      if (err) return handleError(err, callback, db)

      const collection = db.collection('expedientes')

      collection.updateOne({ _id: ObjectId(id) }, updateInfo, (err, result) => {
        if (err) return handleError(err, callback, db)
        return sendResponse(result, callback, db)
      })
    })
  } catch (err) {
    handleError(err, callback)
  }
}
