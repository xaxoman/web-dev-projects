const express = require('express');
const fs = require('fs');
const app = express();
const persone = require('./persone.json')
const port = 3000;
app.use(express.json()); // serve a leggere i dati in formato JSON 

// Ottengo tutti i dati delle persone
app.get('/api/persone', (req, res) => {
    res.status(200).json({success: true, data: persone});   
});

// Ottengo i dati di una persona in base all'id
app.get('/api/persone/:id', (req, res) => { 

     const {id} = req.params;

     const persona = persone.find((persona) => persona.id === id);

     res.json({success: true, data: persona});

});

// Utilizzo POST per creare una nuova persona
app.post('/api/persone', (req, res) => {

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
app.put('/api/persone/:id', (req, res) => {

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

app.delete('/api/persone/:id', (req, res) => {

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

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
});
