'use strict'

import { Router } from 'express'
import { deleteA, save, update } from './course.controller.js'

const api = Router()

api.post('/save', save)
api.put('/update/:id', update)
api.delete('/deleteA/:id', deleteA)

export default api