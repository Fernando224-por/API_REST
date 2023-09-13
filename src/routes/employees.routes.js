import { Router } from "express";
import { getEmployees,getEmployee,createEmployee,updateEmploye,deleteEmploye } from "../controllers/employees.controller.js";
const router = Router()

router.get('/employees',getEmployees)

router.get('/employees/:id',getEmployee)

router.post('/employees', createEmployee)

router.delete('/employee/:id',deleteEmploye)

router.patch('/employees/:id',updateEmploye)

export default router