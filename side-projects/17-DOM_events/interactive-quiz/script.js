const question = document.getElementById("question");
const input_field = document.querySelectorAll("input");
const option = document.querySelectorAll(".option");
const option_container = document.getElementsByClassName("option");
const score_message = document.getElementById("score");

let score = 0;

// array di oggetti con le domande, le opzioni e le risposte
const question_object = [
    {
        question: "Qual è il colore del cielo durante una giornata serena?",
        options: ["Verde", "Blu", "Rosso", "Giallo"],
        answer: "Blu"
    },
    {
        question: "Qual è il numero di pianeti nel sistema solare?",
        options: ["7", "8", "9", "10"],
        answer: "8"
    },
    {
        question: "Qual è la valuta ufficiale del Giappone?",
        options: ["Dollaro", "Euro", "Yen", "Won"],
        answer: "Yen"
    },
    {
        question: "Chi ha dipinto la Gioconda?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "Qual è la formula chimica del sale da cucina?",
        options: ["H2O", "CO2", "NaCl", "O2"],
        answer: "NaCl"
    },
    {
        question: "Qual è il più grande mammifero terrestre?",
        options: ["Elefante", "Balena", "Rinoceronte", "Ippopotamo"],
        answer: "Elefante"
    },
    {
        question: "Qual è la capitale del Canada?",
        options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        answer: "Ottawa"
    },
    {
        question: "Qual è il simbolo chimico dell'oro?",
        options: ["Ag", "Au", "Fe", "Pb"],
        answer: "Au"
    },
    {
        question: "Qual è il fiume più lungo del mondo?",
        options: ["Nilo", "Amazzonia", "Yangtze", "Mississippi"],
        answer: "Amazzonia"
    },
    {
        question: "Chi ha scritto 'La Divina Commedia'?",
        options: ["Dante Alighieri", "Giovanni Boccaccio", "Francesco Petrarca", "Ludovico Ariosto"],
        answer: "Dante Alighieri"
    }
];

// FUNZIONE per mostrare le domande
let i = 0;

function showQuestion() {

    // assegno la domanda 
    question.textContent = i+1 + ". " + question_object[i].question;

    // assegno le opzioni 
    for (let j = 0; j < 4; j++) {
        
        option[j].textContent = question_object[i].options[j];

    }

    
}

// controlla se la risposta è stata data e se è giusta o meno

option.forEach(option => {
    
    option.addEventListener("click", function checkAnswer() {
        
        if (option.textContent === question_object[i].answer) {

           option.classList.add("true");
           score++;
        }

        else {

            option.classList.add("false");
        }

         // aggiungo un delay prima di passare alla domanda successiva 
         setTimeout(() => {
            i++;  
            if (i < question_object.length) {
                // rimuovo gli stili applicati in modo da non confondere l'utente
                option.classList.remove("true", "false"); 
                showQuestion();  // passa alla prossima domanda
            } else {
              score_message.textContent = `Quiz finito! Punteggio ${score} su ${question_object.length}`;
            }
        }, 500);

    })
});


showQuestion();