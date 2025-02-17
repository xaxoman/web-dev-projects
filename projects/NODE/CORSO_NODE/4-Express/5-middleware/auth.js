// Middleware per verificare se l'utente è autenticato
const authMiddleware = (req, res, next) => {

    const {auth} = req.query; // Estrae il parametro 'auth' dalla query string

    // localhost:3000/persone?auth=segreto

    if (auth === 'segreto') { 
        next(); // Utente autorizzato, prosegui
    } else {
        res.status(403).send('Accesso negato!'); // Blocca la richiesta
    }
};


module.exports = authMiddleware;