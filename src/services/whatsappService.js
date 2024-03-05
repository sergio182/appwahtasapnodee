const https = require("https");

function SendMessageWhatsApp(data) {
  //el texto que enviaremos y el numero de la persona

  const options = {
    host: "graph.facebook.com",
    path: "/v18.0/243339518854461/messages",
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer EABlgRXRejjkBO6Cz0fEb6X9BBwoah0cHhHZCPD3QdBar0qVOEUm9cBotyP382AMME7alYeqQPD0uEVbeXsGV9pW11nxXFDndBCS1JI8r3IdBDAm4vm6wZB6syNwG8tjXrED6ukEnNsC5FH0pdPZAi12ZCzYFZBTjcZCnLiboaSFUiHK0ekLT3e9BvzOJNZB6rD4",
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (d) => {
      process.stdout.write(d);
    });
  });

  req.on("error", (error) => {
    console.error(error);
  });
  req.write(data);
  req.end();
}

module.exports = {
  SendMessageWhatsApp,
};
