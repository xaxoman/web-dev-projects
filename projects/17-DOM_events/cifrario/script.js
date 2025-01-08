const spostamento = document.querySelector("input");
const testo = document.querySelector("textarea");
const testo_cifrato = document.getElementById("testo-cifrato");

function cifratura() {
    let shift = parseInt(spostamento.value, 10); // converto il valore di shift in intero
    let temp_str = '';

    for (let i = 0; i < testo.value.length; i++) {
      
        let charCode = testo.value.charCodeAt(i);  // ottengo il val. num corrispondente al carattere
        
        // controlla se il carattere è una lettera o meno
        if (charCode >= 65 && charCode <= 90) { // MAIUSCOLE
           
            charCode = ((charCode - 65 + shift) % 26) + 65;
        } 
        
        else if (charCode >= 97 && charCode <= 122) { // MINUSCOLE
            
            charCode = ((charCode - 97 + shift) % 26) + 97;
        }

        temp_str += String.fromCharCode(charCode);  // converto il carattere da num a lettera e lo aggiungo alla parola
    }


    testo_cifrato.textContent = temp_str; 
}

testo.oninput = cifratura;