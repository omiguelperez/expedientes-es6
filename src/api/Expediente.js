'use strict'

/**
 * Module dependencies
 */

import express from 'express'
import { ObjectId } from 'mongodb'
import * as Expediente from 'src/models/Expediente'
import { handleError } from 'src/api/helper'

/**
 * Get all `expedientes`
 */
export function find (req, res) {
  Expediente.find({}, (err, expedientes) => {
    if (err) return handleError(err, res)
    res.json(expedientes)
  })
}

/**
 * Get `expediente`
 */
export function findById (req, res) {
  let id = req.params.id

  if (id && !ObjectId.isValid(id))
    return res.status(400).send('Invalid `id`')

  Expediente.findById(id, (err, expediente) => {
    if (err) return handleError(err, res)
    else if (!expediente) return res.status(404).send('Not found')
    res.json(expediente)
  })
}

/**
 * Create new `expediente`
 */
export function create (req, res) {
  Expediente.save(req.body, (err, created) => {
    if (err) return handleError(err, res)
    res.status(201).json(created)
  })
}

/**
 * Update a given `expediente`
 */
export function update (req, res) {
  let
    id = req.params.id,
    expedienteActualizado = req.body

  if (id && !ObjectId.isValid(id))
    return res.status(400).send('Invalid `id`')

  Expediente.findById(id, (err, expediente) => {
    if (err) return handleError(err, res)
    else if (!expediente) return res.status(404).send('Not found')

    Expediente.updateOne(id, expedienteActualizado, (err, raw) => {
      if (err) return handleError(err, res)
      res.json(expedienteActualizado)
    })
  })
}

/**
 * Remove `expediente`
 */
export function remove (req, res) {
  let id = req.params.id

  if (id && !ObjectId.isValid(id))
    return res.status(400).send('Invalid `id`')

  Expediente.findByIdAndRemove(id, (err, expediente) => {
    if (err) return handleError(err, res)
    else if (!expediente) return res.status(404).send('Not found')
    return res.status(204).send()
  })
}
