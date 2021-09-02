// this is for handler

export const clickStartHandler = () => {
  // console.log('hello');
  state.currentQuestion = 0;
  for (let i = 0; i < state.questions.length; i++) {
    // we loop through all questions
    const question = state.questions[i]; // we get one specific question
    question.answered = false; // user hasn't answered to any question
    for (let j = 0; j < question.answers.length; j++) {
      const answerOfQuestion = question.answers[j]; // we get one specific answer
      answerOfQuestion.selected = false;
    }
  }

};
