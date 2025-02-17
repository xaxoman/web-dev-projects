const express = require('express');
const app = express();
const port = 3000;
const routers_persone = require('./routes/route_persone');

// Middleware per leggere i dati in formato JSON
app.use(express.json()); // VA SEMPRE MESSO PRIMA DEI ROUTES

// Middleware per le route delle persone
app.use(routers_persone); 

app.listen(port, () => {
     console.log(`Server is running on http://localhost:${port}`);
});
