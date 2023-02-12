var quesno = 0;

document.querySelector(".start").addEventListener("click", function() {
  this.classList.add("hide");
  setNextQuestion(quesno);
})

function setNextQuestion(quesno) {
  document.querySelector(".start").classList.add("hide");
  document.querySelector(".question").classList.add("colflex");
  document.querySelector(".bottom").classList.add("rowflex");
  document.querySelector(".btn-grid").classList.add("colflex");

  // resetting style for all options
  questions[quesno].answers.forEach((answer, index) => {
    const className = `.option${index + 1}`
    const optionElement = document.querySelector(className)
    optionElement.style.background = null
  })

  document.querySelector(".ques1").innerText = questions[quesno].question;

  // adding options and its styles
  questions[quesno].answers.forEach((answer, index) => {
    const className = `.option${index + 1}`
    const optionElement = document.querySelector(className)

    optionElement.innerText = answer.text
    optionElement.classList.add('opt')
    if (answer.correct) {
      optionElement.dataset.correct = answer.correct
    }
    optionElement.addEventListener('click', () => {
      if (answer.correct) {
        optionElement.style.backgroundColor = "green";
      } else {
        optionElement.style.backgroundColor = "red";
      }
      setTimeout(() =>
        handleNextOrOptionClick(quesno,)
        , 2000)
    })
  })

  // setting next question and options
  document.querySelector(".next").addEventListener("click", () =>
    handleNextOrOptionClick(quesno))
}

const handleNextOrOptionClick = (quesno) => {
  quesno += 1;
  if (quesno < 4) {
    setNextQuestion(quesno);
  }
  else {
    document.querySelector(".start").classList.remove("hide");
    document.querySelector(".question").classList.remove("colflex");
    document.querySelector(".bottom").classList.remove("rowflex");
  }
}


const questions = [

  {
    question: 'In modern periodic table, elements are arranged according to their',
    answers: [
      { text: '(a) atomic weight', correct: false },
      { text: '(b) density', correct: false },
      { text: '(c) atomic number', correct: true },
      { text: '(d) melting point', correct: false }
    ],
    id: 0
  },
  {
    question: 'Which one of the following elements exhibit maximum number of valence electrons?',
    answers: [
      { text: '(a) Na', correct: false },
      { text: '(b) Al', correct: false },
      { text: '(c) Si', correct: false },
      { text: '(d) P', correct: true }
    ],
    id: 1
  },
  {
    question: 'Which one of the following does not increase while moving down the group of the periodic table?',
    answers: [
      { text: '(a) Atomic radius', correct: false },
      { text: '(b) Metallic character', correct: false },
      { text: '(c) Valence', correct: true },
      { text: '(d) Number of shells in an element.', correct: false }
    ],
    id: 2
  },
  {
    question: 'In which group are inert elements placed? ',
    answers: [
      { text: '(a) Group 8', correct: false },
      { text: '(b) Group 10', correct: false },
      { text: '(c) Group 1', correct: false },
      { text: '(c) Group 18', correct: true }
    ],
    id: 3
  }
]