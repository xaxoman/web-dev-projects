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

// Modulo 'os'

const os = require('os'); // La var si DEVE chiamare os altrimenti non trova il modulo

console.log(os.userInfo()); // per ottenere informazioni sull'utente attuale

console.log("Durata sessione in Sec: " + os.uptime()); // durata della sessione (da quanto è acceso il pc)

console.log("Stai usando il seguente Sistema operativo: " + os.type());

console.log("Achitettura del tuo pc: " + os.arch()); // architettura del pc in uso x64 x86 ...



const info_pc = {

    Sistema: os.type(),
    arch: os.arch(),
    release: os.release(),
    memoria_tot: os.totalmem(),
    memoria_free: os.freemem()
}

console.log(info_pc);


