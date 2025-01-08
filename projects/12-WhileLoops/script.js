// aggiorna i valori del minimo e del massimo del range in modo automatico in base all'attributo scritto nel tag html
const slider = document.getElementById("slider");
const min_slider = document.getElementById("min-slider");
min_slider.innerText = slider.min;
const max_slider = document.getElementById("max-slider");
max_slider.innerText = slider.max;


// mostra qual'è il valore dello slider nel tag html h2 ("items per page: x")
var show_elements = document.getElementById("elements");
show_elements.innerText = slider.value;

slider.addEventListener("input", function() {
    show_elements.innerText = this.value;
    updateItems(); // aggiorna la lista di elementi chiamando la funzione ogni volta che il valore dello slider cambia
});


function updateItems() {
    var items = document.getElementById("while-loop-list");
    items.innerHTML = ""; // Clear the existing items

    var i = 1;
    while (i <= parseInt(show_elements.innerText)) {
        var li = document.createElement("li"); // crea una lista di tag li 
        li.innerText = "Elemento " + i;
        items.appendChild(li);
        i++;
    }
}
