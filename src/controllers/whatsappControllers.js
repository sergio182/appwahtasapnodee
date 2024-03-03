const verifytoken = (req, res) => {
    try {
        var accessToken = "RTQCADENA12332" //creamos un token para configurar en el webhook dela app de varfacebook 
        var token = req.query["hub.verify_token"]; //capturamos lo que manda facebook en la documentacion esta asi
        var challenge = req.query["hub.challenge"]; //es para comparar el token que nos envia es el mismo que nosotros tenemos 
        if (challenge != null && token != null && accessToken == token) { //condicionamos que os dos sean diferntes de null y sean iguales
            res.send(challenge); //si todo es correcto devolvemos el challengue
        } else {
            res.status(400).send();
        }
    } catch (e) {
        res.status(400).send(); //en la documentacion dice que si da error ttiene que dar 400
    }

}; //se usa solo en el token




const recibeMessage = (req, res) => {
    res.send("HOla Recived");
}; //se usa cada vez que recibimios un mensaje

//Exportamos lo metodos
module.exports = {
    verifytoken,
    recibeMessage,
};