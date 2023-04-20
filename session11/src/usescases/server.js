/**
 * ! SERVER
 * ! Este archivo guardara la definicion del server
 * !- Que middlewares se van a usar - montar middlewares
 * !- Montar los Routers
 */

import express from 'express'
import koderRouter from '../router/koder.router.js'

const server = express()


// Middlewares
server.use(express.json())

//Routers

server.use('/koders', koderRouter)

export { server }