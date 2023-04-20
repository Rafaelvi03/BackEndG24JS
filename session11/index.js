/**
 * * Punto de inicio de la aplicacion  -entrypoint
 * * - Conectar a la base de datos 
 * * - Levantar el server
 * 
 */

import dbConnect from "./src/libs/db.js";
import { server } from "./src/usescases/server.js";

dbConnect()
    .then(() => {
        server.listen(8080, () => {
            console.log('Server listening on port 8080')
        })
    })
    .catch((error) => {
        console.log('Error', error)
    })