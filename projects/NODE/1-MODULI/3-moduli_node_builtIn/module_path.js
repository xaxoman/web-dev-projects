// IN QUESTO FILE ILLUSTRO COME UTILIZZARE I MODULI BUILT-IN DI NODE
// I MODULI BUILT-IN DI NODE SONO MODULI CHE VENGONO INSTALLATI DI DEFAULT CON NODE

/*
    - cosa sono i moduli built-in di Node?
    - moduli built-in os (Operating System)
    - userInfo, uptime, type, arch
    - moduli built-in path
    - separator, join, basename, resolve (percorso assoluto)

*/

// 1. Modulo 'os' (Operating System)  
// 2. 'path' (Gestione dei percorsi)

// Modulo 'path'

const path = require('path');

 // da il separatore per le cartelle e file nei path o percorsi, può essere utile se bisogna generare dei percorsi custom
 // ad esempio windows usa il backslash \ mentre linux usa il forward slah  / 
console.log(path.sep);

// lista gli elementi di una sottocartella
const percorso_file = path.join('/cartella', 'sottocartella', 'prova.txt');

// ottengo l'ultimo elemento di una cartella 
console.log(path.basename(percorso_file));

// uso resolve per ottenere il percorso assoluto di un elemento

// __dirname è una variabile globale che indica il perc assoluto
const percorso_file_assoluto = path.resolve(__dirname, 'cartella', 'sottocartella', 'prova.txt'); // va tolto lo slash iniziale
console.log(percorso_file_assoluto);