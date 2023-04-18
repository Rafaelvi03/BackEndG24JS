import mongoose, { mongo } from "mongoose";
import * as dotenv from 'dotenv'

const { DB_USER, DB_PASSWORD, DB_HOTS, DB_NAME } = process.env

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOTS}/${DB_NAME}?retryWrites=true&w=majority`

/*
*MODELOS; Es una interfaz para comunicarnos con la base de datos - Termino de mongoose 
-Crear
-Actualizar
-Editar
-Eliminar
------------------------
*Para poder crear un modelo necesitamos crear un Schema
    Schema - Nos permitira defirnir la estructura de los documentos 
    
   * Que contiene un Schema: 
    *Que campos (name, lastaname, age, etc)
    *Validaciones ( requerido, default, minLength etc)
    *Alguna restriccion 

*Modelos hace referencia 

*/

// Schema Koders

const kodersSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,           //Campo es requerido para crear este campo
        minLength: 3,
        maxLength: 100,
        trim: true                 // Quita espacios
    },
    lastname: {
        type: String,
        require: true,
        minLength: 3,
        maxLength: 100,
        trim: true
    },
    age: {
        type: Number,
        min: 1,
        max: 100,
        require: true
    },
    gender: {
        type: String,
        enum: ['m', 'h'], // Te permite que valores son validos para este campo
        require: true
    },
    idGraduated: {
        type: Boolean,
        default: false // Cuando crees un documento le va asignar un false 
    }

})

//Al crear un modelo de Mongoose por convencion la primera letra es Mayuscula
//El modelo hace referencia a la collection 
const Koder = mongoose.model('koders', kodersSchema)


mongoose.connect(URL)
    .then(async (connection) => {
        console.log('Database Connected')

        // const allKoders = await Koder.find({})
        // console.log(allKoders)

        /* const newKoder = {
             name: "Rodolfo",
             lastName: "Pizzana",
             age: '25',
             gender: 'h'
         }
          const koderCreated = await Koder.create(newKoder)
          */

        //.finByAndUpdate
        // const newData = {
        //     name: "Rodo24JS",
        //     age: 33
        // }
        // const koderUpdate = await Koder.findByIdAndUpdate('643e0010bf062259cabee594', newData, { new: true })
        // console.log(koderUpdate)

        // const koderDeleted = await Koder.findByAndDelete('')
        // console.log(koderDeleted)
    })
    .catch((error) => {
        console.log("error", error)
    })