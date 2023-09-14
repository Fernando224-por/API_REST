//Modulo principal para la ejecucion de tareas
import express from "express"   
import employeesRoutes from './routes/employees.routes.js'

//se instancia la Porpiedad express de EXPRESS
const app = express()
//las respuestas o peticiones se parsean a formato json
app.use(express.json())

//se crean las rutas de la api para realizar las peticiones
app.use('/api',employeesRoutes)

//de no encontrar la ruta solicitada, regresa status 404 con un mensaje
app.use((req,res, next) =>{
    res.status(404).json({
        message:'Route not Found'
    })
})

export default app;