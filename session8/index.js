
import express from 'express'
import koderRouters from './routers/koders.routers.js'
import mentorsRouters from './routers/mentors.router.js'

const server = express() //crear nuestro servidor
const port = 8080

//Agregar un MIDDLEWARE
//Convertir lo que llega en el body a un json 
server.use(express.json())
server.use('/koders', koderRouters)// Para utilizar  (archivo)koderRuters , de esa ruta
server.use('/mentors', mentorsRouters)
server.listen(port, () => {
    console.log(`Servidor corriendo inicalizado en el puerto ${port}`)
})

//Endpoint -> 
/*
Conjunto de un METODO y una RUTA (path)

*/


/**
 * Practica CRUD Mentores
 * 
 * GET /mentors -> con sus filtros por query params
 *                  extra: agregar un parametro adicion para filtar por los mentores que tengan una edad mayor al valor
 *                  x=25 -> Deberia de devolver los mentores mayores a 25 años
 * GET /mentors/:id
 * POST /mentors
 * PATCH /mentors/:id
 * DELETE /mentors/:id
 * 
 * Crear router para mentors
 * Utilizar el mismo archivo de kodemia.json 
 * 
 * 
 */