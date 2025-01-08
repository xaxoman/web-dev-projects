let username_array = [];

function maxplayers() {
    
   const max_number = document.getElementById("max_number");
    max_number.style.fontWeight = "bold";
    const max_number_value = document.getElementById("max-players").value;
    max_number.innerHTML = "Max players: " + max_number_value; 
   
    if (max_number_value > 0) {
        
        const title = document.querySelector("h1");
        title.innerHTML = "Now add the usernames";
       
        
        
        // ARRAY CHE DEFINISCE GLI USERNAME
        let username_text_value = document.getElementById("max-players").value; // prendo il valore dell'username come stringa e lo aggiungo all'array

        for (let i = 0; i < max_number_value; i++) {
            let username = prompt("Enter username for player " + (i + 1));
            username_array.push(username);
        
            const p = document.createElement("p");
            p.innerHTML = `Username ${i + 1}: ${username}`;
            document.body.appendChild(p);
        }
        

            const empty_array_message = document.querySelector("h2");
            empty_array_message.style.color = "green";
            empty_array_message.innerHTML = "THE GAME CAN START"
            const button = document.getElementById("submit");
            button.style.cursor = "not-allowed";
            button.disabled = true;
            // fai apparire la casella per rimuovere un giocatore
            const casella_rimuovi = document.querySelector("div");
            casella_rimuovi.style.display = "block";
         
       
    }

    else {

        const empty_array_message = document.querySelector("h2");
         empty_array_message.style.color = "red";
         empty_array_message.innerHTML = "TEAM SLOT CAN'T BE EMPTY"
    }
   
}

// FUNZIONE PER RIMUOVERE UN GIOCATORE
function eliminaPlayer() {
                
    let index_to_remove = document.getElementById("delete-user").value;
    console.log(index_to_remove);
     username_array.splice(index_to_remove - 1, 1);
     console.log(username_array);
     const p = document.createElement("p");
     p.innerHTML = `Username ${index_to_remove} removed`;
     document.body.appendChild(p);

     //rimuovi la lista precedente e la ricreo aggiornata
        const lista = document.querySelectorAll("p");
        for (let i = 0; i < lista.length; i++) {
            lista[i].remove();
        }

        // aggiorno la lista
        for (let i = 0; i < username_array.length; i++) {
           
            const p = document.createElement("p");
            p.innerHTML = `Username ${i + 1}: ${username_array[i]}`;
            document.body.appendChild(p);
        }
 }
    