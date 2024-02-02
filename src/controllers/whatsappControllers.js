const verifytoken = (req, res) => {
    res.send("hola verifyToken");
};

const recibeMessage = (req, res) => {
    res.send("HOla Recived");
};

//Exportamos lo metodos
module.exports = {
    verifytoken,
    recibeMessage,
};