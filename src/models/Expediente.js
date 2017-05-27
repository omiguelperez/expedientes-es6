'use strict'

import mongoose from 'mongoose'

let ExpedienteSchema = new mongoose.Schema({
  deudor: { type: String }
})

export default mongoose.model('Expediente', ExpedienteSchema)
