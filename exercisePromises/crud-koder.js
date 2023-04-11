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

/**
 * ! 1° Crear una función que permita leer el archivo e imprimir en consola el arreglo de Koders
 */
const fs = require('fs');
async function getKoders() {
    const data = await fs.promises.readFile('./koders.json', 'utf8',)
    let koderParseado = JSON.parse(data)
    console.log(koderParseado.koders)
}

// getKoders();

/**
 * !  2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
 */

async function addKoder(newKoder) {
    const data = await fs.promises.readFile('./koders.json', 'utf8');
    let dataJSON = JSON.parse(data);
    dataJSON.koders.push(newKoder)

    dataString = JSON.stringify(dataJSON, null, 2)

    await fs.promises.writeFile('./koders.json', dataString)
    console.log("Se ah agregado un nuevo koders!");
}
let objKoder = {
    "id": 9,
    "name": "Rodo",
    "lastname": "Razo",
    "age": 28
}
// addKoder(objKoder)

/** 
* ! 3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
*/

async function deleteKoder(idKoder) {
    const data = await fs.promises.readFile('./koders.json', 'utf8');
    let dataJSON = JSON.parse(data);
    let koders = dataJSON.koders;

    dataJSON.koders = koders.filter(koder => koder.id !== idKoder)
    await fs.promises.writeFile('./koders.json', JSON.stringify(dataJSON, null, 2))
    console.log('Se eliminó el koder :(');
}

// deleteKoder(9)
/**
 * ! 4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
 */

async function editKoder(idKoder) {
    const data = await fs.promises.readFile('./koders.json', 'utf8');
    let dataJSON = JSON.parse(data);
    const koders = dataJSON.koders;
    const updateKoder = koders.map(koder => koder.id === idKoder ? { ...koder, name: 'Mario', lastname: 'Mendoza', age: 25 } : koder)
    // console.log(updateKoder);
    await fs.promises.writeFile('./koders.json', JSON.stringify(updateKoder, null, 2))
    console.log('Se actualizó ');
}

// editKoder(1)

/**
 * ! 5º Crear una función que permita obtener a los koders que sean mayores a 25 años

*/
async function getKoderOld25() {
    const data = await fs.promises.readFile('./koders.json', 'utf8')
    const dataJSON = JSON.parse(data);
    let koderOld25 = dataJSON.filter(koders => koders.age > 25)
    console.log(koderOld25);

}
getKoderOld25() 
