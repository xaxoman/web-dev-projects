const modal = document.getElementById("modal-content");
const aggiungi_libro = document.getElementById("AggiungiLibro");
const chiudi_modal = document.getElementById("close-modal");

// DATI IN INPUT
const titolo_INPUT = document.getElementById("titolo");
const autore_INPUT = document.getElementById("autore");
const genere_INPUT = document.getElementById("genere");
const anno_INPUT = document.getElementById("anno");
const copertina_INPUT = document.getElementById("img");

// Mostra il popup in cui andranno inserite le informazioni del libro, poi salva questa info in LocalStorage.
// successivamente i dati all'interno della LocalStorage varranno utilizzati per creare il catalogo dei libri nell'interfaccia
function AddBook() {

    // classe generale per i libri
    class Libro {
        constructor(titolo, autore, genere, anno, img) {

            this.titolo = titolo;
            this.autore = autore;
            this.genere = genere;
            this.anno = anno;
            this.img = img;
            
        }

        creaLibro() {

            // creo il wrapper per ogni libro
            const libro_wrapper = document.createElement('div');
            libro_wrapper.classList.add('container_libro');
            document.body.appendChild(libro_wrapper);

            // Creo gli elementi HTML per il libro

            const anno_HTML = document.createElement('h5');
            anno_HTML.textContent = this.anno;
            document.body.appendChild(anno_HTML);

            const genere_HTML = document.createElement('h4');
            genere_HTML.textContent = this.genere;
            document.body.appendChild(genere_HTML);

            const autore_HTML = document.createElement('h3');
            autore_HTML.textContent = this.autore;
            document.body.appendChild(autore_HTML);

            const titolo_HTML = document.createElement('h2');
            titolo_HTML.textContent = this.titolo;
            document.body.appendChild(titolo_HTML);

            const img_HTML = document.createElement('img');
            img_HTML.src = this.img;
            document.body.appendChild(img_HTML);

            // Aggiungo gli elementi HTML al wrapper
            libro_wrapper.appendChild(genere_HTML);
            libro_wrapper.appendChild(anno_HTML);
            libro_wrapper.appendChild(autore_HTML);
            libro_wrapper.appendChild(titolo_HTML);
            libro_wrapper.appendChild(img_HTML);

            // metto il wrapper dentro il catalogo
            const catalogo = document.querySelector('.catalogo_wrapper');
            catalogo.classList.add('catalogo_wrapper');
            catalogo.appendChild(libro_wrapper);
            

        }
    }

    // Creiamo un nuovo oggetto con i dati inseriti dall'utente
    // IL .value VA MESSO DIRETTAMENTE QUANDO SI SALVA L'OGGETTO NELLA CLASSE E NON QUANDO SI DICHIARA LA VARIABILE
    const libro = new Libro(titolo_INPUT.value, autore_INPUT.value, genere_INPUT.value, anno_INPUT.value, copertina_INPUT.value);
    // chiamo il metodo per creare il libro
    libro.creaLibro();
    console.log(libro);

   
}

    // Mostra il popup con eventListener
    aggiungi_libro.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
    
    // chiudi il popup quando clicchi la x
    chiudi_modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });