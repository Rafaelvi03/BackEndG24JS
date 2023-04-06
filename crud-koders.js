const fs = require('fs');

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


getKoders();



/*function addKoder(newKoder) {
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
    "id": 8,
    "name": "Rodo",
    "lastname": "Razo",
    "age": 28
}
addKoder(objKoder)*/