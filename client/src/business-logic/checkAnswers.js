import{save}  from '../data-access/save.js'

export  const checkAnswers =  (answers =[]) => {
    for (let i = 0; i < answers.length; i++) {
        const answerU = answers[i];

        if (answerU.correct === true &&
            answerU.selected === true) {
            return true
        } else{
            return false
        }
    } return save (answers)
}


