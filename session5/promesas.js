// PROMESAS

/*const myFirstPromise = new Promise((resolve, reject) => {
  Estado: PENDIENTE 
})

console.log(myFirstPromise)*/

const myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = null
        error = new Error('Ocurrio un error ')
        if (error) {
            reject('Ocurrio un error')
        }
        resolve('Todo cool ;D')
    }, 300)

})

console.log(myFirstPromise)

myFirstPromise
    .then((result) => {
        console.log('Todo cool ;D')
    })
    .catch((error) => {
        console.log(error)
    })

/*
Metodos para manejar promesas

.then (() =>{}) //Maneja la pro,esa cuando haya sido exitosa 
                -Recibe un callback
                -Puede obtener lo que se pasa en la funcion resolve 

.catch(()=>{}) //Manea la promesa cuando haya sido rechada
                -Recibe un callbakc
                -Recibe lo que pasa en la funcion reject
                */



/* Otra orma de ver las promesas es wrapper
-Envolviendo la promesa por una funcion --> Las promesas nos permiten ejecutar acciones asincronas

*/

function algoAsincrono() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = null
            if (error) {
                reject(error)
            }
            resolve('Todo cool !! :D')
        }, 400)
    })
}

//Aqui vendria un objeto de tipo promesa
algoAsincrono()
    .then((result) => {
        console.log('Resultado:', result)
    })
    .catch((error) => {
        console.log('Error', error)
    })

const person = {
    name: "Rafael",
    atSuperMarket: false,
    paidPantry: false,
    atHome: false
}
function gotoSuperMarkert(personToGoSuperMarket) {
    return new Pro
}  