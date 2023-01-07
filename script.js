const quizData = [
    {
        question: "Para tomar decisões, você costuma:",
        a: "Pensar muito antes de agir.",
        b: "Vejo qual é o melhor para mim.",
        c: "Peço a ajuda a pessoas de confiança.",
        d: "Prefiro agir de acordo com meus sentimentos.",
        correct: "c",
    },
    {
        question: "Você acredita em intuição?",
        a: "Sempre.",
        b: "Às vezes.",
        c: "Raramente.",
        d: "Nunca.",
        correct: "a",
    },
    {
    question: "Você costuma se colocar no lugar dos outros?",
        a: "Sempre.",
        b: "Às vezes.",
        c: "Raramente.",
        d: "Nunca.",
        correct: "a",
    }, 
    {
        question: "Como você reage quando estar com raiva?",
        a: "Guardo tudo e ajo normalmente.",
        b: "Prefiro me isolar de tudo.",
        c: "Desabafo com alguém.",
        d: "Desconto em tudo a minha volta.",
        correct: "d",
    },

];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()


function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=> {
    const answer = getSelected()
    if(answer){
     if (answer === quizData[currentQuiz].corret) {
        score++
     }

     currentQuiz++
     
     if(currentQuiz < quizData.length) {
        loadQuiz()
     }else {
        quiz.innerHTML = `
        <h2>Você tem ${score}% de Inteligência Emocional</h2>
        
        <button onclick="location.reload()"> Reload</button>
        `
     }
    }
})