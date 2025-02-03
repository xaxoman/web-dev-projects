/*

    Streams

    - cosa sono e come funzionano
      - stream è un flusso di dati che può essere letto o scritto in maniera sequenziale, senza dover caricare tutto il file in memoria. 
    - caricare un file pesante
    - leggere il file con stream
    - scrivere il file senza stream

*/

const fs = require('fs');


/* for (let i = 0; i < 10000; i++) {

    fs.writeFileSync('./file_pesante.txt', `Ciao, siamo alla riga ${i}\n`, {flag: 'a'});
} */


// Leggere il file con stream (non carica tutto il file in memoria)
const stream = fs.createReadStream('./file_pesante.txt');

// legge il file e lo mostra a pezzi (chunk) 
stream.on('data', (result) => {
    
    console.log(result);
}
);
