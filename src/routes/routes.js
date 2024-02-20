const expres = require("express"); //importamos el paquete express
const router = expres.Router(); //importamos el paquete  Router de express para crear las rutas
const whatsAppcontroller = require("../controllers/whatsappControllers");

router
    .get("/", whatsAppcontroller.verifytoken) //aqui recibe el togen en get esta en la documentacion
    .post("/", whatsAppcontroller.recibeMessage); //enpost recibe el mensaje esta en la documentacion

//exportamos las rutas
module.exports = router;