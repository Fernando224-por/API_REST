import express from "express"   
import employeesRoutes from './routes/employees.routes.js'
import pongRoutes from './routes/index.routes.js'
const app = express()

app.use(express.json())

app.use('/api',employeesRoutes)
app.use('/api',pongRoutes)
app.use((req,res, next) =>{
    res.status(404).json({
        message:'Route not Found'
    })
})

export default app;