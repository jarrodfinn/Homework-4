var startBtn = document.getElementById('start-button');
var quizIntro = document.getElementById('quiz-intro');
var showQuiz = document.getElementById("show-quiz");
var currentQuestionIndex = 0;
var timeLeft = 60;
var timer = document.getElementById("timer");
var setInterval;
var questions = [
	{
		title: "Commonly used data types DO NOT include:",
		choices: ["strings", "booleans", "alerts", "numbers"],
		answer: "alerts"
	},

	{
		title: "The condition in an if / else statement is enclosed within ____.",
		choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
		answer: "parentheses"
	},

	{
		title: "JavaScript variables are containers for storing:",
		choices: ["functions", "data values", "questions", "appendex"],
		answer: "data values"
	},

	{
		title: "A JavaScript function is a block of ____ designed to perform a particular task:",
		choices: ["cheese", "arrays", "code", "arguments"],
		answer: "code"
	},

	{
		title: "The Date object is used to work ______ :",
		choices: ["dates", "functions", "clocks", "strings"],
		answer: "dates"
	},
];
function displayQuiz() {
	getQuestion()
	showQuiz.style.display = "block";
	document.getElementById("#show-quiz");
}
startBtn.addEventListener("click", setTimer)

function setTimer() {
	displayQuiz();
	setInterval(function () {
		timeLeft = timeLeft - 1;
		timer.textContent = "Time: " + timeLeft;
		if (timeLeft === 0) {
			endGame();
		}
	}, 1000)
}
function myStopFunction() {
	clearInterval(setTimer);
}
function getQuestion() {
	showQuiz.innerHTML = "";
	quizIntro.style.display = "none";
	var currentQuestion = questions[currentQuestionIndex]
	console.log(currentQuestion)
	var title = document.createTextNode(currentQuestion.title)
	showQuiz.appendChild(title)
	for (var i = 0; i < currentQuestion.choices.length; i = i + 1) {
		var choiceButton = document.createElement("button")
		choiceButton.textContent = currentQuestion.choices[i];
		choiceButton.setAttribute("class", "choice");
		choiceButton.setAttribute("value", currentQuestion.choices[i])
		choiceButton.onclick = choiceClick;
		showQuiz.appendChild(choiceButton);
	}
}
function choiceClick() {
	if (this.value === questions[currentQuestionIndex].answer) {
		alert("correct")
	}
	else {
		alert("incorrect")
	}
	++currentQuestionIndex;
	if (currentQuestionIndex === questions.length) {
		endGame()
	}
	else {
		getQuestion()
	}
}

function endGame() {
	alert("Game Over")
	currentQuestionIndex = 0;
	quizIntro.style.display = "block";
	showQuiz.style.display = "none";
	time = 0;
}
