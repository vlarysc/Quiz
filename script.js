const questionEl = document.getElementById("question");
const answer_aEl = document.getElementById("answerA");
const answer_bEl = document.getElementById("answerB");
const answer_cEl = document.getElementById("answerC");
const answer_dEl = document.getElementById("answerD");
const answer_eEl = document.getElementById("answerE");
const chosenAnswer = document.getElementById("chosen-answer");
const correctAnswerEl = document.getElementById("correct-answer");
const explanationEl = document.getElementById("explanation");
var score = 0;
var currentQuestion = 0;
let correctAnswer = "";

axios.get("https://my-json-server.typicode.com/vlarysc/fakeAPI-Quiz/questions").then(function (data) {
  console.log(data.data.map((data) => data.question));

  const question = data.data[currentQuestion].question;
  const answerA = data.data[currentQuestion].answerA;
  const answerB = data.data[currentQuestion].answerB;
  const answerC = data.data[currentQuestion].answerC;
  const answerD = data.data[currentQuestion].answerD;
  const answerE = data.data[currentQuestion].answerE;

  correctAnswer = data.data[currentQuestion].correct_answer;
  questionEl.innerHTML = question;
  answer_aEl.innerHTML = `a) ${answerA}`;
  answer_bEl.innerHTML = `b) ${answerB}`;
  answer_cEl.innerHTML = `c) ${answerC}`;
  answer_dEl.innerHTML = `d) ${answerD}`;
  answer_eEl.innerHTML = `e) ${answerE}`;

  correctAnswerEl.innerHTML = correctAnswerValidate();
  function correctAnswerValidate() {
    switch (correctAnswer.split("r").pop().toLocaleUpperCase()) {
      case "A":
        return `Resposta correta: ${answerA}`;
        break;
      case "B":
        return `Resposta correta: ${answerB}`;
        break;
      case "C":
        return `Resposta correta: ${answerC}`;
        break;
      case "D":
        return `Resposta correta: ${answerD}`;
        break;
      case "E":
        return `Resposta correta: ${answerE}`;
    }
  }
});

