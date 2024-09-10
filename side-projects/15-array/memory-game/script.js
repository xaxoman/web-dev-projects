const button = document.querySelectorAll("#btn");

// definisco l'array degli elementi da accoppiare 
const emojii_array = ["🔥", "💧", "⚡", "❄️", "🌈", "🌚", "🌞", "🌌"];

let risultati = [];

 // timer 
 const timer = document.getElementById("time");
 let seconds = 0;
 let minuti = 0;

// funzione che assegna le emojii alle carte in modo casuale
function restartGame() {
    

    // faccio partire il timer e calcolo e separo i min dai sec
    const timer_value = setInterval(function() {

        seconds++;
        timer.innerHTML = `Tempo: ${minuti} min ${seconds} secondi`;

        if(seconds === 60) {

            seconds=0;
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
        
        // ora ottenuto il nuovo array con le 8 coppie esatte assocciamo gli indici ottenuti alle celle del gioco
        for (let i = 0; i < 16; i++) {
            
            button[i].innerHTML = emojii_array[risultati[i]]; // associo gli indici casuali alle emojii
        } 

} 

button.forEach(button => {
    // aggiungo un event listener a ogni bottone e quando cliccati attivano la transizione 
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
                return; // Ignore clicks while cards are flipping
            }

            if (count === 0) {
                first_card = button.innerHTML;
                first_card_index = button;
                count++;
            } else if (count === 1) {
                // Prevent matching the same card by checking if the clicked card is different from the first one
                if (button === first_card_index) {
                    return; // Do nothing if the same card is clicked twice
                }

                second_card = button.innerHTML;
                second_card_index = button;
                count = 0;

                if (first_card !== null && second_card !== null) {
                    if (first_card === second_card) {
                        // Cards match
                        // apply a custom animation and after 1 second hide the cards
                        first_card_index.classList.add("matching-cards-animation");
                        second_card_index.classList.add("matching-cards-animation");
                        
                        setTimeout(() => {
                            first_card_index.style.visibility = "hidden";
                            second_card_index.style.visibility = "hidden";
                        }, 1000);


                        // Check if all cards have disappeared
                        const visibleCards = document.querySelectorAll("#btn:not([style*='visibility: hidden'])");
                        if (visibleCards.length === 0) {
                            // All cards have disappeared, show final score
                            final_score.style.display = "block";
                            const final_time = document.getElementById("final-time");
                            final_time.innerHTML = minuti + " min " + seconds + " sec";
                        }
                    } else {
                        // Cards don't match
                        isCardFlipped = true; // Prevent clicking on other cards while flipping

                        setTimeout(() => {
                            first_card_index.classList.remove("button-click-effect");
                            second_card_index.classList.remove("button-click-effect");
                            isCardFlipped = false; // Allow clicking on cards again
                        }, 1000);
                    }
                }
            }
        })
    });

}


restartGame();