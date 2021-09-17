//import {questions} from '../../../data/quiz.json'; assert;{ type: "json" } ;

export const getQuestions = async () => {
  const response = await fetch('./data/quiz.json');
  const data = await response.json();
  
  // console.log(data.questions + 'hey have to show my question')
  return data;
};

getQuestions();