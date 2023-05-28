const express = require('express')
const app = express()
require('dotenv').config()


const questionJS = require('./questions/javascript.json')

const PORT = process.env.PORT || 4001

app.listen(PORT, () => {
    console.log(`Le serveur est démarrer sur le port: ${PORT}`)
})

app.get('/', (req, res) => {
    const question1 = questionJS.question2
    const reponse1 = questionJS.reponse2
    res.send(`${question1}: ${reponse1}`)
})