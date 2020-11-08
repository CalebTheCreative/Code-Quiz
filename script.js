// Veriables
var startEl = document.querySelector("#start");
secondsLeft = 15;

 var questions = [
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
 ]

// Timer function

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        console.log(secondsLeft);
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

// use on click
startEl.addEventListener("click", function() {
    console.log("Hi");
    setTime();
});