function sampleText(textResponse, number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    text: {
      body: textResponse,
    },
    type: "text",
  });
  return data;
}

function sampleImage(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "image",
    image: {
      link: "https://images.unsplash.com/photo-1682687221073-53ad74c2cad7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
  });
  return data;
}

function sampleAudio(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "audio",
    audio: {
      link: "https://s3.amazonaws.com/pb_previews/440_time-for-an-idea/440_full_time-for-an-idea_0158_preview.mp3",
    },
  });
  return data;
}

function sampleVideo(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "video",
    video: {
      link: "https://file-examples.com/storage/fe7da0d44631509da1f416/2017/04/file_example_MP4_480_1_5MG.mp4",
    },
  });
  return data;
}

function sampleDocument(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "document",
    document: {
      link: "https://www.unl.edu.ar/ingreso/cursos/biologia/wp-content/uploads/sites/9/2016/11/BIO_04.pdf.pdf",
      caption: "Las celulas Bro es el titulo",
    },
  });
  return data;
}

function sampleButtons(number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: number,
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: "Confirmas tu Registro?",
      },
      action: {
        buttons: [
          {
            type: "reply",
            reply: {
              id: "001>",
              title: "Aceptar",
            },
          },
          {
            type: "reply",
            reply: {
              id: "002",
              title: "No",
            },
          },
        ],
      },
    },
  });
  return data;
}

function sampleList(number) {
  const data = {
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
                title: "Pizza",
                description: "Ordena una deliciosa pizza.",
              },
              {
                id: "opcion2",
                title: "Hamburguesa",
                description: "Pide una hamburguesa con papas fritas.",
              },
            ],
          },
          {
            title: "Opciones de bebida",
            rows: [
              {
                id: "opcion3",
                title: "Refresco",
                description: "Refresca tu día con una bebida gaseosa.",
              },
              {
                id: "opcion4",
                title: "Agua",
                description: "Mantente hidratado con agua mineral.",
              },
            ],
          },
        ],
      },
    },
  };

  return JSON.stringify(data);
}

function sampleLocation(number) {
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

module.exports = {
  sampleText,
  sampleImage,
  sampleAudio,
  sampleVideo,
  sampleDocument,
  sampleButtons,
  sampleList,
  sampleLocation,
};
