/*
    Event Emitters

    - Introduzione al concetto di "Event driven programming"
    -importare il modulo events
    - creare un oggetto eventEmitter
    - metodi on e emit
    - passare argomenti agli eventi

*/

const eventEmitter = require("events");

const customEmitter = new eventEmitter();

// On ascolta l'evento e agisce di conseguenza
customEmitter.on('messaggio', (nome, anno) => {

    console.log(`Ciao, mi chiamo ${nome}, e sono nato nel ${anno}`);
});

// Emit emette l'evento e fa partire la funzione associata quando viene chiamato on
customEmitter.emit('messaggio', 'Denis', 2006);

