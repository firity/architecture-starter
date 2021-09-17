import { getQuestions } from '../../business-logic/getQuestion.js';
import{createNextButton} from '../components/nextBtn.js';

export const start = () => {
  let indexOfQuestion = 0;
  indexOfQuestion++;
  const allQuestions = getQuestions();
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('ul').style.display = 'none';
  document.getElementById('container').style.margin = '-80px auto auto auto';

  allQuestions.then((val) => {
    document.querySelector('h2').innerHTML =
      'Question   ' +
      (indexOfQuestion) +
      '/' +
      Object.keys(val['questions']).length;
    document.querySelector('p').innerHTML =
      val['questions'][indexOfQuestion]['question'];
    val['questions'][indexOfQuestion]['answers'].forEach((element) => {
      var buttonAnswer = document.createElement('BUTTON');
      console.log(element['text']);
      buttonAnswer.innerHTML = element['text'];
      buttonAnswer.classList.add('buttonAnswers');
      document.body.appendChild(buttonAnswer);
      const form1 = document.getElementById('form1');
      form1.appendChild(buttonAnswer);
    });
    createNextButton();
  });

 
};
