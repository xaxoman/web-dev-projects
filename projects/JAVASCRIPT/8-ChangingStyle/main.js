function changeColor() {

    const el = document.querySelector("#changeMe");
        el.style.backgroundColor = "yellow";
}

function ChangeImage() {

    const img = document.querySelector("img");
        const ImageLink = img.getAttribute("src");
        img.setAttribute("src", "https://mimo.app/r/kittles.png"); // attributo che vogliamo selezionare e il nuovo valore
}

function addBold() {

    const el = document.querySelector("#changeClass");
        el.classList.add("bold"); // con add aggiungriamo un'attributo
}

function removeClass() {

    const el = document.querySelector("#remove");
    el.classList.remove("bold", "italic"); // con add aggiungriamo un'attributo

}

function toggle() {

    const el = document.querySelector("#toggle");
    el.classList.toggle("bold"); // con add aggiungriamo un'attributo

}