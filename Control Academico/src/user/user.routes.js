import express from 'express'
import { test } from "./user.controller.js";


const api = express.Router()

api.post('/test', test)


export default api