// Veriables to grab info from HTML
var startBtnEl = document.querySelector("#startBtn");
var timerEl = document.querySelector("#timer");
var questionInfo = document.querySelector("#questionInfo");
var choicesInfo = document.querySelector("#choicesInfo");
var answerStatusDisplayEl = document.querySelector("#answerStatusDisplay");
var finalScoreEl = document.querySelector("#finalScore");
var startBox = document.querySelector("#startContainer");
var quizBox = document.querySelector("#quizContainer");
var endBox = document.querySelector("#endContainer");
var initialsBtn = document.querySelector("#initialsBtn");
var leaderBoardList = document.querySelector("#leaderBoardList");
var resetResultsBtn = document.querySelector("#resetResultsBtn");

// Creates empty array for leaderBoard
var leaderBoard = JSON.parse(localStorage.getItem("leaderBoard") || "[]");

// JS Variables
var currentScore = 0;
var secondsLeft = 30;
var correctChoice;
var qNum = -1;
var initialEntry;

// Make Start Button Start the Game
startBtnEl.addEventListener("click", startQuiz);

function startQuiz() {

    // Change Container Display to quizBox
    startBox.classList.add("d-none");
    quizBox.classList.remove("d-none");

    // Start the timer and display questions
    beginTimer();
    displayQuestions();
}

// Timer
function beginTimer() {

    var countdown = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;

        if (secondsLeft === 0 || qNum === questionsList.length) {
            endGame();
            clearInterval(countdown);
        }
    }, 1000);
}

function displayQuestions() {
    // cycles through the questions
    qNum++;
    choicesInfo.innerHTML = "";
    // Grabs the correct question from the questionsList array
    questionInfo.textContent = questionsList[qNum].question;

    // Grabs the correct choices
    var quizChoices = questionsList[qNum].choices;

    for (var c = 0; c < quizChoices.length; c++) {
        var eachChoice = document.createElement("button");
        eachChoice.textContent = quizChoices[c];
        choicesInfo.appendChild(eachChoice).setAttribute("class", "btn btn-block");
    }

    // Grabs the correct answer for the questionsList array
    correctChoice = questionsList[qNum].answer;

}

// Creates event listener for each choice clicked
choicesInfo.addEventListener("click", function (event) {
    answerStatusDisplayEl

    // In the event of a correct answer
    if (correctChoice === event.target.textContent) {
        answerStatusDisplayEl.innerHTML = "correct";
        setTimeout(hideAnswer, 1500);
        showAnswer();
        currentScore++;
    }

    // In the event of a wrong answer
    else {
        answerStatusDisplayEl.innerHTML = "incorrect";
        setTimeout(hideAnswer, 1500);
        showAnswer();
        secondsLeft = secondsLeft - 5;
    }

    // Loop through to next question
    displayQuestions();
})

// Changes display of right or wrong answer
function showAnswer() {
    answerStatusDisplayEl.classList.remove("d-none");
}

function hideAnswer() {
    answerStatusDisplayEl.classList.add("d-none");
}

// Changes containers from quiz to final result
function endGame() {
    quizBox.classList.add("d-none");
    endBox.classList.remove("d-none");
    finalScoreEl.textContent = currentScore;
}

// Event listener to reset the game as soon as initials are entered
initialsBtn.addEventListener("click", function () {
    createHighScore();
    window.location.href = "index.html";
});

// High Score Function
function createHighScore() {
    initialEntry = document.querySelector("#inputInitials").value;

    // Creates entry object
    var entry = {
        name: initialEntry,
        quizScore: currentScore
    };

    // Adds the entry array to the leaderBoard
    leaderBoard.push(entry);

    // Adds entry to array
    localStorage.setItem("leaderBoard", JSON.stringify(leaderBoard));

}

// Sort the high scores
console.log(leaderBoard);

// How to sort through high score to ensure they are in order
leaderBoard.sort(function (a, b) {
    return b.quizScore - a.quizScore;
})

// Display to modal
for (var l = 0; l < leaderBoard.length; l++) {
    var addEntry = document.createElement("li");
    addEntry.textContent = leaderBoard[l].name + ": " + leaderBoard[l].quizScore;
    addEntry.classList.add("font-weight-bold");
    leaderBoardList.appendChild(addEntry);
}

resetResultsBtn.addEventListener("click", function () {
    localStorage.clear();
})

