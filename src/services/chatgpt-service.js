const { Configuration, OpenAIApi } = require("openai");

async function GetMessageChatGPT(text) {
    const configuration = new Configuration({
        apiKey: "Your api key",
    });

    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: text,
        max_tokens: 100,
    });

    // Verifica si la solicitud fue exitosa y si se devolvió al menos una opción
    if (response.status === 200 && response.data.choices.length > 0) {
        return response.data.choices[0].text; // Retorna el texto generado
    } else {
        console.error("Error al generar la completación de texto:", response);
        return null;
    }
}

module.exports = {
    GetMessageChatGPT,
};