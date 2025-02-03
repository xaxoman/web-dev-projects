/*
    MODULO HTTP

    - serve per creare un web server
    - importare http
    - creare un server con risposta default
    - mettere server in ascolto
    - gestire richieste con routing e errore

*/

const http = require('http');

const porta  = 3000;

// Crea il web server
const server = http.createServer((req, res) => {
    

    if (req.url === "/" ) { // quando siamo sulla home page mostra il messaggio
        
        res.end("Benvenuto nella homepage");
    }

   else if(req.url === "/prova") {

        res.end("Sezione prova del sito");
    }

    // se non corrisponde a nessuno di questi allora..
    res.end(`
        
        <h1> Errore </h1>
        <p>Torna alla <a href="/"> home </a>page la pagine non esiste..</p>    
    `);
    

});

// dico al server di ascoltare sulla porta scritta
server.listen(porta);