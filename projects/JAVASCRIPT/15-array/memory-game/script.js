const button = document.querySelectorAll("#btn");

// Definisco l'array degli elementi da accoppiare
const emojii_array = ["🔥", "💧", "⚡", "❄️", "🌈", "🌚", "🌞", "🌌"];

let risultati = [];

// Timer
const timer = document.getElementById("time");
let seconds = 0;
let minuti = 0;

// Funzione che assegna le emoji alle carte in modo casuale
function restartGame() {

    // Faccio partire il timer e calcolo e separo i minuti dai secondi
    const timer_value = setInterval(function() {

        seconds++;
        timer.innerHTML = `Tempo: ${minuti} min ${seconds} secondi`;

        if(seconds === 60) {

            seconds = 0;
            minuti++;
        }

    }, 1000);

    // Creiamo un array per tenere traccia delle occorrenze di ogni numero
    let occorrenze = Array(8).fill(0);

    // Ciclo fino a quando non abbiamo 16 numeri
    for (let i = 0; i < 16; i++) {
        let numero;

        // Continua a generare un numero finché non trovi un numero che non ha già 2 occorrenze
        do {
            numero = Math.floor(Math.random() * emojii_array.length);
        } while (occorrenze[numero] >= 2);

        // Aggiungiamo il numero al risultato e incrementiamo le occorrenze
        risultati.push(numero);
        occorrenze[numero]++;
    }

    console.log(risultati);

    // Ora ottenuto il nuovo array con le 8 coppie esatte associamo gli indici ottenuti alle celle del gioco
    for (let i = 0; i < 16; i++) {
        button[i].innerHTML = emojii_array[risultati[i]]; // Associo gli indici casuali alle emoji
    }
}

button.forEach(button => {
    // Aggiungo un event listener a ogni bottone e quando cliccati attivano la transizione
    button.addEventListener('click', function() {
        button.classList.toggle("button-click-effect");
    })
});

function checkCard() {

    const final_score = document.getElementById("game-result");

    let first_card = null;
    let second_card = null;
    let first_card_index = null;
    let second_card_index = null;
    let count = 0;
    let isCardFlipped = false;

    button.forEach(button => {
        button.addEventListener('click', function() {
            
            if (isCardFlipped) {
                return; // Ignora i clic mentre le carte si stanno girando
            }

            if (count === 0) {
                first_card = button.innerHTML;
                first_card_index = button;
                count++;
            } else if (count === 1) {
                // Impedisce di abbinare la stessa carta controllando se la carta cliccata è diversa dalla prima
                if (button === first_card_index) {
                    return; // Non fare nulla se la stessa carta viene cliccata due volte
                }

                second_card = button.innerHTML;
                second_card_index = button;
                count = 0;

                if (first_card !== null && second_card !== null) {
                    if (first_card === second_card) {
                        // Le carte corrispondono
                        // applica un'animazione personalizzata e dopo 1 secondo nascondi le carte
                        first_card_index.classList.add("matching-cards-animation");
                        second_card_index.classList.add("matching-cards-animation");
                        
                        setTimeout(() => {
                            first_card_index.style.visibility = "hidden";
                            second_card_index.style.visibility = "hidden";
                        }, 1000);

                        // Controlla se tutte le carte sono scomparse
                        const visibleCards = document.querySelectorAll("#btn:not([style*='visibility: hidden'])");
                        console.log(visibleCards);
                        if (visibleCards.length === 2) { // le prima 2 carte sono visibili e non vengono contate perciiò la condizione è a 2 e non a 0
                            // Tutte le carte sono scomparse, mostra il punteggio finale
                            final_score.style.display = "block";
                            const final_time = document.getElementById("final-time");
                            final_time.innerHTML = minuti + " min " + seconds + " sec";
                        }
                    } else {
                        // Le carte non corrispondono
                        isCardFlipped = true; // Impedisce di cliccare su altre carte mentre si stanno girando

                        setTimeout(() => {
                            first_card_index.classList.remove("button-click-effect");
                            second_card_index.classList.remove("button-click-effect");
                            isCardFlipped = false; // Permette di cliccare di nuovo sulle carte
                        }, 1000);
                    }
                }
            }
        })
    });

}

restartGame();
