/* Practicas
    * 
* 1.  Realize el proceso de inscripcion a kodemia con promesas
    ! Encadenamiento
*/
const inscriptionKodemiaRafa = {
    nombre: 'Rafa',
    esEntrevistado: false, // true
    tieneOferta: false,
    estaInscrito: false,
    aClase: false
}
function tenerEntrevista(koderAEntrevistar) {
    return new Promise((resolve, reject) => {
        console.log(`Entrevistando a ${koderAEntrevistar.nombre}`)
        setTimeout(() => {
            koderAEntrevistar.esEntrevistado = true;
            if (!koderAEntrevistar.esEntrevistado) {
                reject = (`No se logro entrevistar a ${koderAEntrevistar.nombre}`)
            }
            resolve(koderAEntrevistar)
        }, 5000)
    })
}

function tenerOferta(koderAOfertar) {
    return new Promise((resolve, reject) => {
        console.log(`Viendo si le hacemos oferta a ${koderAOfertar.nombre}`)
        setTimeout(() => {
            let error = null;
            koderAOfertar.tieneOferta = true;
            if (!koderAOfertar.tieneOferta) {
                error = new Error(`No se logro Ofertar  a ${koderAOfertar}`)
                reject(error)
            }
            resolve(koderAOfertar)
        }, 4000)
    })
}

function inscripciónKoder(koderAInscribir) {
    return new Promise((resolve, reject) => {
        console.log(`Analizando si se quiere inscribir ${koderAInscribir.nombre}`)
        setTimeout(() => {
            let error = null;
            koderAInscribir.estaInscrito = true;
            if (!koderAInscribir.estaInscrito) {
                error = new Error(`No se inscribio ${koderAInscribir.nombre}`)
                reject(error)
            }
            resolve(koderAInscribir)
        }, 3000)

    })
}

function irAlPreClase(koderAPreclase) {
    return new Promise((resolve, reject) => {
        console.log(`Mi nuevo Koder va a preclases, se llama:  ${koderAPreclase.nombre}`)
        setTimeout(() => {
            let error = null;
            koderAPreclase.aClase = true;
            if (!koderAPreclase.aClase) {
                error = new Error(`El nuevo Koder se arrepintio ${koderAPreclase.nombre}`)
                reject(error)
            }
            resolve(koderAPreclase)
        }, 2000)
    })
}

/*tenerEntrevista(inscriptionKodemiaRafa)
    .then((koderAEntrevistar) => {
        console.log(`${koderAEntrevistar.nombre} ah sido entrevistado`)
        console.log(koderAEntrevistar)
        return tenerOferta(koderAEntrevistar)
    })
    .then((koderAOfertar) => {
        console.log(`${koderAOfertar.nombre} acepto la  oferta`)
        console.log(koderAOfertar)
        return inscripciónKoder(koderAOfertar)
    })
    .then((koderAInscribir) => {
        console.log(`${koderAInscribir.nombre}, Ya se inscribio `)
        console.log(koderAInscribir)
        return irAlPreClase(koderAInscribir)
    })
    .then((koderAPreclase) => {
        console.log(`${koderAPreclase.nombre}, llego a Preclases del Bootcamp`)
        console.log(koderAPreclase)

    })
    .catch((error) => {
        console.log('Error: ', error)
    })
    */
/*
!  - Async / await
 */

async function main() {
    const koderAEntrevistar = await tenerEntrevista(inscriptionKodemiaRafa)
    console.log(console.log(`${koderAEntrevistar.nombre} ah sido entrevistado`))
    console.log(koderAEntrevistar)
    const koderAOfertar = await tenerOferta(koderAEntrevistar)
    console.log(`${koderAOfertar.nombre} acepto la  oferta`)
    console.log(koderAOfertar)
    const koderAInscribir = await inscripciónKoder(koderAOfertar)
    console.log(`${koderAInscribir.nombre}, Ya se inscribio `)
    console.log(koderAInscribir)
    const koderAPreclase = await irAlPreClase(koderAInscribir)
    console.log(`${koderAPreclase.nombre}, llego a Preclases del Bootcamp`)
    console.log(koderAPreclase)
}
main()
    .then((data) => {
        console.log("Termino el proceso", data)
    })
    .catch((error) => {
        console.log('Error: ', error)
    })










/*  !!!!solo con async / await
 Realizar las siguientes acciones:
1. Crear una funcion que permita leer el archivo e imprimir en consola el arreglo de Koders
2. Crear una funcion que permita agregar un Koder y guardar el archivo con el cambio realizado
3. Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
4. Crear una funcion que permita editar a un koder por su id y guardar el archivo con el cambio realizado
5. Crear una fucnion que permita obtener a los koders que sean mayores de 25 años
Extra:
6. Crear una funcion que permita recibir un id utilizando el process.argv y devuelva el koder correspondiente si existe.
 Req callbacks file system
JSON.parse() -> convierte de cadena a un objeto js
JSON.stringify() convierte de objeto a string
JSON.stringify({}, null, "  ")
 API y REST / RESTFUL
  * 
* /

const fs = require('fs')

fs.promises.writeFile()*/

