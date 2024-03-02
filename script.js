const question =[
    {
        question: "What does VAT stand for?",
        answers:[
            {Text: "Variable Annual Tax", correct: false},
            {Text: "Vendor Assessment Test", correct: false},
            {Text: "Value Added Tax", correct: true},
            {Text: "Value Assessment To the blackjack number or something", correct: false}
        ]
    },
    {
        question: "According to the text, who pays the VAT to the Revenue Department?",
        answers:[
            {Text: "End User", correct: false},
            {Text: "Wholesaler", correct: false},
            {Text: "Retailer", correct: false},
            {Text: "Manufacturer", correct: true}
        ]
    },
    {
        question: "Which of the following transactions is NOT subject to VAT in Thailand?",
        answers:[
            {Text: "Import of Goods", correct: false},
            {Text: "Provision of legal services", correct: false},
            {Text: "Sale of educational services", correct: true},
            {Text: " Sale of agricultural products", correct: false}
        ]
    },
    {
        question: "Under what circumstances is an offshore operator liable to VAT in Thailand?",
        answers:[
            {Text: "Selling goods or rendering services in Thailand on a temporary basis without VAT registration", correct: false},
            {Text: "Providing E-Services to a VAT registrant in Thailand", correct: true},
            {Text: "Providing other services to any users in Thailand", correct: false},
            {Text: "All of the above", correct: false}
        ]
    },
    {
        question: "What constitutes the tax point for the sale of goods according to section 78(1)?",
        answers:[
            {Text: "Delivery of goods", correct: false},
            {Text: "Transfer of ownership in goods", correct: false},
            {Text: "Receipt of payment of goods", correct: false},
            {Text: "All of emmmmmm", correct: true}
        ]
    },
    {
        question: "What is included in the tax base for the sale of goods or provision of services?",
        answers:[
            {Text: "Money", correct: false},
            {Text: "Property", correct: false},
            {Text: "Compensation", correct: false},
            {Text: "All of the above", correct: true}
        ]
    },
    {
        question: "What is the VAT rate in Thailand according to section 80?",
        answers:[
            {Text: "5%", correct: false},
            {Text: "7%", correct: true},
            {Text: "10%", correct: false},
            {Text: "12%", correct: false}
        ]
    },
    {
        question: "When is the tax point for the sale of goods according to section 78(1)?",
        answers: [
            { Text: "Upon delivery of goods", correct: false },
            { Text: "Upon transfer of ownership in goods", correct: false },
            { Text: "Upon receipt of payment of goods", correct: false },
            { Text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following transactions qualifies for zero-rated VAT?",
        answers:[
            {Text: "Export of goods", correct: true},
            {Text: "Sale of goods to a local government authority", correct: false},
            {Text: "Domestic transportation services", correct: false},
            {Text: "Lease of immovable property", correct: false}
        ]
    },
    {
        question: "Who is exempt from VAT according to section 81?",
        answers:[
            {Text: "Enterprises with an annual turnover not exceeding THB1,800,000", correct: false},
            {Text: "Businesses listed by the Royal Decree", correct: true},
            {Text: "Local government authorities", correct: false},
            {Text: "All of the above", correct: false}
        ]
    },
    {
        question: "what is Ace + 10",
        answers:[
            {Text: "21", correct: false},
            {Text: "Gambling is bad :<", correct: true},
            {Text: "BLACKJACK!!!", correct: false},
            {Text: "oi stop hosting and rest", correct: false}
        ]
    },

];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.Text;
        button.classList.add('btn');
        answerButtonsElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState(){
    nextButton.classList.add('none');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = "You scored " + score + " out of " + question.length + " questions" +",time to play blackjack";
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();