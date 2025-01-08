const input_field = document.querySelector("textarea");
const word_count = document.getElementById("word-count");

function count_words() {

    let charachters = 0, words = 0;
    
    input_field.addEventListener("input", function() {

        charachters = input_field.value.length;
    
        // elimino gli spazi e gli a capo
        const text = input_field.value.trim();
        // separo le singole parole e le inserisco in un array di stringhe
        // se la parola è maggiore di 0 caratteri allora la aggiunge all'array
        words = text.split(/\s+/).filter(word => word.length > 0); 
        // nella funzione split sopra come filtro abbiamo un REGEX (regular expression)
        // che è inizia e finisce con la sbarra / 
        // poi le parole vengono aggiunte all'array ogni volta che c'e uno o più spazi o a capo
        // gli spazi sono definito da \s mentre il + serve a far capire se ci sono più spazi e prenderli in considerazione
        word_count.textContent = words.length + " words, " +  charachters + " charachters"; 
      
    });

}

input_field.oninput = count_words;

