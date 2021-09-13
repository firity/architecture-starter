// import { start } from '../handlers/startQuiz.js';
// export const startQuizButtonClick = () => {
//   document.getElementById('start-button').addEventListener('click', start);
// };


import { nextBnt } from "../handlers/next-btn-handler.js";

export const nexBtn = () => {
    document.getElementsByClassName('buttonNext').addEventListener('click', nextBnt)
    console.log(nexBtn, (hello));
}