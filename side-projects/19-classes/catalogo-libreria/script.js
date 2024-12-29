// Ottieni i riferimenti agli elementi del DOM
const modal = document.getElementById("modal-content"); // Popup per aggiungere un libro
const modal_ricerca = document.getElementById("modal-ricerca");
const aggiungi_libro = document.getElementById("AggiungiLibro"); // Bottone per aprire il popup
const mostra_ricerca = document.getElementById("MostraRicerca"); // bottone per aprire il popup di ricerca
const chiudi_modal_elements = document.querySelectorAll(".close-modal"); // Bottone per chiudere il popup

// Input fields per inserire i dettagli del libro
const titolo_INPUT = document.getElementById("titolo");
const autore_INPUT = document.getElementById("autore");
const genere_INPUT = document.getElementById("genere");
const anno_INPUT = document.getElementById("anno");
const copertina_INPUT = document.getElementById("img");

// Classe che rappresenta un libro
class Libro {
    constructor(titolo, autore, genere, anno, img) {
        this.titolo = titolo; // Titolo del libro
        this.autore = autore; // Autore del libro
        this.genere = genere; // Genere del libro
        this.anno = anno; // Anno di pubblicazione
        this.img = img; // URL dell'immagine di copertina
    }

    // Metodo per creare e visualizzare un libro nell'interfaccia utente
    creaLibro(param_libro = this) {
        // Estrai i dettagli del libro dall'oggetto passato come parametro
        const { titolo, autore, genere, anno, img } = param_libro;

        // Crea un wrapper per i dettagli del libro
        const libro_wrapper = document.createElement('div');
        libro_wrapper.classList.add('container_libro');

        // Crea gli elementi HTML per i dettagli del libro
        const genere_HTML = document.createElement('h4');
        genere_HTML.textContent = genere;

        const anno_HTML = document.createElement('h5');
        anno_HTML.textContent = anno;

        const autore_HTML = document.createElement('h3');
        autore_HTML.textContent = autore;

        const titolo_HTML = document.createElement('h2');
        titolo_HTML.textContent = titolo;

        const img_HTML = document.createElement('img');
        img_HTML.src = img;

        // Aggiungi i dettagli del libro al wrapper
        libro_wrapper.appendChild(anno_HTML);
        libro_wrapper.appendChild(genere_HTML);
        libro_wrapper.appendChild(autore_HTML);
        libro_wrapper.appendChild(titolo_HTML);
        libro_wrapper.appendChild(img_HTML);

        // Aggiungi il wrapper alla sezione "catalogo" nell'interfaccia
        const catalogo = document.querySelector('.catalogo_wrapper');
        catalogo.appendChild(libro_wrapper);
    }

    // Metodo per salvare un libro in localStorage
    salvaLibro() {
        // Converte i dettagli del libro in un oggetto JSON
        const libro_json = {
            titolo: this.titolo,
            autore: this.autore,
            genere: this.genere,
            anno: this.anno,
            copertina: this.img,
        };

        // Recupera l'elenco dei libri già salvati oppure crea un array vuoto
        let books = JSON.parse(localStorage.getItem("books")) || [];

        // Aggiungi il nuovo libro all'elenco
        books.push(libro_json);

        // Salva l'elenco aggiornato in localStorage
        localStorage.setItem("books", JSON.stringify(books));
    }
}

// Funzione per caricare e visualizzare i libri salvati in localStorage
function loadSavedBooks() {
    // Recupera l'elenco dei libri da localStorage oppure crea un array vuoto
    const books = JSON.parse(localStorage.getItem("books")) || [];

    // Per ogni libro salvato, crea un'istanza della classe "Libro" e visualizzalo
    books.forEach(book => {
        const savedLibro = new Libro(
            book.titolo,
            book.autore,
            book.genere,
            book.anno,
            book.copertina
        );
        savedLibro.creaLibro(savedLibro);
    });
}

// Funzione per aggiungere un nuovo libro
function AddBook() {
    // Crea un'istanza della classe "Libro" con i dati inseriti dall'utente
    const libro = new Libro(titolo_INPUT.value, autore_INPUT.value, genere_INPUT.value, anno_INPUT.value, copertina_INPUT.value);
    console.log(libro);

    // Salva il libro in localStorage
    libro.salvaLibro();

    // Visualizza il libro nell'interfaccia
    libro.creaLibro();
}

// Carica i libri salvati quando la pagina viene caricata
window.onload = loadSavedBooks;

//funzione per cercare un libro in base ai dati del libro (titolo, autore, genere, anno)
function CercaLibro() {
    

}

// Mostra il popup per aggiungere un nuovo libro
aggiungi_libro.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// mostra popuo ricerca
mostra_ricerca.addEventListener('click', () => {
    modal_ricerca.style.display = "flex";
});

// Nascondi il popup quando si clicca sulla "X"
// Uso il foreach per non creare un elemento (Icona X per chiudere) 
// differente per ogni modal dato che con gli ID non funzione uso una normale classe
chiudi_modal_elements.forEach(element => {
    element.addEventListener('click', () => {
        modal.style.display = 'none';
        modal_ricerca.style.display = 'none';
    });
});
