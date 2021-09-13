import { getQuestions } from '../../data-access/getQuestion.js';

export const start = () => {
  const indexOfQuestion = 0;
  const allQuestions = getQuestions();
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('ul').style.display = 'none';
  document.getElementById('container').style.margin = '-80px auto auto auto';

  allQuestions.then((val) => {
    document.querySelector('h2').innerHTML =
      'Question   ' +
      (indexOfQuestion + 1) +
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

  const createNextButton = () => {
    var next = document.createElement('BUTTON');
    next.innerHTML = 'NEXT';
    next.classList.add('buttonNext');
    form1.appendChild(next);
  };
};
