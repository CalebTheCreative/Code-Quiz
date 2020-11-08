// Veriables
var startEl = document.querySelector("#start");
var timerEl = document.querySelector("#time");
var quizEl = document.querySelector("#quiz");
var scoreEl = document.querySelector("#score");
secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function () {
        timerEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        console.log(secondsLeft);
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
};


var questionsList = [
    {
        question: "Which of these is a string?",
        choices: ["true","1","'variable'"],
        answer: "'variable'"
    },
     {
        question: "Which programming language is for making your application interactive?",
        choices: ["HTML","CSS","JavaScript","Notepad"],
        answer: "JavaScript"
    },
    {
        question: "What is an example of a semantic tag?",
        choices: ["img","nav","div","h1"],
        answer: "nav"
    },
    {
        question: "Which of these is a Boolean value?",
        choices: ["true","1","'variable'"],
        answer: "true"
    },
    {
        question: "The condition in an if / else statement must be enclosed within _______",
        choices: ["quotes","curly brackets","parentheses","square brackets"],
        answer: "parentheses"
    }
];

// use on click
    setTime();