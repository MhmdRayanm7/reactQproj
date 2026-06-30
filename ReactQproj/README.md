# Frontend Quiz App

This is a simple React quiz app.

The user can study or take a quiz in Frontend topics.

## Topics

- JavaScript
- React
- HTML
- CSS

Each topic has 10 questions.

## What the App Does

- The user enters full name, phone, and email.
- The user chooses Study Mode or Exam Mode.
- The user chooses one or more topics.
- The app shows one question at a time.
- In Study Mode, the app shows if the answer is correct or wrong.
- In Study Mode, the app also shows a short explanation.
- In Exam Mode, the app shows the score at the end.
- The user can try again or choose different topics.

## Project Folders

src/app

Contains the main App component.

src/components

Contains all screen components:

- Header
- LoginScreen
- SetupScreen
- QuestionScreen
- SummaryScreen

src/data

Contains the questions array.

src/utils

Contains helper functions for filtering and shuffling questions.

## Main Files

src/app/App.jsx

Controls the app screens and the main state.

src/data/questions.js

Contains all quiz questions.

src/utils/questionUtils.js

Contains functions for:

- filtering questions by topic
- shuffling questions
- shuffling answers
- preparing study or exam questions

## React Rules Used

- Components
- Props
- useState
- Controlled forms
- CSS Modules

## Not Used

This project does not use:

- Backend
- Router
- localStorage
- useEffect
- External CSS libraries

## How to Run

Open terminal and write:

npm install

npm run dev

## How to Build

npm run build