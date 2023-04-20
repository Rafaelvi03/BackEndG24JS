/*
 * Definir las acciones que se pueden efectuar con el MODELO <-> Entidades
 */
import { Koder } from "../models/koders.model.js";

// use Cases = Handlers

// Creamos koders
const createKoder = (koderData) => {
    //retornamos una promesa de tipo createKoder 
    return Koder.create(koderData)
}

// Obtenemos koders
const getKoders = (filters) => {
    return Koder.find(filters)
}

//Obtenemos koders por id
const getKodersById = (id) => {
    return Koder.findById(id)
}

//Actualizar koder por id
//Options :  Agregar ciertas configuraciones al updtate, que se remplace, que te devuelva el objeto actualizaodo
const updateKoderById = (id, koderData, options = {}) => {
    return Koder.findByIdAndUpdate(id, koderData, { new: true, ...options })
}

// eliminar koder por id
const deleteKoderById = (id) => {
    return Koder.findByIdAndDelete(id)
}

export {
    createKoder,
    getKoders,
    getKodersById,
    updateKoderById,
    deleteKoderById
}