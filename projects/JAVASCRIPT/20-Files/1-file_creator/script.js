// Controlla se la funzione showOpenFilePicker è disponibile nel browser
if ('showOpenFilePicker' in window) {
    // Aggiunge un gestore di evento per l'invio del form
    document.querySelector('form').addEventListener('submit', async (evento) => {
        // Impedisce il comportamento di default di invio del form
        evento.preventDefault();
        // Recupera i valori dai campi di testo
        const nomeFile = document.querySelector('#filename').value;
        const contenuto = document.querySelector('#content').value;
        try {
            // Controlla se l'estensione del file è supportata
            const estensioniSupportate = ['.txt', '.json', '.md', '.csv', '.odt'];
            const estensioneFile = nomeFile.slice(nomeFile.lastIndexOf('.'));
            if (!estensioniSupportate.includes(estensioneFile)) {
                throw new Error('L\'estensione del file deve essere una delle seguenti: ' + estensioniSupportate.join(', '));
            }
            // Mostra la finestra per salvare il file
            const handleFile = await window.showSaveFilePicker({
                suggestedName: nomeFile,
                types: [{
                    description: 'File di testo',
                    accept: {
                        'text/plain': ['.txt'],
                        'application/json': ['.json'],
                        'text/markdown': ['.md'],
                        'text/csv': ['.csv'],
                        'application/vnd.oasis.opendocument.text': ['.odt']
                    }
                }]
            });
            // Apre un flusso di scrittura sul file
            const scrivibile = await handleFile.createWritable();
            // Scrive il contenuto nel file
            await scrivibile.write(contenuto);
            // Chiude il flusso di scrittura
            await scrivibile.close();
            document.querySelector('#status').textContent = 'File creato con successo.';
            document.querySelector("#status").style.color = 'green';
        } catch (errore) {
            // Gestisce eventuali errori
            document.querySelector('#status').textContent = errore.message || 'Si è verificato un errore.';
            document.querySelector("#status").style.color = 'red';
            console.error(errore);
        }
    });
} else {
    // Mostra messaggio se l'API non è supportata
    document.querySelector('#status').textContent = 'File System Access API non è supportata.';
}
