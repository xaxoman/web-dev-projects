const editor = document.getElementById('editor'); // Editor di testo
const apri = document.getElementById('open'); // Bottone per aprire file
const salva = document.getElementById('save'); // Bottone per salvare file
const file = document.getElementById('file'); // Input file nascosto

// Quando si clicca sul bottone "apri", si attiva l'input file
apri.addEventListener('click', () => {
    file.click();
});

// Quando si seleziona un file, viene letto e il contenuto viene inserito nell'editor
file.addEventListener('change', () => {
    const lettore = new FileReader();
    lettore.onload = () => {
        editor.innerText = lettore.result;
    };
    lettore.readAsText(file.files[0]);
});

// Quando si clicca sul bottone "salva", il contenuto dell'editor viene salvato in un file
salva.addEventListener('click', () => {
    const blob = new Blob([editor.innerText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.txt';
    a.click();
    URL.revokeObjectURL(url);
});

editor.focus(); // Mette a fuoco l'editor

// Imposta il separatore di paragrafo predefinito a 'p'
document.execCommand('defaultParagraphSeparator', false, 'p');

// Gestisce l'evento di incolla per inserire solo testo semplice
editor.addEventListener('paste', (e) => {
    e.preventDefault();
    const testo = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, testo);
});