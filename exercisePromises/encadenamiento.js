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
