// JavaScript code (translator.js)

const DICT_FILE = 'dizionario.txt';

// Translate function
function translateWord(word, lang) {
    return new Promise((resolve, reject) => {
        let found = false;

        fetch(DICT_FILE)
            .then(response => response.text())
            .then(data => {
                const lines = data.split('\n');
                for (const line of lines) {
                    const [italiano, inglese] = line.trim().split(' '); // rimuove spazi iniziali e finali
                    console.log("Italian:", italiano, "English:", inglese, "Word:", word); // Debugging
                    if (lang === 'ita' && italiano === word) {
                        resolve(`Translation in English: ${inglese}`);
                        found = true;
                        break;
                    } else if (lang === 'eng' && inglese === word) {
                        resolve(`Translation in Italian: ${italiano}`);
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    resolve('Word not found in the dictionary.');
                }
            })
            .catch(error => reject(`Error: ${error}`));
    });
}

// funzione per visualizzare la traduzione
function displayTranslation(translation) {
    document.getElementById('translationResult').textContent = translation;
}

// eventListener per il form di traduzione
document.getElementById('translationForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const word = document.getElementById('word').value.trim();
    const lang = document.getElementById('lang').value;
    if (word !== '') {
        try {
            const translation = await translateWord(word, lang);
            displayTranslation(translation);
        } catch (error) {
            console.error(error);
        }
    } else {
        displayTranslation('Please enter a word.');
    }
});
