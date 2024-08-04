const questions = [
    {
        question: "In web design, what does CSS stand for?",
        options: [
            { text: "Counter Strike: Source", isCorrect: false },
            { text: "Corrective Style Sheet", isCorrect: false },
            { text: "Computer Style Sheet", isCorrect: false },
            { text: "Cascading Style Sheet", isCorrect: true }
        ]
    },
    {
        question: "Which language is used for web apps?",
        options: [
            { text: "PHP", isCorrect: false },
            { text: "Python", isCorrect: false },
            { text: "JavaScript", isCorrect: true },
            { text: "All", isCorrect: false }
        ]
    },
    {
        question: "What does HTML stand for?",
        options: [
            { text: "Hyper Text Markup Language", isCorrect: true },
            { text: "Hot Mail", isCorrect: false },
            { text: "How to Make Lasagna", isCorrect: false },
            { text: "None of the above", isCorrect: false }
        ]
    },
    {
        question: "Which is not a JavaScript Framework?",
        options: [
            { text: "Python Script", isCorrect: true },
            { text: "JQuery", isCorrect: false },
            { text: "Django", isCorrect: false },
            { text: "NodeJS", isCorrect: false }
        ]
    },
    {
        question: "Which company developed the React library?",
        options: [
            { text: "Google", isCorrect: false },
            { text: "Facebook", isCorrect: true },
            { text: "Microsoft", isCorrect: false },
            { text: "Apple", isCorrect: false }
        ]
    },
    {
        question: "What does JSON stand for?",
        options: [
            { text: "JavaScript Object Notation", isCorrect: true },
            { text: "JavaScript Object Network", isCorrect: false },
            { text: "Java Simple Object Notation", isCorrect: false },
            { text: "Java Simple Object Network", isCorrect: false }
        ]
    },
    {
        question: "Which of the following is not a programming language?",
        options: [
            { text: "Python", isCorrect: false },
            { text: "HTML", isCorrect: true },
            { text: "Java", isCorrect: false },
            { text: "C++", isCorrect: false }
        ]
    }
];

let currentQuestionIndex = 0;

function displayQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    const questionData = questions[index];

    questionContainer.innerHTML = `
        <h1>${questionData.question}</h1>
        <div class="options">
            ${questionData.options.map((option, idx) => `
                <button class="option" onclick="checkAnswer(this, ${option.isCorrect})">
                    <div class="choice"><div class="text">${String.fromCharCode(65 + idx)}</div></div>
                    <div class="ans">${option.text}</div>
                </button>
            `).join('')}
        </div>
    `;

    updateNavigationButtons();
}

function checkAnswer(button, isCorrect) {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.remove('correct', 'incorrect');
    });
    if (isCorrect) {
        button.classList.add('correct');
    } else {
        button.classList.add('incorrect');
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

function updateNavigationButtons() {
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    document.getElementById('nextBtn').disabled = currentQuestionIndex === questions.length - 1;
}

document.addEventListener('DOMContentLoaded', () => {
    displayQuestion(currentQuestionIndex);
});