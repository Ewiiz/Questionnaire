const questionnaireData = require('../questions/questions_js')
const { success } = require('../helper')

let message = ``

exports.getQuestionnaire = (req, res) => {
    res.status(200).json(questionnaireData)
}

exports.getQuestionByID = (req, res) => {
    const questionId = parseInt(req.params.id)
    const questionTrouve = questionnaireData.find((question => question.id === questionId))
    if (!questionTrouve) {
        message = `La question n°${questionId} n'a pas été trouvé.`
        res.status(404).json(message)
    } else {
        message = `La question n°${questionId} à été trouvé.`
        res.status(200).json(success(message, questionTrouve))
    }
}

exports.deleteQuestionById = (req, res) => {
    const questionId = parseInt(req.params.id)
    const questionSupprime = questionnaireData.find((question => question.id === questionId))

    if (!questionSupprime) {
        message = `La question n°${questionId} n'existe pas.`
        res.status(404).json(message)
    } else {
        message = `La question n°${questionId} à bien été supprimé.`
        res.json(success(message, questionSupprime.question))
    }
}