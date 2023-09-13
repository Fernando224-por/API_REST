import app from "./app.js"
import { PORT } from "./config"

app.listen(PORT)
console.log("escucha desde el puerto", PORT)