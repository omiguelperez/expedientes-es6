'use strict'

/**
 * Handle http error.
 */

export function handleError (err, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.statusCode = 500
  return res.send('Internal Server Error')
}
