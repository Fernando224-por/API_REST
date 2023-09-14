import { config } from "dotenv";

config()

// se crean constantes para exportar
// se toman las variables proporcionadas del servidor si no toma las variables locales
// LAS VARIABLES DE ENTORNO SE DEBE CONFIGURAR

export const PORT = process.env.PORT || 3000 
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'admi'
export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'
export const DB_PORT = process.env.DB_PORT || '3306'

