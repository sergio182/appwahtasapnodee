function MessageText(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    text: {
      preview_url: true,
      body: textResponse,
    },
    type: "text",
  });
  return data;
}

function MessageList(number) {
  const mensaje = {
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: "¡Hola! Por favor selecciona una opción:",
      },
      footer: {
        text: "Este es un mensaje de prueba.",
      },
      action: {
        button: "Ver opciones",
        sections: [
          {
            title: "Opciones de comida",
            rows: [
              {
                id: "opcion1",
                title: "recibir",
                description: "Ordena y recibe.",
              },
              {
                id: "opcion2",
                title: "Dar",
                description: "da por dinero",
              },
            ],
          },
          {
            title: "Centro de atencion",
            rows: [
              {
                id: "opcion3",
                title: "agencia",
                description: "visitanos.",
              },
              {
                id: "opcion4",
                title: "contacto",
                description: "te atendera uno de nustros agentes.",
              },
            ],
          },
        ],
      },
    },
  };

  return JSON.stringify(mensaje);
}

function MessageLocation(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "location",
    location: {
      latitude: "-16.478205518513203  ",
      longitude: "-68.14934339471198",
      name: "univerdidad",
      address: "Universidad Salesiana de Bolivia",
    },
  });
  return data;
}

function MessageComprar(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "selecciona uno de los productos",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "option-laptop",
              title: "Laptop",
            },
          },
          {
            type: "reply",
            reply: {
              id: "option-computadora",
              title: "Computadora",
            },
          },
        ],
      },
    },
  });
  return data;
}

module.exports = {
  MessageText,
  MessageList,
  MessageLocation,
  MessageComprar,
};
