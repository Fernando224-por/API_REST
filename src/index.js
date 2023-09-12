import express from "express"   
import employeesRoutes from './routes/employees.routes.js'
import pongRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use('/api',employeesRoutes)
app.use('/api',pongRoutes)


app.listen(3000)
console.log("escucha desde el puerto 3000")