/*
    1. Creare un server con Express
    2. mandare una pagina HTML come risposta ad una richiesta GET
        - creare una cartella public con un file index.html
            
*/

// importare express
const express = require('express');

// creare un'istanza di express
const app = express();

// creare un server
const PORT = 3000;

// Gestisco la route principale per la home
app.get('/', (req, res) => {
    res.send('benvenuto amicoo');
});


// pagina about
app.get('/about', (req, res) => {
    res.send(`Ciao sono la pagina about`);
});

// pagina contatti
app.get('/contatti', (req, res) => {
    res.send(`Ciao sono la pagina contatti`);
});


// SEMPRE ALLA FINE DELLE ROUTE
// Gestisco la routine per tutti gli elementi che non vengono trovati
app.all('*', (req, res) => {
  res.send(`<h1> Pagina non trovata </h1>`);
});