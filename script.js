const questions = [
  {
    question: 'Question 1',
    answers: ['Answer 1', 'Answer 2', 'Answer 3'],
    correctAnswer: 0
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.querySelector('.question');
const answerButtons = document.querySelectorAll('.answer');
const submitButton = document.querySelector('.submit');

function loadQuestion() {
  const questionData = questions[currentQuestion];
  questionElement.textContent = questionData.question;
  answerButtons.forEach((button, index) => {
    button.textContent = questionData.answers[index];
    button.onclick = () => handleAnswer(index);
  });
}

function handleAnswer(selectedAnswer) {
  if (selectedAnswer === questions[currentQuestion].correctAnswer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert(`Quiz completed! Your score: ${score}/${questions.length}`);
  }
}

loadQuestion();
submitButton.onclick = () => handleAnswer(-1);
