const fs = require('fs');
/**
 * ! 1° Crear una función que permita leer el archivo e imprimir en consola el arreglo de Koders
 */

function getKoders() {
    fs.readFile('./koder.json', 'utf8', (err, data) => {
        if (err) {
            console.log('Error: ', err)
            return;
        }
        let koderParseado = JSON.parse(data)
        console.log(koderParseado.koders)
    })
}


// getKoders();

/**
 * !  2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
 */

function addKoder(newKoder) {
    const data = fs.readFileSync('./koder.json', 'utf8');
    let dataJSON = JSON.parse(data);
    dataJSON.koders.push(newKoder)

    dataString = JSON.stringify(dataJSON, null, 2)

    fs.writeFile('./koder.json', dataString, (err) => {
        if (err) {
            console.log("OOh! Hubo un error: ", err);
            return;
        }

        console.log("Se ah agregado un nuevo koders!");
    })
    console.log(dataJSON);
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

function deleteKoder(idKoder) {
    const data = fs.readFileSync('./koder.json', 'utf8');
    let dataJSON = JSON.parse(data);
    let koders = dataJSON.koders;

    dataJSON.koders = koders.filter(koder => koder.id !== idKoder)
    fs.writeFile('./koder.json', JSON.stringify(dataJSON, null, 2), (err) => {
        if (err) {
            console.log('Error: ', err);
            return;
        }
        console.log('Se eliminó el koder :(');
    })
    console.log(dataJSON);
}

// deleteKoder(4)
/**
 * ! 4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
 */

function editKoder(idKoder) {
    const data = fs.readFileSync('./koder.json', 'utf8');
    let dataJSON = JSON.parse(data);
    const koders = dataJSON.koders;

    const updateKoder = koders.map(koder => koder.id === idKoder ? { ...koder, name: 'Mario', lastname: 'Mendoza', age: 34 } : koder)

    // console.log(updateKoder);

    fs.writeFile('./koder.json', JSON.stringify(updateKoder, null, 2), (err) => {
        if (err) {
            console.log("Error: ", err);
            return;
        }

        console.log('Se actualizó ');
    })
}

// editKoder(1)


/**
 * ! 5º Crear una función que permita obtener a los koders que sean mayores a 25 años
*/

function getKoderOld25() {
    const data = fs.readFileSync('./koder.json', 'utf8')
    const dataJSON = JSON.parse(data);
    console.log(dataJSON);

    let koderOld25 = dataJSON.filter(koders => koders.age > 25)
    console.log(koderOld25);

}

getKoderOld25() 
