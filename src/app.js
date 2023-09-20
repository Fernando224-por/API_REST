//Modulo principal para la ejecucion de tareas
import express from "express"   
import cors from "cors";
import employeesRoutes from './routes/employees.routes.js'
import usersRoutes from "./routes/users.routes.js"

//se instancia la Porpiedad express de EXPRESS
const app = express()
//las respuestas o peticiones se parsean a formato json
app.use(express.json())

/*app.use((req,res, next)=>{
    res.append('Access-Control-Allow-Origin', ['http://localhost:5173']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    //res.append('Access-Control-Allow-Headers', 'Content-Type');
    next()
})*/

app.use(cors({
    "origin":"http://localhost:5173",
    "methods":"GET,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))

//se crean las rutas de la api para realizar las peticiones
app.use('/api',employeesRoutes)

app.use('/api',usersRoutes)

//de no encontrar la ruta solicitada, regresa status 404 con un mensaje
app.use((req,res, next) =>{
    res.status(404).json({
        message:'Route not Found'
    })
})

export default app;