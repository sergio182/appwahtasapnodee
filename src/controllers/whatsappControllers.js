const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt")); //aqui se guardaran lo que le mandemos de postman conmo json de un mensaje de prueba osea un mensaje
//const whatsappservice = require("../services/whatsappService"); //importamos el servicio de todas manera ya no se necestita aqui porque lo estamos importando en processMessage pero lo dejare
//const samples = require("../shared/sampleMiodels"); //importamos las funcionesd shared para devolvr un contenido para usar los ejemplos simples

const processMessage = require("../shared/processMessage"); //importamos

const verifytoken = (req, res) => {
    try {
        var accessToken = "token_face"; //creamos un token para configurar en el webhook dela app de varfacebook
        var token = req.query["hub.verify_token"]; //capturamos lo que manda facebook en la documentacion esta asi
        var challenge = req.query["hub.challenge"]; //es para comparar el token que nos envia es el mismo que nosotros tenemos
        if (challenge != null && token != null && accessToken == token) {
            //condicionamos que os dos sean diferntes de null y sean iguales
            res.send(challenge); //si todo es correcto devolvemos el challengue
        } else {
            res.status(400).send();
        }
    } catch (e) {
        res.status(400).send(); //en la documentacion dice que si da error ttiene que dar 400
    }
}; //se usa solo en el token

async function recibeMessage(req, res) {
    try {
        var entry = req.body["entry"][0]; //nos devuleve wahtsapp un body con un array seleccionamos la posicion 0
        var changes = entry["changes"][0]; //capturamos de lo que devuelva whatsapp
        var value = changes["value"]; //capturamos de lo que devuelva whatsapp
        var messageObject = value["messages"]; //capturamos de lo que devuelva whatsapp
        //myConsole.log(messageObject);

        if (typeof messageObject != "undefined") {
            var messages = messageObject[0]; //le decimos que traiga el primer lote
            var number = messages["from"];
            var text = GetTextUser(messages); //creamos la funcion abajo
            //myConsole.log(text); //imprimimos lo que devuelve
            //--------------esto es para ProcessMessage
            if (text != "") {
                // myConsole.log(text); //para e mensaje simulado de postman estos dos y capturarlo en logs .txt
                // myConsole.log(number);
                await processMessage.Process(text, number);
            }

            //------------------eso es tapa los samplesModels
            /* if (text == "text") {

                                                                                             /*var data = samples.sampleText("hola usuario", number);
                                                                                                             whatsappservice.SendMessageWhatsApp(data);
                                                                                           }
                                                                                            else if (text == "image") {
                                                                                                               var data = samples.sampleImage(number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             } else if (text == "video") {
                                                                                                               var data = samples.sampleVideo(number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             } else if (text == "audio") {
                                                                                                               var data = samples.sampleAudio(number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             } else if (text == "document") {
                                                                                                               var data = samples.sampleDocument(number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             } else if (text == "button") {
                                                                                                               var data = samples.sampleButtons(number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             } else if (text == "list") {
                                                                                                               var data = samples.sampleList(number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             } else if (text == "location") {
                                                                                                               var data = samples.sampleLocation(number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             } else {
                                                                                                               var data = samples.sampleText("No entiendo", number);
                                                                                                               whatsappservice.SendMessageWhatsApp(data);
                                                                                                             }*/

            //whatsappservice.SendMessageWhatsApp("el usuario dijo:" + text, number); //necesitamos el texto y el numero que capturamos
        }

        res.send("EVENT_RECEIVED");
    } catch (e) {
        myConsole.log(e);
        res.send("EVENT_RECEIVED"); //DEVOLVEMOS ESTO PARA QUE NO HAY UN BUCLE
    }

    //res.send("HOla Recived");
} //se usa cada vez que recibimios un mensaje

function GetTextUser(messages) {
    var text = "";

    var typeMessage = messages["type"]; //capturamos el tipo de mensaje que recibimos
    if (typeMessage == "text") {
        text = messages["text"]["body"]; // es el body dentro de text
    } else if (typeMessage == "interactive") {
        //es cuando el usuario presiona un aopcion o responde con algo
        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];

        if (typeInteractive == "button_reply") {
            //si es de tipo boton
            text = interactiveObject["button_reply"]["title"]; //capturamos el titulo del boton
        } else if (typeInteractive == "list_reply") {
            text = interactiveObject["list_reply"]["title"];
        } else {
            myConsole.log("sinmensaje");
        }
    } else {
        myConsole.log("sinmensaje");
    }
    return text;
    //si recibe una lista
}

//Exportamos lo metodos
module.exports = {
    verifytoken,
    recibeMessage,
};
