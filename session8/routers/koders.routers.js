import express from 'express'
import fs from 'fs'

const router = express.Router()// Crea el Router 

router.get('/', async (request, response) => {
    const datafile = await fs.promises.readFile("./koders.json", "utf8")
    const json = JSON.parse(datafile)
    const koders = json.koders

    response.json({
        succes: true,
        data: {
            koders: koders
        }
    })
})
router.post('/', async (request, response) => {
    const dataFile = await fs.promises.readFile("./koders.json", "utf8")
    const json = JSON.parse(dataFile)
    const koders = json.koders

    const newKoder = request.body

    json.koders.push(newKoder)

    //json.koders = koders
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8')

    console.log(newKoder)
    const message = {
        success: true,
        message: "Se agrego un nuevo koder exitosamente!!"
    }
    response.json(message)
})

router.patch('/:idkoder', async (request, response) => {

    const koderUpdated = request.body;
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8');
    const json = JSON.parse(dataFile);
    const koders = json.koders;
    const koderFind = koders.find(koder => koder.id === koderUpdated.id)
    koders.splice(koderFind, 1, koderUpdated);
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8');

    response.json({
        success: true,
        message: 'Koder actualizado!',
        data: {
            koder: koderUpdated
        }
    })

})

router.delete('/:idKoder', async (request, response) => {
    const { idKoder } = request.params
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8')
    const json = JSON.parse(dataFile)
    const koders = json.koders;
    const newKoder = koders.filter(koder => koder.id !== parseInt(idKoder))
    json.koders = newKoder;
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8')
    response.json({
        success: true,
        message: 'Koder eliminado!',

    })
})



export default router 