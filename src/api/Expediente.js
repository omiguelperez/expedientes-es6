'use strict'

/**
 * Module dependencies
 */

import express from 'express'
import mongoose from 'mongoose'
import Expediente from 'src/models/Expediente'

/**
 * Get all `expedientes`
 */
export function find (req, res) {
  Expediente.find({}, (err, expedientes) => {
    if (err) return res.status(500).json(err)
    res.json(expedientes)
  })
}

/**
 * Get `expediente`
 */
export function findById (req, res) {
  let id = req.params.id

  if (id && !mongoose.Types.ObjectId.isValid(id))
    return res.status(400).send('Invalid `id`')

  Expediente.findById(id, (err, expediente) => {
    if (err) return res.status(500).json(err)
    else if (!expediente) return res.status(404).send('Not found')
    res.json(expediente)
  })
}

/**
 * Create new `expediente`
 */
export function create (req, res) {
  let expediente = new Expediente(req.body)

  expediente.save((err, created) => {
    if (err) return res.status(500).json(err)
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

  if (id && !mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('Invalid `id`')

  Expediente.findById(id, (err, expediente) => {
    if (err) return res.status(500).json(err)
    else if (!expediente) return res.status(404).send('Not found')

    Expediente.update({ _id: id }, expedienteActualizado, (err, raw) => {
      if (err) return res.status(500).json(err)
      res.json(expedienteActualizado)
    })
  })
}

/**
 * Remove `expediente`
 */
export function remove (req, res) {
  let id = req.params.id

  if (id && !mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send('Invalid `id`')

  Expediente.findByIdAndRemove(id, (err, expediente) => {
    if (err) return res.status(500).json(err)
    else if (!expediente) return res.status(404).send('Not found')
    res.status(204).send()
  })
}
