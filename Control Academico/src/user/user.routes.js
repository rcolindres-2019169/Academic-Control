import { Router } from 'express'
import { deleteA, login, save, test, update } from "./user.controller.js";
import { validateJwt, isAdmin } from '../middlewares/validate-jwt.js';



const api = Router()


api.post('/save', save)
api.post('/login', login)



api.post('/test', [validateJwt, isAdmin], test)
api.put('/update/:id', [validateJwt],update)
api.delete('/delete/:id', [validateJwt], deleteA)
export default api