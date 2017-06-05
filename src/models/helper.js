'use strict'

/**
 * Handle error in models.
 */

export function handleError (err, callback, db) {
  console.log('Error:', err.message)

  if (db) db.close()
  return callback(err)
}

/**
 * Send response to model function caller
 */

export function sendResponse (response, callback,  db) {
  if (db) db.close()
  return callback(null, response)
}
