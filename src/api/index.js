'use strict'

import express from 'express'
import { find, create, update, remove, findById } from 'src/api/Expediente'

const router = express.Router()

router.route('/expedientes')
  .get(find)
  .post(create)

router.route('/expedientes/:id')
  .get(findById)
  .put(update)
  .delete(remove)

export default router
