import express from 'express'
import fs from 'fs'
const router = express.Router()// Crea el Router 

router.get('/', async (request, response) => {
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8');
    const json = JSON.parse(dataFile);

    const { id, name, module, age, generation } = request.query;
    let mentorFiltered = json.mentors;
    if (id) {
        mentorFiltered = mentorFiltered.filter(mentor => parseInt(mentor.id) === parseInt(id));
    }
    if (module) {
        mentorFiltered = mentorFiltered.filter(mentor => mentor.module === module);
    }
    if (name) {
        mentorFiltered = mentorFiltered.filter(mentor => mentor.name === name);
    }
    if (age) {
        mentorFiltered = mentorFiltered.filter(mentor => parseInt(mentor.age) === parseInt(age));
    }
    if (generation) {
        mentorFiltered = mentorFiltered.filter(((mentor) => {

            let haveGeneration = mentor.generations.includes(generation)
            return haveGeneration;
        }))

    }
    response.json({
        success: true,
        data: {
            mentors: mentorFiltered
        }
    })
})



router.get('/:idMentor', async (request, response) => {
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8');
    const { idMentor } = request.params;
    const json = JSON.parse(dataFile);
    const mentors = json.mentors;
    const mentorFind = mentors.find(mentor => mentor.id === parseInt(idMentor));
    response.json({
        success: true,
        data: {
            mentorFind
        }
    })
})

router.post('/', async (request, response) => {
    const dataFile = await fs.promises.readFile("./koders.json", "utf8")
    const json = JSON.parse(dataFile)
    const mentors = json.mentors
    const newMentor = request.body
    json.mentors.push(newMentor)
    //json.koders = koders
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8')
    const message = {
        success: true,
        message: "Se agrego un nuevo mentor exitosamente!!"
    }
    response.json(message)
})

router.patch('/:idMentor', async (request, response) => {

    const mentorUpdated = request.body;
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8');
    const json = JSON.parse(dataFile);
    const mentors = json.mentors;
    const mentorFind = mentors.find(mentors => mentors.id === mentorUpdated.id)
    mentors.splice(mentorFind, 1, mentorUpdated);
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8');

    response.json({
        success: true,
        message: 'Mentor actualizado!',
        data: {
            mentors: mentorUpdated
        }
    })

})

router.delete('/:idMentor', async (request, response) => {
    const { idMentor } = request.params
    console.log(typeof idMentor)
    const dataFile = await fs.promises.readFile('./koders.json', 'utf8')
    const json = JSON.parse(dataFile)
    const mentors = json.mentors;
    const newMentor = mentors.filter(mentors => mentors.id !== parseInt(idMentor))
    json.mentors = newMentor;
    await fs.promises.writeFile('./koders.json', JSON.stringify(json, null, 2), 'utf8')
    response.json({
        success: true,
        message: 'Mentor eliminado!',

    })
})



export default router 