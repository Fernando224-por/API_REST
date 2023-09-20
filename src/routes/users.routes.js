// se trae la propiedad Router para crear rutas a la api
import { Router } from "express";

//se toman las funciones (CRUD) del archivo "controllers/users.controller.js"
import { getUsers, getUser, createUser,updateUser,deleteUser } from "../controllers/users.controllers.js";
//instanciamos la propiedad ROUTER de la libreria EXPRESS
const router = Router()

//creamos las rutas con el verbo HTTP, nombre de la ruta, metodo de la ruta 
//el metodo de la ruta proviene del import del archivo controllers/users.controller.js

router.get('/Users', getUsers)
router.get('/User/:id', getUser)
router.post('/Users', createUser)
router.patch('/User/:id', updateUser)
router.delete('/User/:id', deleteUser)
export default router