function ShowAttribute() {

    const el = document.querySelector("img");
        const paragraph = document.querySelector("p");
        paragraph.innerText = el.src; // accediamo agli attributi interni dei tag, in questo caso l'attributo src del tag immagine
}

function ChangeAttribute() {

    const el = document.getElementById("changeImg"); // non ci va il # per gli id, basta il nome dato che è unico
        el.src = "https://mimo.app/r/dog.png";

}