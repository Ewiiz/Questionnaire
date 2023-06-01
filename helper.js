exports.success = (message, data) => {
    return { message, data }
}

exports.getUniqueId = (questions) => {
    const questionId = questions.map(question => question.id)
    const maxId = questionId.reduce((a,b) => Math.max(a, b))
    const uniqueId = maxId + 1

    return uniqueId
}