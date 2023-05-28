const express = require('express')
const app = express()
require('dotenv')


const questionJS = require('./questions/javascript.json')

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`Le serveur est démarrer sur le port: ${PORT}`)
})

app.get('/', (req, res) =>{
    const questions = questionJS.question
    const reponse = questionJS.reponse
    res.send(`${questions}: ${reponse}`)
})