const express = require("express");
const apiRoute = require("./routes/routes"); //importamos la rutas

const app = express();
const PORT = process.env.PORT || 3000; //asignamos el puerto a nuestra variable de entorno o bien al puerto 3000 si no hay ninguno asignado

app.use(express.json()); //para darle formato  a los datos que vienen por postman o cualquier otra herramienta para hacer peticiones,darle el formateo de la app

app.use("/whatsapp", apiRoute); //en la url tien que venir whatsapp y despues  de eso va a buscar en las rutas de ./routes/routes  lo que esta dentro del whatsapp,

app.listen(PORT, () => {
    console.log("El puerto es: " + PORT);
}); //al escuchar la app  en el puerto 3000 mostramos un mensaje por consola