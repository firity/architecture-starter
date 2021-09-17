import {selectAnswer} from '../handlers/selectAnswers.js'

export const answer = () =>{
    document.querySelector('html').addEventListener('click', selectAnswer);
}
answer()