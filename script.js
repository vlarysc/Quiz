const questionEl = document.getElementById('question');
const answer_aEl = document.getElementById('answer_a');
const answer_bEl = document.getElementById('answer_b');
const answer_cEl = document.getElementById('answer_c');
const answer_dEl = document.getElementById('answer_d');
const answer_eEl = document.getElementById('answer_e');
const step = 0;


axios.get('http://localhost:3000/questions').then(function(data) {
  console.log(data.data.map((data) => data.question))
  
  const question = data.data.map((data) => data.question)
  const answerA = data.data.map((data) => data.answer_a)
  const answerB = data.data.map((data) => data.answer_b)
  const answerC = data.data.map((data) => data.answer_c)
  const answerD = data.data.map((data) => data.answer_d)
  const answerE = data.data.map((data) => data.answer_e)

    questionEl.innerHTML = question[step]
    answer_aEl.innerHTML = `a) ${answerA[step]}`
    answer_bEl.innerHTML = `b) ${answerB[step]}`
    answer_cEl.innerHTML = `c) ${answerC[step]}`
    answer_dEl.innerHTML = `d) ${answerD[step]}`
    answer_eEl.innerHTML = `e) ${answerE[step]}`
})
        