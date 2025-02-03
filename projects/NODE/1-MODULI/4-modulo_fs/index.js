/*

MODULO fs (file system)

- FS asincrono (readFileSync, writeFileSync)
- Leggere file, scrivere nei file (override e append con {flag:a} ), creare un file
- FS asincrono (readFile, writeFile, appendFile)
- sync vs async ==> differenza tra "blocking-code" e "non-blocking code"

*/

const { error } = require('console');
const fs = require('fs');

// leggiamo il contenuto dei file e specifichiamo SEMPRE la codifica
console.log("-- ESECUZIONE SINCRONA (blocking-code) --");
console.log("1. comincio a leggere i file");

const prova = fs.readFileSync("prova.txt", 'utf-8');
const ciao = fs.readFileSync("ciao.txt", 'utf-8');

console.log(prova);
console.log(ciao);

// COME SCRIVERE NEI FILE
fs.writeFileSync("prova.txt", 'bella raga'); // il testo precedente verrà sostituito eliminando quello precedente

console.log("2. ho scritto nel file");
console.log("3. passo alla scrittura del secondo file");

// COME SCRIVERE NEI FILE APPENDENDO, OVVERO AGGIUNGENDO TESTO SENZA ELIMINARE QUELLO PRECEDENTE
fs.writeFileSync("prova.txt", ' mi chiamo dennis', {flag: 'a'}); // a sta per append


// ORA STESSO PROCEDIMENTO MA IN MODO ASINCRONO

console.log(" \n-- ESECUZIONE ASINCRONA (non-blocking) --");
console.log("1. comincio a leggere i file");
// semplicemente aggiungiamo una funzione di callback
fs.readFile("prova.txt", 'utf-8', (error, result) => {

    /*
   ASINCRONO: IN QUESTO APPROCCIO ASINCRONO, IL CODICE CONTINUA A ESSERE ESEGUITO ANCHE SE NON HA ANCORA LETTO IL FILE
   SINCRONO: NELL'APPROCCIO SINCRONO INVECE AVREBBE BLOCCATO IL CODICE FINO A QUANDO NON AVEVA LETTO IL FILE
    */

    if (error) {
        
        console.log(error);
        return
    }

    // Un'altra callback
    fs.readFile('ciao.txt', 'utf-8', (error, result) => {
        
        if (error) {
            console.log(error);
            return
        }
        
        const ciao = result;
     
        fs.writeFile("bella.txt", "CIAO SONO UNA PARAGRAFO SCRITTO IN MODO ASINCRONO", (error, result) => {
            
            if (error) {
                console.log(error);
                return
            }

            console.log("2. ho scritto nel file");

        });

    });   
    
});

console.log("3. passo alla scrittura del secondo file");
