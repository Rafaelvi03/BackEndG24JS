const inscriptionKodemiaRafa = {
    nombre: 'Rafa',
    esEntrevistado: false, // true
    tieneOferta: false,
    estaInscrito: false,
    aClase: false
}
function tenerEntrevista(koderAEntrevistar, callback) {
    console.log(`Entrevistando a ${koderAEntrevistar.nombre}`)
    setTimeout(() => {
        let error = null;
        koderAEntrevistar.esEntrevistado = true;
        if (!koderAEntrevistar.esEntrevistado) {
            error = `No se logro entrevistar a ${koderAEntrevistar.nombre}`
        }
        callback(error, koderAEntrevistar)
    }, 5000)
}

function tenerOferta(koderAOfertar, callback) {
    console.log(`Viendo si le hacemos oferta a ${koderAOfertar.nombre}`)
    setTimeout(() => {
        let error = null;
        koderAOfertar.tieneOferta = true;
        if (!koderAOfertar.tieneOferta) {
            error = `No se logro Ofertar  a ${koderAOfertar}`
        }
        callback(error, koderAOfertar)
    }, 4000)
}
function inscripciónKoder(koderAInscribir, callback) {
    console.log(`Analizando si se quiere inscribir ${koderAInscribir.nombre}`)
    setTimeout(() => {
        let error = null;
        koderAInscribir.estaInscrito = true;
        if (!koderAInscribir.estaInscrito) {
            error = `No se inscribio ${koderAInscribir.nombre}`
        }
        callback(error, koderAInscribir)
    }, 3000)
}
function irAlPreClase(koderAPreclase, callback) {
    console.log(`Mi nuevo Koder va a preclases, se llama:  ${koderAPreclase.nombre}`)
    setTimeout(() => {
        let error = null;
        koderAPreclase.aClase = true;
        if (!koderAPreclase.aClase) {
            error = `El nuevo Koder se arrepintio ${koderAPreclase.nombre}`
        }
        callback(error, koderAPreclase)
    }, 2000)
}
tenerEntrevista(inscriptionKodemiaRafa, (errorEntrevista, koderAEntrevistar) => {.
    if (errorEntrevista) {
        console.log('Error de entrevista', errorEntrevista)
        return
    }
    console.log(`${koderAEntrevistar.nombre} ah sido entrevistado`)

    tenerOferta(koderAEntrevistar, (errorOferta, koderAOfertar) => {
        if (errorOferta) {
            console.log('error la hora de la oferta', errorOferta)
            return
        }
        console.log(`${koderAOfertar.nombre} acepto la  oferta`)

        inscripciónKoder(koderAOfertar, (errorIncripcion, koderAInscribir) => {
            if (errorIncripcion) {
                console.log('Error al inscribirse', errorIncripcion)
                return
            }
            console.log(`${koderAInscribir.nombre}, Ya se inscribio `)
            irAlPreClase(koderAInscribir, (errorPreclase, koderAPreclase) => {
                if (errorPreclase) {
                    console.log(`Error a ir a Preclase del Bootcamp`, errorPreclase)
                    return
                }
                console.log(`${koderAPreclase.nombre}, llego a Preclases del Bootcamp`,)
                console.log(koderAPreclase)
            })
        })
    })
})