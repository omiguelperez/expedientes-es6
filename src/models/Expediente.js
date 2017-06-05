'use strict'

import { MongoClient, ObjectId } from 'mongodb'
import { handleError, sendResponse } from 'src/models/helper'
import connect from 'src/models/connect'

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
  connect()
    .then(db => findExpedienteById(db))
    .catch(err => handleError(err, callback))

  function findExpedienteById (db) {
    const collection = db.collection('expedientes')

    collection.findOne({ _id: ObjectId(id) }, (err, doc) => {
      if (err) return handleError(err, callback, db)
      return sendResponse(doc, callback, db)
    })
  }
}

/**
 * Insert `expediente`
 */

export function save (data, callback) {
  connect()
    .then(db => saveExpediente(db))
    .catch(err => handleError(err, callback))

  function saveExpediente (db) {
    const collection = db.collection('expedientes')

    collection.insert(data, (err, result) => {
      if (err) return handleError(err, callback, db)
      return sendResponse(result.ops[0], callback, db)
    })
  }
}

/**
 * Find one element by id and remove it.
 */

export function findByIdAndRemove (id, callback) {
  connect()
    .then(db => findExpedienteByIdAndRemove(db))
    .catch(err => handleError(err, callback))

  function findExpedienteByIdAndRemove (db) {
    const collection = db.collection('expedientes')

    collection.findOne({ _id: ObjectId(id) }, (err, doc) => {
      if (err) return handleError(err, callback, db)
      else if (!doc) return callback()

      collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) return handleError(err, callback, db)
        return sendResponse(true, callback, db)
      })
    })
  }
}

/**
 * Update doc info.
 */

export function updateOne (id, updateInfo, callback) {
  connect()
    .then(db => updateExpediente(db))
    .catch(err => handleError(err, callback))

  function updateExpediente (db) {
    const collection = db.collection('expedientes')

    collection.updateOne({ _id: ObjectId(id) }, updateInfo, (err, result) => {
      if (err) return handleError(err, callback, db)
      return sendResponse(result, callback, db)
    })
  }
}
