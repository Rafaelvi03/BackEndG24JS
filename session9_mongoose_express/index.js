import mongoose from "mongoose"
import express, { response } from "express"
import * as dotenv from 'dotenv'
import { Koder } from './models/koders.model.js'
import { CustomError } from "./errorCustom.js"
dotenv.config()
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, SERVER_PORT } = process.env
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
// crear el server
const server = express()
//Middlewares 
server.use(express.json()) // Convierte(parsea) el request a un JSON // similar a lo que haciamos con JSON,parse()
//Routers
//TAREA MOVER DE INDEX A ROUTER

server.get('/koders', async (request, response) => {
    try {
        const allKoders = await Koder.find({})
        if (!allKoders)
            throw new CustomError("koder no encontrados", 404)
        response.json({
            succes: true,
            data: {
                koders: allKoders
            }
        })
    } catch (error) {
        response
            .status(error.status)
            .json({
                succes: false,
                message: error.status

            })
    }

})

server.post("/koders", async (request, response) => {

    try {
        const koderData = request.body; // informacion del koder
        const koderCreated = await Koder.create(koderData)
        response
            .status(201)
            .json({
                sucess: true,
                data: {
                    koder: koderCreated
                }
            })
    } catch (error) {
        response
            .status(error.status || 400)
            .json({
                succes: false,
                message: error.message
            })
    }
})

server.patch("/koders/:id", async (request, response) => {
    const { id } = request.params
    const newData = request.body


    //FindByIdAndUpdate    
    const koderUpdated = await Koder.findByIdAndUpdate(id, newData, { new: true })
    console.log(koderUpdated)
    response.json({
        success: true,
        data: {
            koderUpdate: koderUpdated
        }
    })
})

server.delete("/koders/:id", async (request, response) => {

    const { id } = request.params

    const koderDeleted = await Koder.findByIdAndDelete(id)

    response.json({
        success: true,
        data: {
            koderDeleted: koderDeleted
        }
    })

})

mongoose.connect(URL)
    .then((connection) => {
        console.log("Database Connected")

        server.listen(SERVER_PORT, () => {
            console.log(`Server listening on port ${SERVER_PORT}`)
        })

    })
    .catch((error) => {
        console.log("Error: ", error)
    })
