console.log("Hola Koders")

function hola() {
    return "Hola Koders"
}
console.log(hola())

let nombre = (name) => {
    return `hola ${name}, buenas noches`
}
console.log(nombre("rafael"))

const arrayName = ["rafa", "javi", "eddi", "antonio"]
let nameAleat = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}
console.log(nameAleat(arrayName))
console.log(nameAleat(arrayName))
console.log(nameAleat(arrayName))