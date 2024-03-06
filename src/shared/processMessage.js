const whatsappmodel = require("../shared/whatsappmodels");

const whatsappService = require("../services/whatsappService");

const chatgptService = require("../services/chatgpt-service");

async function Process(textUser, number) {
    textUser = textUser.toLowerCase(); //convertimos todo a minusculas
    var models = []; //guardaremos los odelos en un array

    //#regionsinchatgpt
    /* if (textUser.includes("hola")) {
                  //si en la cadena que mande el usuario existe un hola entrara aqui
                  //saludar
                  var model = whatsappmodel.MessageText("Hola, un gusto saludarte", number); //esto se envia a whatsappmodel.js para responder al usuario
                  models.push(model); //le agregamos el modelo al array
                  var modelList = whatsappmodel.MessageList(number);
                  models.push(modelList);
                  var modelLocation = whatsappmodel.MessageLocation(number);
                  models.push(modelLocation);
                } else if (textUser.includes("gracias")) {
                  //si el mensaje tiene la palabra gracias
                  //agradecimiento
                  var model = whatsappmodel.MessageText(
                    "gracias a ti por escribirnos",
                    number
                  );
                  models.push(model);
                } else if (
                  textUser.includes("adios") ||
                  textUser.includes("bye") ||
                  textUser.includes("me voy")
                ) {
                  //si el mensaje tiene la palabra adios o by o me voy
                  //despedida
                  var model = whatsappmodel.MessageText("ve con cuidado", number);
                  models.push(model);
                } else if (textUser.includes("dar")) {
                  //vender

                  var model = whatsappmodel.MessageText(
                    "Registrate en el siguiente formulario para evaluarte: https//form.jotform.com/222507994363665",
                    number
                  );
                  models.push(model);
                } else if (textUser.includes("recibir")) {
                  //comprar

                  var model = whatsappmodel.MessageComprar(number);
                  models.push(model);
                } else if (textUser.includes("agencia")) {
                  //agencia
                  var modelLocation = whatsappmodel.MessageLocation(number);
                  models.push(modelLocation);
                } else if (textUser.includes("contacto")) {
                  //contacto
                  var model = whatsappmodel.MessageText(
                    "*Centro de contacto:*\n 7777777",
                    number
                  );
                  models.push(model);
                } else {
                  //no entiendo
                  var model = whatsappmodel.MessageText(
                    "no entiendo lo que dices intentalo mas tarde",
                    number
                  );
                  models.push(model);
                }*/
    //#endregion

    //#regionConchatgpt
    const resultChatGPT = await chatgptService.GetMessageChatGPT(textUser);
    if (resultChatGPT != null) {
        var model = whatsappmodel.MessageText(resultChatGPT, number);
        models.push(model);
    } else {
        var model = whatsappmodel.MessageText("Lo siento algo salio mal", number);
        models.push(model);
    }
    //#endregion
    models.forEach((model) => {
        //recorremos el array de modelos en model
        whatsappService.SendMessageWhatsApp(model);
    });
}
module.exports = {
    Process,
};