function displayItem() {

    const el = document.getElementsByTagName("li");
     const div = document.querySelector("div");
        div.innerHTML = el.length;
}

function displayContent() {

    const el = document.getElementsByTagName("li");
        const p = document.querySelector("p");
            p.innerText = el[0].innerHTML; // il primo elemento della lista "tag li"
}