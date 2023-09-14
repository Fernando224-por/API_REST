import { createPool } from "mysql2/promise";
import {
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD
}
from './config.js'

//se crea una conexion a la DB para realizar peticiones desde la api
//las variables son proporcionadas por el archivo './config.js'
export const pool = createPool({
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    port:DB_PORT,
    database:DB_DATABASE
})