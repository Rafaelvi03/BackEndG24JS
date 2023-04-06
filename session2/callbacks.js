//Callback es una funcion que se recibe como argumento de otra funcion 
function avisar() {
    console.log("Llegue al supermercado");
}
function irAlSuperMercado(callback) {
    console.log("Yendo al supermecado")
    callback()
}
function
    irAlSuperMercado(avisar)

// Firma es la forma en que una funcion recibe sus parametros
// recibe como paramaetro error y despues la data
// function callback(error, data) {
//     if (error) {
//         //maneja el error
//         console.log('Ah ocurrrio un error')
//     } else {
//         //continua
//     }
// }


