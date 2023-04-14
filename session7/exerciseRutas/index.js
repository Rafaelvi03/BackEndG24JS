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
server.post('/koders', async (request, response) => {
    const dataFile = await fs.promises.readFile("./koders.json", "utf8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const newKoder = request.body

    json.koders.push(newKoder)

    //json.koders = koders
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8')

    console.log(newKoder)
    const message = {
        success: true,
        message: "Se agrego un nuevo koder exitosamente!!"
    }
    response.json(message)
})

server.patch('/koders/:idkoder', async (request, response) => {

    const koderUpdated = request.body;
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8');
    const json = JSON.parse(dataFile);
    const koders = json.koders;
    const koderFind = koders.find(koder => koder.id === koderUpdated.id)
    koders.splice(koderFind, 1, koderUpdated);
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8');

    response.json({
        success: true,
        message: 'Koder actualizado!',
        data: {
            koder: koderUpdated
        }
    })

})

server.delete('/koders/:idKoder', async (request, response) => {
    const { idKoder } = request.params
    console.log(typeof idKoder)
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8')
    const json = JSON.parse(dataFile)
    const koders = json.koders;
    const newKoder = koders.filter(koder => koder.id !== parseInt(idKoder))
    json.koders = newKoder;
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8')
    response.json({
        success: true,
        message: 'Koder eliminado!',

    })
})


server.listen(port, () => {
    console.log(`Servidor corriendo inicalizado en el puerto ${port}`)
})

//Endpoint -> 
/*
Conjunto de un METODO y una RUTA (path)

*/
