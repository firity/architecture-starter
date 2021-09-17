import { start } from '../handlers/startQuiz.js';
export const startQuizButtonClick = () => {
  document.getElementById('start-button').addEventListener('click', start);
};
