/*
    Query string parameters (URL parameters)

    - esempio di query string: http://localhost:3000/?name=John&age=30
    - aggiungere deller persone 
    - aggiungere route per visualizzare le persone da cercare
    - utilizzo di req.query per ottenere i parametri della query string
    - search e limit per filtrare i risultati  (es. http://localhost:3000/search?name=John&limit=2)
*/

const express = require('express');
const app = express();
const port = 3000;
const persone = require('./persone');


// Funzione per ottenere tutte le persone dal registro persone
app.get('/persone', (req, res) => {

    // Mappo tutte le persone nel registro persone e restituisco solo id, nome e cognome
    // con .map() creo un nuovo array con i valori che mi interessano
    const new_persone = persone.map((persona) => { 

        const { id, nome, cognome } = persona;
        return { id, nome, cognome};
       
    });

    res.json(new_persone);
 });

 // vecchio codice d'esempio con route param scorsa sezione
/*  app.get(`/persone/:id`,  (req, res) => {

    console.log(req.params); // Mostra tutti i parametri passati nella route
    const {id} = req.params; // Estraggo il parametro id dalla route, processo chiamato destructuring
    const persona_ricercata = persone.find((persona_ricercata) => persona_ricercata.id === id);

    // Gestisco i dati richiesti se non esistono
    if (!persona_ricercata) {
        
        return res.status(404).send('<h1>Persona inesistente</h1>');
    }
    
    res.json(persona_ricercata);
});
 */


// esempio con req.query
app.get("/persone/search", (req, res) => {

     // STAMPO A TERMINALE LA QUERY, (es: http://localhost:3000/persone/search?nome=Luca&cognome=rossi )
     // { nome: 'Luca', cognome: 'rossi' }
     const {query, limit} = req.query; // Estraggo i parametri query e limit dalla query string
     console.log(req.query);
       
     let persone_filtrate = [...persone]; // Creo una copia dell'array persone, per non modificare l'originale

     if (query) {
        
        persone_filtrate = persone_filtrate.filter((persona) => {

            return persona.nome.startsWith(query); // Restituisco solo le persone che iniziano con il valore di query
        });
     }

    if (limit) {
            
            persone_filtrate = persone_filtrate.slice(0, Number(limit)); // Restituisco solo le prime n persone, dove n è il valore di limit
    }

    if (persone_filtrate.length === 0) {
        
        return res.status(404).send('<h1>Nessuna persona trovata</h1>');
        
    }

    // esempio di query: 
    /*
    
        http://localhost:3000/persone/search?query=A&limit=1

        [
            {
                "id": "13",
                "nome": "Alessandro",
                "cognome": "Bronzo",
                "interessi": [
                "pesca",
                "caccia"
                ]
            }
        ]
    */
     res.status(200).json(persone_filtrate);

});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
