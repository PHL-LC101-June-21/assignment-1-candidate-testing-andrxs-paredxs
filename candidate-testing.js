const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  return input.question("What's your name?\n");
}

function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  return input.question(question + "\n")

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if ( candidateAnswer.toLowerCase() === correctAnswer.toLowerCase() ){
    console.log("Awesome correct answer");
  } else {
    console.log("I'm sorry wrong answer");
  }

  let grade;
  

  return grade;
}

function runProgram() {
  candidateName = askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName.toUpperCase()} to the test for future Austronats`);
  candidateAnswer = askQuestion(this.question);
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};