const express = require('express')
const app = express()
require('dotenv').config()


const questionnaireData = require('./questions/questions_js')
const { success } = require('./helper')

const PORT = process.env.PORT || 4001
let message = ``

app.get('/api/questionnaire', (req, res) => {
    res.status(200).json(questionnaireData)
})

app.get('/api/questionnaire/:id', (req, res) => {
    const questionId = parseInt(req.params.id)
    const questionTrouve = questionnaireData.find((question => question.id === questionId))
    if (!questionTrouve) {
        message = `La question n°${questionId} n'a pas été trouvé.`
        res.status(404).json(message)
    } else {
        message = `La question n°${questionId} à été trouvé.`
        res.status(200).json(success(message, questionTrouve))
    }
})

app.delete('/api/questionnaire/:id', (req, res) => {
    const questionId = parseInt(req.params.id)
    const questionSupprime = questionnaireData.find((question => question.id === questionId))

    if (!questionSupprime) {
        message = `La question n°${questionId} n'existe pas.`
        res.status(404).json(message)
    } else {
        message = `La question n°${questionId} à bien été supprimé.`
        res.status(204).json(success(message, questionSupprime))
    }

})

app.listen(PORT, () => {
    console.log(`Le serveur est démarrer sur le port: ${PORT}`)
})