const express = require('express');
/* const fetch = require('node-fetch'); // Required for Node.js <18
   ❌ SE USI UNA VERSIONE DI NODE MAGGIORE A 18, NON SERVE INSTALLARE IL PACCHETTO node-fetch 
   NON USARE IL PACCHETTO node-fetch SE HAI UNA VERSIONE DI NODE > 18
 */
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/joke', async (req, res) => {
    const category = req.query.category || 'Any';
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${category}`);
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(`Joke API error: ${response.status}`);
        }

        let joke;
        if (data.type === 'single') {
            joke = data.joke;
        } else if (data.type === 'twopart') {
            joke = `${data.setup} - ${data.delivery}`;
        } else {
            joke = 'No joke found';
        }

        res.json({ joke });
    } catch (error) {
        console.error('Server Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch joke' });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
