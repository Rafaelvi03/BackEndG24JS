import express from 'express'
import { createKoder, deleteKoderById, getKoders, getKodersById, updateKoderById } from '../usescases/koder.usecase.js'

const router = express.Router()
router.get('/', async (request, response) => {

    try {
        const { age, generation, gender, name, lastname, isGraduated } = request.query

        let filters = {}

        if (age)
            filters = { ...filters, age }

        if (generation)
            filters = { ...filters, generation }

        if (gender)
            filters = { ...filters, gender }

        if (name)
            filters = { ...filters, name }

        if (lastname)
            filters = { ...filters, lastname }

        if (isGraduated)
            filters = { ...filters, isGraduated }

        const kodersFound = await getKoders(filters)

        response.json({
            success: true,
            data: {
                koders: kodersFound
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get All Koders"
            })
    }

})

router.get('/:id', async (request, response) => {
    try {

        const { id } = request.params

        const koderFound = await getKoderById(id);

        response.json({
            success: true,
            data: {
                koder: koderFound
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at get Koder by Id"
            })
    }
})


router.post('/', async (request, response) => {

    try {

        const newKoder = request.body
        const koderCreated = await createKoder(newKoder);

        response.json({
            success: true,
            data: {
                koder: koderCreated
            }
        })


    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at create Koder",
                extraInfo: error.message
            })
    }
})

router.patch("/:id", async (request, response) => {
    try {

        const { id } = request.params
        const newKoderData = request.body
        const koderUpdated = await updateKoderById(id, newKoderData)

        response.json({
            success: true,
            data: {
                koder: koderUpdated
            }
        })

    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at update Koder",
                extraInfo: error.message
            })
    }
})

router.delete("/:id", async (request, response) => {
    try {
        const { id } = request.params

        const koderDeleted = await deleteKoderById(id)

        response.json({
            success: true,
            data: {
                koder: koderDeleted
            }
        })
    } catch (error) {
        response
            .status(400)
            .json({
                success: false,
                message: "Error at delete Koder",
                extraInfo: error.message
            })
    }
})

export default router