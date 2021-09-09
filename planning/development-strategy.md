<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->

# Development strategy

## 0.Setup

- fork the template repo `architecture-starter`
- turn on GitHub pages.
- invite collaborators to repo.
- write the user stories.
- write the first strategy plan.
- Design a simple wireframe to set guidelines for UI/UX design.
- a simple README.md

---

## 1. Initialize the home page

**a user can see whole home page with instructions**
**a user can read instructions for the quiz**
**a user can know how many questions are in the quiz.**
**a user will be able to choose the level of difficulty for the test as: Easy, Medium, Hard**
**a user can see their score at the end of the quiz**
**a user can see how far they are through the quiz in the top of the page will show up the remaining amount of questions**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `01-homepage`.
- This branch is merged to `master` branch after completion.

### Task A - 1

`index.html`: homepage

- title h1
- div called `container`
- a paragraph with instructions
- checkboxs for levels
- button called `start` 

### Task A - 2

`ìndex.html`: quiz page

- title h1
- number of Questions with p
- Questions with h3
- label 
- input type= "radio"
- answers with `span` 
- button called `submit` 

### Task A - 3

`ìndex.html` : end page

- information with h3
- score information with p
- a question to restart quiz with h4
- button called `again`
 

### Task B

`style.css` :

- this issue developed on a branch `01-homepage`.
- h1:color,size,margin,padding
- h3:color,size,margin,padding
- body:background-color, font
- div:height, width, border-shadow
- p:size,margin,padding,color
- checkbox: height, width,border
- button:border,color,size,padding,background-color,margin
- label:font,margin
- input:position,opacity,cursor,margin,padding,border,box-sizing
- span:position,top,left,height,width,background-color,border-radius

---

## 2. start the quiz

**a user can start/restart the quiz**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `02-startquiz`.
- This branch is merged to `master` branch after completion.

### Task A

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.



### Task B

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.

---
## 3. selection

**a user can select only one answer for the current question**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `03-selection`.
- This branch is merged to `master` branch after completion.

### Task A

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.

### Task B

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.

---
## 4. submit answer

**a user can go forward to the next question once its selected an
        option/answer**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `04-submit`.
- This branch is merged to `master` branch after completion.

### Task A

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.

### Task B

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.

---
## 5. end of the quiz

**a user can see their score at the end of the quiz**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `05-result`.
- This branch is merged to `master` branch after completion.

### Task A
Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.


### Task B

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.

---
## 6. pop up message

**a user can see if he chose a wrong answer in a pop up message**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `06-popup`.
- This branch is merged to `master` branch after completion.

### Task A
Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.


### Task B

Logic
inits
Data Access
Business Logic
Listeners
Handlers
Components
Custom Events.

---

# Development strategy - Updated

## 0.Setup

- fork the template repo `architecture-starter`
- turn on GitHub pages.
- invite collaborators to repo.
- write the user stories.
- write the first strategy plan.
- Design a simple wireframe to set guidelines for UI/UX design.
- a simple README.md

---

## 1. Initialize the home page

**a user can see whole home page with instructions**
**a user can read instructions for the quiz**
**a user can know how many questions are in the quiz.**
**a user can see their score at the end of the quiz**
**a user can see how far they are through the quiz in the top of the page will show up the remaining amount of questions**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `01-homepage`.
- This branch is merged to `master` branch after completion.

### Task A - 1

`index.html`: homepage

- title h1
- div called `container`
- a paragraph with instructions
- button called `start`

### Task A - 2

`ìndex.html`: quiz page

- title h1
- number of Questions with p
- Questions with h3
- label
- buttons for answers
- answers with `span`
- button called `next`

### Task A - 3

`ìndex.html` : end page

- information with h3
- score information with p
- a question to restart quiz with h4
- button called `try again`
 

### Task B

`style.css` :

- this issue developed on a branch `01-homepage`.
- h1:color,size,margin,padding
- h3:color,size,margin,padding
- body:background-color, font
- div:height, width, border-shadow
- p:size,margin,padding,color
- checkbox: height, width,border
- button:border,color,size,padding,background-color,margin
- label:font,margin
- input:position,opacity,cursor,margin,padding,border,box-sizing
- span:position,top,left,height,width,background-color,border-radius

---

## 2. start the quiz

**a user can start/restart the quiz**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `02-startquiz`.
- This branch is merged to `master` branch after completion.

### business logic

- getQuestion.js
  - import data.js
  - get a question by id
  - return question

### handler

- startQuiz.js
  - import business logic
  - hide `start` button
  - hide instruction
  - create a `h1` for question
  - call `getQuestion` to get question
  - create `div` and `button` for answers
  - call `getQuestion` to get answers
  - create a button `next`

### Listener

- startQuizButtonClick.js
  - Import startQuiz from startQuiz.js (handler)  
  - Document.getElementByID('').addEventListener(‘click, startQuiz);

---
## 3. selection

**a user can select only one answer for the current question**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `03-selection`.
- This branch is merged to `master` branch after completion.

### Business Logic

- checkAnswer.js
  - import data.js
  - get correct answer and users answer
  - compare them
  - save number of questions user get true.
  - return true or false

### Handler

- selectAnswer.js
  - import checkAnswer.js business logic.
    - if selection is true, selected button color will be green.
    - if selection is false, selected button color will be red
  and right answer will be green.

### Listener

- selectAnswerClick.js
  - Import selectAnswer from selectAnswer.js (handler)
  - Document.getElementById('').addEventListener(‘click’, selectAnswer);
  
---
## 4. Next

**a user can go forward to the next question once its selected an
        option/answer**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `04-submit`.
- This branch is merged to `master` branch after completion.

### Business Logic

- getQuestion.js
  - import data.js
  - get a question by id
  - return question

### Handler

- nextQuestion.js
  - check if id of question + 1 is equal  with number of question
  - if true,
    - hide next button
    - show submit button
    - call getScore.js
  - if false,  call getQuestion.js
  
  ### Listener

  - nextQuestionClick.js
    - Import nextQuestion from nextQuestion.js (handler)
    - Document.getElementById('').addEventListener(‘click’, nextQuestion);
---
## 5. end of the quiz

**a user can see their score at the end of the quiz**

- _acceptance criteria_
- _acceptance criteria_
- ...

### REPO

- This user story is developed on branch `05-result`.
- This branch is merged to `master` branch after completion.

### Business Logic

- getScore.js
  - import data.js
  - find number of true answer.

### Handler

- showScore.js
  - import getScore.js from business logic
  - hide submit button
  - call getScore
  - show start button by changing innerhtml `try again`

### Listener

- submitClick.js
  - Import showScore from showScore.js (handler)
  - Document.getElementById('').addEventListener(‘click’, showScore);

---
