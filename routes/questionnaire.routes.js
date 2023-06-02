const express = require('express')
const { getQuestionnaire, getQuestionByID, deleteQuestionById } = require('../controllers/question.controller')
const router = express.Router()


router.get('/', getQuestionnaire)
router.get('/:id', getQuestionByID)
router.delete('/:id', deleteQuestionById)

module.exports = router