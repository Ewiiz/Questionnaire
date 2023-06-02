const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const questionnaireData = require('./questions/questions_js')
const { success } = require('./helper')
require('dotenv').config()

const questionnaireRoute = require('./routes/questionnaire.routes')
app.use(bodyParser.json())

const PORT = process.env.PORT || 4001

app.use('/api/questionnaire', questionnaireRoute)

app.listen(PORT, () => {
    console.log(`Le serveur est démarrer sur à l'addresse: http://localhost:${PORT}`)
})