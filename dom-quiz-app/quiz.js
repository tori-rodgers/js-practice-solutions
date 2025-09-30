/* TODO:
    ● Display Question:
        ○ Use an array of question objects, each containing:
            ■ A question string.
            ■ An array of four answer choices.
            ■ The index of the correct answer.
        🔔 To see changes, initialize Quiz with loadQuestion.
    ● Handle Answer Selection:
        ○ Add click event listeners to the answer buttons.
        ○ When a button is clicked, check if the selected answer is correct and
            update the feedback element accordingly.
        ○ Disable all answer buttons after a selection to prevent further clicks.
        🔔 Check by creating addEventListener for answerButtons and nextButton
    ● Next Question:
        ○ Attach an event listener to the "Next Question" button.
        ○ When clicked, load the next question and re-enable the answer
            buttons. 
*/

// Questions Array
const questions = [
	{
		question: "What is the capital of France?",
		answers: ["Berlin", "Madrid", "Paris", "Rome"],
		correct: 2,
	},
	{
		question: "Which programming language is used for web development?",
		answers: ["Python", "JavaScript", "C++", "Ruby"],
		correct: 1,
	},
];

let currentQuestion = 0;

// Objects referencing HTML elements
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-question");

// Load Question
function loadQuestion() {
	const current = questions[currentQuestion];

	questionElement.textContent = current.question;

	answerButtons.forEach((button, index) => {
		button.textContent = current.answers[index];
		button.disabled = false; // Enables buttons to be clickable
		button.style.backgroundColor = ""; // Reset button color
	});

	feedbackElement.textContent = ""; // Clear previous feedback
	nextButton.style.display = "none"; // Hide next button initially
}

// Handle Answer Click
function handleAnswerClick(event) {

	// Targets the button that was clicked
	const selectedButton = event.target;

	// Creates array from answerButtons and finds index of clicked button
	const selectedIndex = Array.from(answerButtons).indexOf(selectedButton);

	// Checks if the index of the clicked button matches the index of the correct answer for the current question. 
	const isCorrect = selectedIndex === questions[currentQuestion].correct;

	/*    Other ways to write isCorrect
    const isCorrect;
    if (selectedIndex === questions[currentQuestion].correct) {
        isCorrect = true;
    } else {
        isCorrect = false;
    } */

	feedbackElement.textContent = isCorrect ? "Correct!" : "Wrong!";

    // Browsers have a built-in list of these color keywords and their corresponding RGB values.
	selectedButton.style.backgroundColor = isCorrect
		? "lightgreen"
		: "lightcoral";

	// Disable all buttons after an answer is selected
	answerButtons.forEach((button) => (button.disabled = true));

	nextButton.style.display = "block";

	/* Other ways to change the visibility of the nextButton

    nextButton.style.display = "";
    or 
    nextButton.hidden = false; (if you adjust the html to use hidden) */
}

// Load Next Question
function nextQuestion() {

	currentQuestion++;
    
	if (currentQuestion < questions.length) {
		loadQuestion();

	} else {

        // Displays completion message instead of question
		questionElement.textContent = "Quiz completed!";

        // Hides all the answer buttons so the user can’t select any more answers.
		answerButtons.forEach((button) => (button.style.display = "none"));

        // Displays a final message in the feedback element.
		feedbackElement.textContent = "Great job!";

        // Hides the Next Question button since the quiz is over.
		nextButton.style.display = "none";
	}
}

// Add Event Listeners
answerButtons.forEach((button) =>
	button.addEventListener("click", handleAnswerClick)
);

nextButton.addEventListener("click", nextQuestion);

// Initialize Quiz
loadQuestion();
