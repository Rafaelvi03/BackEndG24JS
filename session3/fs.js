//File System
const fs = require('fs')

fs.writeFile("hola-koders.txt", "Hola koders!!", (error) => {
    if (error) {
        console.log('Ocurrio un error', error)
        return
    }
    console.log("Se ha creado el archivo exitosamente")
})