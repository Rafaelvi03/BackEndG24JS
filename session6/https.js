// Importar el modulo de http de node js
const http = require('http')
const server = http.createServer((request, response) => {


    const url = request.url; //obtener la url 
    console.log(url)

    const method = request.method // Metodo con el que se pide
    console.log(method)

    response.write("Hola desde mi servidor")
    response.end()

})
// Poner a escuchar mi puerto
server.listen(8080, () => {
    console.log('server listenign on port 8080')
})



//puertos
// 80 -> http
//443 ->https