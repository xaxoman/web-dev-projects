function publish() {
    // il query selctor prende solo il primo elemento
    const el = document.querySelector("h3");
        el.innerHTML = "Website published";
}

function publishSpecif() {

    // in questo caso prendiamo il paragrafo con la classe prompt
    const el = document.querySelector("p.prompt");
     el.innerHTML = "Website published";
}