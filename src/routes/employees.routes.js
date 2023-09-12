import { Router } from "express";
import { getEmployees,getEmployee,createEmployee,updateEmploye,deleteEmploye } from "../controllers/employees.controller.js";
const router = Router()

router.get('/employees',getEmployees)

router.get('/employees/:id',getEmployee)

router.post('/employees', createEmployee)

router.put('/employees',updateEmploye)

router.delete('/employees',deleteEmploye)

export default router