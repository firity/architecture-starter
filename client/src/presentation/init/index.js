// keep this import! you will need it
import { loadListener } from '../listeners/load.js';
import { startQuizButtonClick } from '../listeners/startQuizButtonClick.js';
import {answer} from '../listeners/selectAnswersClick.js';
// keep this listener call!  you will need it
loadListener();
startQuizButtonClick();
answer();