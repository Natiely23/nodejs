var http = require("http");

var manejador = function(solicitud, respuesta){
    console.log("Hola Mundo");
    respuesta.end();
}

var servidor = http.createServer(manejador);

servidor.listen(8080);