    const random_phrases = {
        "1": "Il gatto osserva attentamente dalla finestra mentre gli uccelli volano nel cielo grigio, incurante del trambusto della città sottostante.",
        "2": "La casa, costruita con pietre antiche, sorge imponente in cima alla collina, circondata da un fitto bosco di querce e castagni.",
        "3": "Nonostante le nuvole minacciose, il sole riesce a farsi strada, illuminando il paesaggio con raggi dorati che si riflettono sul lago calmo.",
        "4": "Il bambino, immerso nel suo gioco, costruisce un castello di sabbia intricatamente dettagliato, mentre le onde si infrangono delicatamente sulla riva.",
        "5": "La macchina rossa, con il motore ruggente, sfreccia lungo la strada tortuosa di montagna, lasciando dietro di sé solo il suono dell'asfalto rovente.",
        "6": "Il libro polveroso, pieno di storie dimenticate, giace aperto sullo scaffale più alto, lontano dagli occhi curiosi dei visitatori occasionali.",
        "7": "La pizza, cotta alla perfezione con una crosta croccante e formaggio filante, emana un profumo irresistibile mentre esce fumante dal forno a legna.",
        "8": "Il cane abbaia furiosamente alla porta, proteggendo la casa dai rumori sconosciuti che provengono dalla strada deserta durante la notte.",
        "9": "Il treno, con precisione svizzera, arriva puntuale alla stazione, emettendo un fischio acuto mentre i passeggeri frettolosi si affrettano verso le loro destinazioni.",
        "10": "La scuola è chiusa per le vacanze estive, e il cortile, solitamente pieno di risate e giochi, è ora avvolto in un silenzio immobile e malinconico."
    
        // le "chiavi" o "keys" sono le etichette associate ai valori corrispondenti come "1", "2"..oppure "nome": "cognome": etc..
    }

    const MAIN_phrase = document.getElementById("random-phrase");
    const textarea = document.getElementById("text");
    const vel_testo = document.getElementById("speed");
    let velocita = 0;

    const time = document.getElementById("time");
    let secondi = 0;
    let minuti = 0;

    let i = 1;
    let parole = 0;

    let FRASE_SEPARATA;
    let FRASE_UTENTE_SEPARATA;

    let timer_value; // Dichiarazione globale

function startGame() {
    // Attiva la textarea
    textarea.disabled = false;

    // Mostra la frase da scrivere come elementi <span>
    const fraseDaScrivere = random_phrases[i].split(" ");
    MAIN_phrase.innerHTML = ""; // Pulisce MAIN_phrase per un nuovo contenuto

    // circondo ogni parola della frase in uno span altrimenti non posso cambiargli colore non essendo elementi DOM
    fraseDaScrivere.forEach(parola => {
        const span = document.createElement("span");
        span.textContent = parola + " ";
        MAIN_phrase.appendChild(span);
    });
    
    // Ottiene un array di span per ogni parola
    FRASE_SEPARATA = Array.from(MAIN_phrase.children);

    // Avvia il timer e lo cancella se già in esecuzione
    clearInterval(timer_value);
    secondi = 0;
    minuti = 0;
    timer_value = setInterval(function() {
        secondi++;
        if (secondi === 60) {
            secondi = 0;
            minuti++;
        }
        time.innerHTML = `${minuti} min ${secondi}`;
    }, 1000);

    textarea.oninput = controllo_input;
}


function controllo_input() {
    FRASE_UTENTE_SEPARATA = textarea.value.trim().split(" ");
    let tutteCorrette = true;
    parole = 0; // Reset conteggio per questo controllo

    // Controlla parola per parola
    FRASE_SEPARATA.forEach((span, index) => {
        if (FRASE_UTENTE_SEPARATA[index] === span.textContent.trim()) {
            span.style.color = "green";
            parole++; // Incrementa solo se la parola è corretta
        } else {
            span.style.color = "rgb(181, 0, 0)";
            tutteCorrette = false; // Imposta false se c'è una parola errata
        }
    });

    // Calcolo velocità
    const t_min = minuti + secondi / 60;
    velocita = t_min > 0 ? parole / t_min : 0;
    vel_testo.innerHTML = isFinite(velocita) ? velocita.toFixed(2) : "0";

    // Verifica se la frase è completata
    if (tutteCorrette && FRASE_UTENTE_SEPARATA.length === FRASE_SEPARATA.length) {
        clearInterval(timer_value); // Ferma il timer
        i = (i % Object.keys(random_phrases).length) + 1; // Passa alla frase successiva
        startGame(); // Riavvia il gioco con la nuova frase
        textarea.value = ""; // Resetta la textarea
    }
}
