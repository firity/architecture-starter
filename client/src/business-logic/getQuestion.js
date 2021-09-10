//import {questions} from '../../../data/quiz.json'; assert;{ type: "json" } ;

export const questions = async () => {
  const response = await fetch('./../../../data/quiz.json');
  const data = await response.json();
  return data;
};