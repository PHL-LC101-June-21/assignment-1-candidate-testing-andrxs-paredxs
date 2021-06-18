const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
const question1 = 'Who was the first American woman in space? ';	
const answer1 = "Sally Ride";
const question2 = 'True or false: 5 kilometer == 5000 meters? ';
const answer2	= "true";
const question3 = "(5 + 3)/2 * 10 = ? ";
const answer3 = "40";
const question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? "	;
const answer4 = "Trajectory";
const question5 = 'What is the minimum crew size for the ISS? ';
const answer5 =	"3";

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [question1, question2, question3, question4, question5];
let correctAnswers = [answer1, answer2, answer3, answer4, answer5];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  return input.question("What's your name?\n");
}

function askQuestion(question) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  /*return input.question(question + "\n")*/
  let tempAnswer = [];
  questions.forEach(function(question){
    tempAnswer.push(input.question(`\n\t${question}\n\t`));
  });
  return tempAnswer;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  /*if ( candidateAnswer.toLowerCase() === correctAnswer.toLowerCase() ){
    console.log("Awesome correct answer");
  } else {
    console.log("I'm sorry wrong answer");
  }*/
  console.log(`\nCandidate Name: ${candidateName}`); 
  let index = 0;
  candidateAnswers.forEach(function(answer){
    const template = 
    `${index + 1}) ${questions[index]}
Your Answer: ${answer}
Correct Answer: ${correctAnswers[index++]}
    `;
      console.log(template);
  });

  let grade = 0;
  let corrects = 0;
  index = 0;
  candidateAnswers.forEach(function(answer){
    if (answer.toLowerCase() === correctAnswers[index++].toLowerCase()) {
      corrects++;
    }
  });

  grade = (corrects / correctAnswers.length) * 100;
  status = "failed";

  if(grade >= 80)
    status = "passed";
  console.log(
`>>> Overall Grade: ${grade} (${corrects} of ${correctAnswers.length} responses correct) <<<
>>> Status: ${status.toUpperCase()} <<<`);

  return grade;
}

function runProgram() {
  candidateName = askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nWelcome ${candidateName.toUpperCase()}! \n\n`);
  this.candidateAnswers = askQuestion(this.questions);
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