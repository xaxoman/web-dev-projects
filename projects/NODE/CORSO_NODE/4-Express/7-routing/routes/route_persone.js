const express = require('express');
const fs = require('fs');

const persone = require('../persone.json') // importo il file JSON con i dati delle persone
const router = express.Router(); // creo un oggetto router che mi permette di creare delle route

router.use(express.json()); // serve a leggere i dati in formato JSON

// Ottengo tutti i dati delle persone
router.get('/api/persone', (req, res) => {
    res.status(200).json({success: true, data: persone});   
});


// Ottengo i dati di una persona in base all'id
router.get('/api/persone/:id', (req, res) => { 

     const {id} = req.params;

     const persona = persone.find((persona) => persona.id === id);

     res.json({success: true, data: persona});

});

// Utilizzo POST per creare una nuova persona
router.post('/api/persone', (req, res) => {

     console.log(req.body); // leggo i dati in formato JSON e li stampo a console
     const nuova_persona = req.body; // creo una var con i dati del nuovo utente
     persone.push(nuova_persona); 

     // Rendo le modifiche e i nuovi dati persistenti modificando il file
     fs.writeFile('./persone.json', JSON.stringify(persone, null, 2), (err) => {
          if (err) {
                return res.status(500).json({ success: false, message: 'Errore nel salvare i dati' });
          }
          res.status(200).json({
                success: true,
                data: persone
          });
     });
}) 

// Utilizzo il metodo PUT per andare a modificare i dati già esistenti
router.put('/api/persone/:id', (req, res) => {

     const {id} = req.params;
     const persona = req.body;
     persone[Number(id) - 1] = persona;

     // Rendo le modifiche persistenti modificando il file
     fs.writeFile('./persone.json', JSON.stringify(persone, null, 2), (err) => {
          if (err) {
                return res.status(500).json({ success: false, message: 'Errore nel salvare i dati' });
          }
          res.status(200).json({
                success: true,
                data: persone
          });
     });
});


/// Utilizzo il metodo DELETE per eliminare le persone con ID 

router.delete('/api/persone/:id', (req, res) => {

     const {id} = req.params; // assegno l'id richiesto alla variabile id
     
     // se l'id è uguale a quello richiesta (più funzionale perché funziona anche con ID più complessi alfanumerici)
     const index = persone.findIndex(persona => persona.id === id);
     persone.splice(index, 1); // elimino la persona con l'id richiesto dal file 

     // Rendo le modifiche persistenti modificando il file, cancellando la persona con l'id richiesto dal file
     fs.writeFile('./persone.json', JSON.stringify(persone, null, 2), (err) => {
          if (err) {
                return res.status(500).json({ success: false, message: 'Errore nel salvare i dati' });
          }
          res.status(200).json({
                success: true,
                data: persone
          });
     });
})

module.exports = router; // esporto il modulo router per poterlo utilizzare in altri file