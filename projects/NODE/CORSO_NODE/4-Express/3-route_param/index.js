/*
   Route parameters

    - mapping per non mandare non mandare tutte i dati 
    - come richiedere i dati di un oggetto specifico (hardcoded)
    - richiedere singolo elemento con route parameter
    - gestione parame non esistente
    - esempio route param complessi 
*/


const express = require('express');
const app = express();
const port = 3000;

const persone = require('./persone');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="/persone">Registro persone</a>');
 });

// Funzione per ottenere tutte le persone dal registro persone
app.get('/persone', (req, res) => {

    // Mappo tutte le persone nel registro persone e restituisco solo id, nome e cognome
    // con .map() creo un nuovo array con i valori che mi interessano
    const new_persone = persone.map((persona) => { 

        const { id, nome, cognome } = persona;
        return { id, nome, cognome };
       
    });

    res.json(new_persone);
 });


  // cerco solo l'utente con ID con val x   
  // /persone/:id

 // versione con route param
 app.get(`/persone/:id`,  (req, res) => {

    console.log(req.params); // Mostra tutti i parametri passati nella route
    const {id} = req.params; // Estraggo il parametro id dalla route, processo chiamato destructuring
    const persona_ricercata = persone.find((persona_ricercata) => persona_ricercata.id === id);

    // Gestisco i dati richiesti se non esistono
    if (!persona_ricercata) {
        
        return res.status(404).send('<h1>Persona inesistente</h1>');
    }
    
    res.json(persona_ricercata);
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
