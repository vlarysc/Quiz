const questionEl = document.getElementById("question");
const answer_aEl = document.getElementById("answerA");
const answer_bEl = document.getElementById("answerB");
const answer_cEl = document.getElementById("answerC");
const answer_dEl = document.getElementById("answerD");
const answer_eEl = document.getElementById("answerE");
const chosenAnswer = document.getElementById("chosen-answer");
const correct_answerEl = document.getElementById("correct-answer");
const explanationEl = document.getElementById("explanation");
const scoreEl = document.getElementById("score");
let score = 0;
let currentQuestion = 0;
let correct_answer = "";
let questions = [];
let question = "";
let answerA = "";
let answerB = "";
let answerC = "";
let answerD = "";
let answerE = "";
let explanation = "";

axios
  .get("https://my-json-server.typicode.com/vlarysc/fakeAPI-Quiz/questions")
  .then(function (data) {
    questions = data;
    dataControl();
    dataControlInnerHtml()
  });

function dataControl() {
  ({
    question,
    answerA,
    answerB,
    answerC,
    answerD,
    answerE,
    correct_answer,
    explanation,
  } = questions.data[currentQuestion]);
}

function dataControlInnerHtml() {
    questionEl.innerHTML = question;
    answer_aEl.innerHTML = `a) ${answerA}`;
    answer_bEl.innerHTML = `b) ${answerB}`;
    answer_cEl.innerHTML = `c) ${answerC}`;
    answer_dEl.innerHTML = `d) ${answerD}`;
    answer_eEl.innerHTML = `e) ${answerE}`;
}

function updateScore(score) {
  score = score;
  scoreEl.innerHTML = `Pontuação: <strong>${score} </strong>`;
}

function validateAnswer() {
  const questionsEl = document.getElementById("questions");
  const answersEl = document.getElementById("answers");

  questionsEl.classList.add("visible");
  answersEl.classList.remove("visible");

  this.id == correct_answer && updateScore(++score);
  explanationEl.innerHTML = explanation;
  correct_answerEl.innerHTML = questions.data[currentQuestion][correct_answer];
  chosenAnswer.innerHTML = `Você escolheu: ${this.textContent}`;
}

function newQuestion() {
  if (currentQuestion <= 8) {
    currentQuestion += 1;
    dataControl();
    dataControlInnerHtml()

    const answersEl = document.getElementById("answers");
    const questionsEl = document.getElementById("questions");

    questionsEl.classList.remove("visible");
    answersEl.classList.add("visible");
  } else {
    const quizEl = document.getElementById("quiz");
    const congratulationsEl = document.getElementById("congratulations");

    quizEl.classList.add("visible");
    congratulationsEl.innerHTML = `Parabéns você concluiu o quiz`;
    congratulationsEl.classList.remove("visible");
  }
}

const answers = document.querySelectorAll(".text-answer");

answers.forEach((element) => {
  element.addEventListener("click", validateAnswer);
});
