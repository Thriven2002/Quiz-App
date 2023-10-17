const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe"],
        answer: "Blue Whale"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const result = document.getElementById('result');
const nextButton = document.getElementById('next-button');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.innerText = currentQuestion.question;
    optionsList.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const li = document.createElement('li');
        const radio = document.createElement('input');
        radio.type = "radio";
        radio.name = "answer";
        radio.id = `option-${index + 1}`;
        const label = document.createElement('label');
        label.htmlFor = `option-${index + 1}`;
        label.id = `option-${index + 1}-text`;
        label.innerText = option;
        li.appendChild(radio);
        li.appendChild(label);
        optionsList.appendChild(li);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        return;
    }

    if (selectedOption.nextElementSibling.innerText === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.style.display = "none";
    optionsList.style.display = "none";
    nextButton.style.display = "none";
    result.innerText = `You scored ${score} out of ${questions.length} questions!`;
}

loadQuestion();

nextButton.addEventListener('click', checkAnswer);
