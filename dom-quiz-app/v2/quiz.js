// TODO: Step 2: Array of question objects
const questions = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "London", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Venus"],
        correct: 1
    },
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5", "6"],
        correct: 1
    }
];

// TODO: Step 3: Select and cache DOM elements
const questionElement = document.getElementById('question');
const answerButtons = [
    document.getElementById('answer0'),
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3')
];
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');

// TODO: Step 4: Display the current question and answer choices
// We keep track of which question we're on
let currentQuestion = 0;

function showQuestion() {
    // Get the current question object
    const current = questions[currentQuestion];
    // Set the question text
    questionElement.textContent = current.question;
    // Set the text for each answer button
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = current.answers[i];
        answerButtons[i].disabled = false; // Enable buttons for new question
    }
    // Clear feedback
    feedbackElement.textContent = "";
}


// TODO: Step 5: Handle answer selection and feedback
for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener('click', function() {
        // Check if the selected answer is correct
		if (i === questions[currentQuestion].correct) {
            feedbackElement.textContent = "Correct!";
		} else {
            feedbackElement.textContent = "Incorrect. Try again next time!";
		}
		// TODO: Step 6: Disable all answer buttons after selection
		for (let j = 0; j < answerButtons.length; j++) {
            answerButtons[j].disabled = true;
		}
	});
}

// TODO: Step 7: Next Question functionality
nextButton.addEventListener('click', function() {
    // Move to the next question
    currentQuestion++;
    // If there are more questions, show the next one
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        // If no more questions, show a message
        questionElement.textContent = "Quiz complete!";
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].style.display = 'none'; // Hide answer buttons
        }
        feedbackElement.textContent = "Thanks for playing!";
        nextButton.disabled = true; // Disable next button
    }
});

// Show the first question when the page loads
showQuestion();

