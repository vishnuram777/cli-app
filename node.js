var readLineSync = require('readline-sync');

var username = readLineSync.question("Enter Your name ");
var highScore=0;
var highscorer = "";
var score=0;

var questions = [
  {
    question : "What's my name",
    answer : "vishnu"
  },
  {
    question : "what's my age",
    answer : "20"
  },
  {
    question : "Where do i live",
    answer : "tamilnadu"
  },
  {
    question : "which college i'm studying ",
    answer : "shanmuga"
  },
  {
    question : "which degree i'm pursuing currently",
    answer : "bca"
  },
  {
    question : "What is my favorite sport",
    answer : "kabaddi"
  },
  {
    question : "what's my height in feet",
    answer : "6"
  },
  {
    question : "my favorite food",
    answer : "biriyani"
  }
]

for(var i=0;i<questions.length-1;i++) {
  var currentQuestion = questions[i];
  var useranswer = readLineSync.question(currentQuestion.question);
  if(currentQuestion.answer == useranswer) {
    score++;
    console.log("You're Right");
  }else {
  console.log("You're Wrong");
  }
}

console.log("You're score is "+score);

if(score > highScore) {
  highscorer = username;
  highscore = score;
  console.log("congrats you're the current highscorer");
  console.log("current highscore is " + highscore);
  console.log("current highscorer is " + highscorer);
}




