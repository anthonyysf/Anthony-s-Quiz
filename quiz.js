const quizData = [
    {
        question: "Who has scored the most points in NBA history?",
        a: "Michael Jordan",
        b: "Kobe Brayant",
        c: "Lebron James",
        d: "Stephan Curry",
        correct: "c",
    },
    {
        question: "Which nba team has won the most nba titles?",
        a: "Bostan Celtics",
        b: "Golden State Warriors",
        c: "Los Angeles Lakers",
        d: "Chicago Bulls",
        correct: "a",
    },
    {
        question: "What do the letters NBA stand for?",
        a: "National Business Advertisment",
        b: "National Basketball Association",
        c: "Native Basketball Americano",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "How many fouls can a player commit before being ejected?",
        a: "5",
        b: "4",
        c: "7",
        d: "6",
        correct: "d",
    },
    {
        question: "What team plays in Washington?",
        a: "Clippers",
        b: "Wizards",
        c: "Bucks",
        d: "Suns",
        correct: "b",
    },
    {
        question: "What are the most points a player has scored in an NBA game?",
        a: "81",
        b: "100",
        c: "121",
        d: "94",
        correct: "b",
    },
    {
        question: "What team is owned by Mark Cuban?",
        a: "Dallas Mavricks",
        b: "Los Angeles Lakers",
        c: "Houston Rockets",
        d: "Philadelphia 76ers",
        correct: "b",
    },
    {
        question: "What NBA superstar was nicknamed Superman?",
        a: "Kobe Bryant",
        b: "Shaquille o'Neil",
        c: "Tim Duncan",
        d: "Kevin Garnett",
        correct: "b",
    },
    {
        question: "Which player has won the most NBA titles?",
        a: "Kobe Brayant",
        b: "Michael Jordan",
        c: "Bill Russell",
        d: "Wilt Chamberlain",
        correct: "c",
    },
    {
        question: "Who is the shortest player to ever win a scoring title?",
        a: "Stephen Curry",
        b: "Isaiah Thomas ",
        c: "Kyrie Irving",
        d: "Allen Iverson",
        correct: "d",
    },


 


];

 

const quiz= document.getElementById('quiz')
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

 


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

 

       currentQuiz++

 

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
<h2>You answered ${score}/${quizData.length} questions correctly</h2>

 

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})