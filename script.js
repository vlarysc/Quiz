const questionEl = document.getElementById("question");
const answer_aEl = document.getElementById("answerA");
const answer_bEl = document.getElementById("answerB");
const answer_cEl = document.getElementById("answerC");
const answer_dEl = document.getElementById("answerD");
const answer_eEl = document.getElementById("answerE");
const correctAnswerEl = document.getElementById("correct-answer")
var currentQuestion = 0;
let correctAnswer = "";


 axios.get("http://localhost:3000/questions").then(function (data) {
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
   correctAnswerEl.innerHTML =  teste(); 
   function teste() {
     
     switch (correctAnswer.split("r").pop().toLocaleUpperCase()) {
       case 'A':
        return `A resposta correta é a letra : <br> <br> A) ${answerA}`;
         break;
       case 'B':
         return `A resposta correta é a letra : <br> <br> B) ${answerB}`;
         break;
       case 'C':
         return  `A resposta correta é a letra : <br> <br> C) ${answerC}`;
         break;
       case 'D':
         return `A resposta correta é a letra : <br> <br> D) ${answerD}`;
         break;
       case 'E':
         return  `A resposta correta é a letra : <br> <br> E) ${answerE}`;
         
     }
   }
});


function validateAnswer() {
  const questionsEl = document.getElementById('questions')
  questionsEl.classList.add("visible")
  const answersEl = document.getElementById('answers')
  answersEl.classList.remove("visible")

  
 
 if(this.id == correctAnswer) {
   /* currentQuestion += 1 */
   axios.get("http://localhost:3000/questions").then(function (data) {
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
  correctAnswerEl.innerHTML =  teste(); 
   function teste() {
     
     switch (correctAnswer.split("r").pop().toLocaleUpperCase()) {
       case 'A':
        return `A resposta correta é a letra : <br> <br> A) ${answerA}`;
         break;
       case 'B':
         return `A resposta correta é a letra : <br> <br> B) ${answerB}`;
         break;
       case 'C':
         return  `A resposta correta é a letra : <br> <br> C) ${answerC}`;
         break;
       case 'D':
         return `A resposta correta é a letra : <br> <br> D) ${answerD}`;
         break;
       case 'E':
         return  `A resposta correta é a letra : <br> <br> E) ${answerE}`;
         
     }
   }
});
   
} else {
  console.log("Errou")
}
}

function newQuestion() {
  currentQuestion += 1
   axios.get("http://localhost:3000/questions").then(function (data) {
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
  const answersEl = document.getElementById('answers')
  const questionsEl = document.getElementById('questions')

  questionsEl.classList.remove("visible")

  answersEl.classList.add("visible")
}

const answers = document.querySelectorAll('.text-answer')

answers.forEach(element => {
  element.addEventListener("click",validateAnswer)
});