import mongoose from "mongoose"
import express from "express"
import * as dotenv from 'dotenv'
import koder from './routers/koders.router.js'

dotenv.config()
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, SERVER_PORT } = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

// crear el server
const server = express()

//Middlewares 
server.use(express.json()) // Convierte(parsea) el request a un JSON // similar a lo que haciamos con JSON,parse()

//Routers
server.use('/koders', koder)

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
