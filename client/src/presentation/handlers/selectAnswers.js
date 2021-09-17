import {checkAnswers} from '../../business-logic/checkAnswers.js';


export const selectAnswer = (event) => {
    // console.log ('hello from handler');
let btnAnswer = document.querySelector('html');
    const selectAnswer = checkAnswers();
    if (btnAnswer.correct === true &&
        btnAnswer.selected === true) {
        return btnAnswer.style.color = green;
    } else {
        btnAnswer.style.color = red;
    }
}