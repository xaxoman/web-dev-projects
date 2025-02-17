const express = require('express');
const app = express();
const persone = require('./persone');
const authMiddleware = require('./auth'); // Importa il middleware per l'autenticazione
const PORTA = 3000;


app.get('/', (req, res) => {

    res.send('Benvenuto!');

});


// Middleware che registra ogni richiesta ricevuta
const loggerMiddleware = (req, res, next) => {
    res.on("finish", () => { // Evento che si verifica quando la risposta è stata inviata
        console.log(`
Richiesta ricevuta:
            \n  METODO: ${req.method}
            \n  URL: ${req.url}
            \n  TIME: ${new Date().toLocaleTimeString()}
            \n  STATUS: ${res.statusCode}
        `);
    });

    next(); // Passa al prossimo middleware o route handler
};



// Applica i middleware (VANNO SEMPRE DOPO I MIDDLEWARE STESSI)
app.use(loggerMiddleware);
app.use("/persone", authMiddleware); // uso il middleware solo per la route /persone

// Route protetta
app.get('/persone', (req, res) => {
    res.json(persone);
});


// Se la risorsa cercata non esisto, invia un messaggio di errore
app.use((req, res) => {
    res.status(404).send('Risorsa non trovata!');
});

// Avvia il server
app.listen(PORTA, () => { console.log(`Server in ascolto sulla porta ${PORTA}`); });
