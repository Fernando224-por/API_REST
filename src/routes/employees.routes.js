// se trae la propiedad Router para crear rutas a la api
import { Router } from "express";
//se toman las funciones (CRUD) del archivo "controllers/employees.controller.js"
import { getEmployees,getEmployee,createEmployee,updateEmploye,deleteEmploye } from "../controllers/employees.controller.js";
//instanciamos la propiedad ROUTER de la libreria EXPRESS
const router = Router()

//creamos las rutas con el verbo HTTP, nombre de la ruta, metodo de la ruta 
//el metodo de la ruta proviene del import del archivo controllers/employees.controller.js

router.get('/employees',getEmployees)

router.get('/employees/:id',getEmployee)

router.post('/employees', createEmployee)

router.delete('/employee/:id',deleteEmploye)

router.patch('/employees/:id',updateEmploye)

export default router