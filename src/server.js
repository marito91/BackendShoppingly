

const express = require("express");
const cors = require("cors"); 
//const mongoose = require("mongoose");

/* Reference
const Usuario = require("./modelos/usuarioModel");
const Orden = require("./modelos/orden");
const Puerto = require("./modelos/puerto");



// Se importan las rutas principales donde se almacenan las APIs respectivas
const { userRutas } = require("./rutas/userRutas")
const { ordenesRutas } = require("./rutas/ordenesRutas")
const { puertosRutas } = require("./rutas/puertosRutas")
*/
        
const app = express();
app.use(cors()); // Middleware CORS
app.use(express.json()) // Middleware convertir json
app.use(express.urlencoded({ extended: true })); // Codifica la informacion que viene por el cliente en la barra de busqueda del navegador


// Distribucion de Rutas
//require("dotenv").config();

/*
// APIs 
app.use("/user", userRutas);
app.use("/ordenes", ordenesRutas);
app.use("/puertos", puertosRutas);


// Se conecta la aplicación a Base de Datos
mongoose.connect(process.env.MONGODB_SERVER_URL)
.then(res => console.log("Conectado a base de datos"))
.catch(error => console.log(error));
*/

app.get("/", function (req, res) {
    res.send("Main route")
})

app.post("/contacto", function(req, res) {
    const { nombre, email, mensaje } = req.body;
    res.send({estado : "ok", msg : "Gracias por su mensaje. Lo estaremos contactando pronto!"});
})


app.listen(5000, () => {
    console.log("Servidor escuchando en el puerto 5000")
})