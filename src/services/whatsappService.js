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
            Authorization: "Bearer tu token facebook",
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