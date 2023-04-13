/**
 * !Generar las siguientes rutas
 * !GET /koders -> response json {message: "Aqui estaran los koders"}
 * !POST /koders -> response json {message: "Aqui se crearan Koders"}
 * !PATCH /koders -> response json, {message : "Aqui se actualizaran los koders"}
 * !DELETE/koders -> response json {mesage : "Aqui se eliminaran los koders" }
 */
import express from 'express'
import fs from 'fs'

const server = express() //crear nuestro servidor
const port = 8080

//Agregar un MIDDLEWARE
//Convertir lo que llega en el body a un json 
server.use(express.json())

server.get('/koders', async (request, response) => {
    const datafile = await fs.promises.readFile("./koders.json", "utf8")
    const json = JSON.parse(datafile)
    const koders = json.koders

    response.json({
        succes: true,
        data: {
            koders: koders
        }
    })
})
server.post('/koders', (request, response) => {
    const body = request.body
    console.log(body)
    response.json({ message: "Aqui se crearan Koders" })
})

server.patch('/koders', (request, response) => {

    response.json({ message: "Aqui se actualizaran los koders" })
})
server.delete('/koders', (request, response) => {

    response.json({ message: "Aqui se borraran los koders" })
})

server.listen(port, () => {
    console.log(`Servidor corriendo inicalizado en el puerto ${port}`)
})

//Endpoint -> 
/*
Conjunto de un METODO y una RUTA (path)

*/