function validateAnswer() {
  const questionsEl = document.getElementById("questions");
  questionsEl.classList.add("visible");
  const answersEl = document.getElementById("answers");
  answersEl.classList.remove("visible");
  const answerChosed = this.id;
  const scoreEl = document.getElementById("score");

  if (this.id == correctAnswer) {
    score += 1;

    axios.get("https://my-json-server.typicode.com/vlarysc/fakeAPI-Quiz/questions").then(function (data) {
      console.log(data.data.map((data) => data.question));

      const question = data.data[currentQuestion].question;
      const answerA = data.data[currentQuestion].answerA;
      const answerB = data.data[currentQuestion].answerB;
      const answerC = data.data[currentQuestion].answerC;
      const answerD = data.data[currentQuestion].answerD;
      const answerE = data.data[currentQuestion].answerE;
      const explanation = data.data[currentQuestion].explanation;

      explanationEl.innerHTML = explanation;
      correctAnswer = data.data[currentQuestion].correct_answer;
      questionEl.innerHTML = question;
      answer_aEl.innerHTML = `a) ${answerA}`;
      answer_bEl.innerHTML = `b) ${answerB}`;
      answer_cEl.innerHTML = `c) ${answerC}`;
      answer_dEl.innerHTML = `d) ${answerD}`;
      answer_eEl.innerHTML = `e) ${answerE}`;
      scoreEl.innerHTML = `Pontuação: <strong>${score} </strong>`;
      chosenAnswer.innerHTML = answerChosedValidate();
      correctAnswerEl.innerHTML = correctAnswerValidate();

      function correctAnswerValidate() {
        switch (correctAnswer.split("r").pop().toLocaleUpperCase()) {
          case "A":
            return `Resposta correta: ${answerA}`;
            break;
          case "B":
            return `Resposta correta: ${answerB}`;
            break;
          case "C":
            return `Resposta correta: ${answerC}`;
            break;
          case "D":
            return `Resposta correta: ${answerD}`;
            break;
          case "E":
            return `Resposta correta: ${answerE}`;
        }
      }

      function answerChosedValidate() {
        switch (answerChosed.split("r").pop().toLocaleUpperCase()) {
          case "A":
            return `Você escolheu: ${answerA}`;
            break;
          case "B":
            return `Você escolheu: ${answerB}`;
            break;
          case "C":
            return `Você escolheu: ${answerC}`;
            break;
          case "D":
            return `Você escolheu: ${answerD}`;
            break;
          case "E":
            return `Você escolheu: ${answerE}`;
        }
      }
    });
  } else {
    axios.get("https://my-json-server.typicode.com/vlarysc/fakeAPI-Quiz/questions").then(function (data) {
      console.log(data.data.map((data) => data.question));

      const question = data.data[currentQuestion].question;
      const answerA = data.data[currentQuestion].answerA;
      const answerB = data.data[currentQuestion].answerB;
      const answerC = data.data[currentQuestion].answerC;
      const answerD = data.data[currentQuestion].answerD;
      const answerE = data.data[currentQuestion].answerE;
      const explanation = data.data[currentQuestion].explanation;

      explanationEl.innerHTML = explanation;
      correctAnswer = data.data[currentQuestion].correct_answer;
      questionEl.innerHTML = question;
      answer_aEl.innerHTML = `a) ${answerA}`;
      answer_bEl.innerHTML = `b) ${answerB}`;
      answer_cEl.innerHTML = `c) ${answerC}`;
      answer_dEl.innerHTML = `d) ${answerD}`;
      answer_eEl.innerHTML = `e) ${answerE}`;
      scoreEl.innerHTML = `Pontuação: <strong>${score} </strong>`;
      chosenAnswer.innerHTML = answerChosedValidate();
      correctAnswerEl.innerHTML = correctAnswerValidate();

      function correctAnswerValidate() {
        switch (correctAnswer.split("r").pop().toLocaleUpperCase()) {
          case "A":
            return `Resposta correta: ${answerA}`;
            break;
          case "B":
            return `Resposta correta: ${answerB}`;
            break;
          case "C":
            return `Resposta correta: ${answerC}`;
            break;
          case "D":
            return `Resposta correta: ${answerD}`;
            break;
          case "E":
            return `Resposta correta: ${answerE}`;
        }
      }

      function answerChosedValidate() {
        switch (answerChosed.split("r").pop().toLocaleUpperCase()) {
          case "A":
            return `Você escolheu: ${answerA}`;
            break;
          case "B":
            return `Você escolheu: ${answerB}`;
            break;
          case "C":
            return `Você escolheu: ${answerC}`;
            break;
          case "D":
            return `Você escolheu: ${answerD}`;
            break;
          case "E":
            return `Você escolheu: ${answerE}`;
        }
      }
    });
  }
}

function newQuestion() {
  if(currentQuestion <= 8) {
    currentQuestion += 1;
    axios.get("https://my-json-server.typicode.com/vlarysc/fakeAPI-Quiz/questions").then(function (data) {
      console.log(data.data.map((data) => data.question));
  
      const question = data.data[currentQuestion].question;
      const answerA = data.data[currentQuestion].answerA;
      const answerB = data.data[currentQuestion].answerB;
      const answerC = data.data[currentQuestion].answerC;
      const answerD = data.data[currentQuestion].answerD;
      const answerE = data.data[currentQuestion].answerE;
  
      correctAnswer = data.data[currentQuestion].correct_answer;
      questionEl.innerHTML = question;
      answer_aEl.innerHTML = `a) ${answerA}`;
      answer_bEl.innerHTML = `b) ${answerB}`;
      answer_cEl.innerHTML = `c) ${answerC}`;
      answer_dEl.innerHTML = `d) ${answerD}`;
      answer_eEl.innerHTML = `e) ${answerE}`;
    });
    const answersEl = document.getElementById("answers");
    const questionsEl = document.getElementById("questions");
  
    questionsEl.classList.remove("visible");
    answersEl.classList.add("visible");
  }else {
    const quizEl = document.getElementById("quiz");
    const congratulationsEl = document.getElementById("congratulations");

    quizEl.classList.add("visible");
    congratulationsEl.innerHTML = `Parabéns você concluiu o quiz`
    congratulationsEl.classList.remove("visible");
  }
  
}

const answers = document.querySelectorAll(".text-answer");

answers.forEach((element) => {
  element.addEventListener("click", validateAnswer);
});
