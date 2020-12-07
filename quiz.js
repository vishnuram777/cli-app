var readLineSync = require('readline-sync');

var userName = readLineSync.question("What's Your Name ?  ");
console.log("Welcome " + userName);
console.log("We're going to play a puzzle game : ");
console.log("This is a CS-Student Kind of puzzle."+"\n" + "It contains basics of CS Basics.");

console.log("-----------------");
console.log("Let's Start the Puzzle");
console.log("Warning ! : Don't Use any special characters. such as $,),(,%,#,'White-Spaces'");
var highScore = 0;
var score = 0;

var questions = [
  "Binary tree contains how many child ?(Don't Use  Letters!) ",
  "What is the average time complexity of HashMap ? ",
  "The Binary value of 2 ",
  "Java is a ? ",
  "SQL is a ? ",
  "DJANGO  is a ? ",
  "The time complexity of binary search ? ",
  "Synchronization is used to prevent ? ",
  "What is the base of decimal system ? (Don't Use Letters!) ",
  "Instagram uses which datastructure to connect people ? "
];


var answers = [
 "2",
 "1",
 "0010",
 "programminglanguage",
 "database",
 "framework",
 "logn",
 "deadlock",
 "10",
 "graph"
];

function operate() {
  var userAnswer;
  for (var i=0; i<questions.length; i++) {
    userAnswer = readLineSync.question(questions[i]);
    userAnswer = userAnswer.toLowerCase();
    if(userAnswer == answers[i]){
      score++;
      console.log("You're Correct");
    }else{
      console.log("You're Wrong ");
    }
  }
  console.log("You're Score is : " +score);
}

operate();

if(score > highScore) {
  highScore = score;
  console.log("You're the Current High Scorer "+highScorer);
  console.log("Congrats!!!");
  console.log("The Current High Score is : " +highScore);
}

 