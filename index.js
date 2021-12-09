var readlineSync = require('readline-sync')


var userName = readlineSync.question('May I have your name? ')
var score = 0;

console.log("Welcome " + userName +", in our QUIZ!")
console.log("It's a quiz about my favorite film Gangs of Wasseypur")
console.log("------")

var questions = [{
  question: "Who played Sardar Khan? ",
  answer: "Manoj Bajpayee"
}, {
  question: "Who played Faisal Khan? ",
  answer: "Nawazuddin Siddiqui"
},{
  question: "Who played Ramadhir Singh? ",
  answer: "Tigmanshu Dhulia"
}]


for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  quiz(currentQuestion.question, currentQuestion.answer)
}

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer === answer){
    console.log("right");
    score = score + 1;
    console.log("Your Score: ", score)
    console.log("-------")
  }else {
    console.log("wrong")
    console.log("Your Score: ", score)
    console.log("-------")
  }
}

function totalScore(){
  console.log("Your total Score is: ", score)
}

totalScore()