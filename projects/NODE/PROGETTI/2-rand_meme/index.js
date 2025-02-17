const express = require('express');
const app = express();
const port = 3000;

require('dotenv').config(); // spiega: carico le variabili d'ambiente dal file .env
const IMGFLIP_USR = process.env.IMGFLIP_USR; 
const IMGFLIP_PWD = process.env.IMGFLIP_PWD;

app.use(express.static('public'));

app.get('/api/meme', async (req, res) => {
    
    const { top, bottom } = req.query; // spiega: estraggo i parametri top e bottom dalla query string dell'url
    
    try {
        
        const response = await fetch('https://api.imgflip.com/get_memes'); // spiega: effettuo una richiesta GET all'API di meme
        const data = await response.json(); // spiega: estraggo i dati dalla risposta della richiesta come oggetto JSON

        if (!response.ok) {
            throw new Error(`Meme API error: ${response.status}`);
        }

        if (data.success) {
            const memes = data.data.memes; // spiega: estraggo l'array di meme dall'oggetto data
            const randomIndex = Math.floor(Math.random() * memes.length);
            const memeId = memes[randomIndex].id;

            // spiega: creo un oggetto formData con i parametri necessari per la richiesta POST
            const formData = new URLSearchParams();
            formData.append('template_id', memeId);
            formData.append('username', `${IMGFLIP_USR}`);
            formData.append('password', `${IMGFLIP_PWD}`);
            formData.append('text0', top || '');
            formData.append('text1', bottom || '');

            // Make the caption request
            const captionResponse = await fetch('https://api.imgflip.com/caption_image', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // spiega: imposto il tipo di contenuto della richiesta
                },
                body: formData // spiega: passo l'oggetto formData come corpo della richiesta
            });

            const captionData = await captionResponse.json(); // spiega: estraggo i dati dalla risposta
            
            if (captionData.success) {
                res.json({ meme: captionData.data.url }); // spiega: invio l'url dell'immagine come risposta
            } else {
                throw new Error('Failed to caption meme');
            }
        }
    } catch (error) {
        console.error('Server Error:', error.message);
        res.status(500).json({ error: 'Failed to generate meme' });
    }
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
