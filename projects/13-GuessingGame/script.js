rand_number = Math.floor(Math.random() * 100) + 1;
console.log(rand_number);
let max_attempts = 10;

function checkGuess() {

    user_input = document.getElementById("guessField").value;
    let show_attempts = document.getElementById("attempts");
    let show_number = document.querySelectorAll("span"); // tag vuoto che mostra il numero di tentativi rimasti


    if (user_input < 1 || user_input > 100) {
        alert("Inserisci un numero tra 1 e 100");
    } 

    else {
     
        let user_input = document.getElementById("guessField").value;
        
            // La funzione parseInt() serve per non mandare  il ciclo while in loop infinito e farlo funzionare correttamente
            if (rand_number === parseInt(user_input)) {
                // mostra il messaggio di successo insieme al numero
                show_attempts.style.display = "block";
                show_attempts.style.color = "green";
                show_attempts.innerHTML = "Congratulazioni! Il numero era " + rand_number;
             

            } 
            
            else if (rand_number < parseInt(user_input)) {
                // riduci il contatore e mostra il messaggio di errore
                max_attempts--;
                show_attempts.style.display = "block";
                show_attempts.style.color = "red";
                show_number.innerHTML = max_attempts; 
                show_attempts.innerHTML = "il numero è più piccolo, tentativi rimasti " + max_attempts;
                
            } 
            
            else if (rand_number > parseInt(user_input)) {
                // riduci il contatore e mostra il messaggio di errore
                max_attempts--;
                show_attempts.style.display = "block";
                show_attempts.style.color = "red";
                show_number.innerHTML = max_attempts; 
                show_attempts.innerHTML = "il numero è più grande, tentativi rimasti " + max_attempts;
            }
        
    }

    // se i tentativi sono esauriti mostra il messaggio di errore e rendo il bottone non cliccabile
    if (max_attempts === 0) {
        show_attempts.style.display = "block";
        show_attempts.style.color = "red";
        show_attempts.innerHTML = "Hai esaurito i tentativi, il numero era " + rand_number;
        let button = document.querySelector("button");
        button.style.backgroundColor = "grey";
        button.style.color = "white";
        button.style.cursor = "not-allowed";
        button.style.border = "none";
        button.disabled = true;
    } 
}
