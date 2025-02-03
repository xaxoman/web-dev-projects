function register() {

    const paragraph = document.querySelector("p");
    // aggiungiamo la funzione "value" in fondo per poter usare questo dato più tardi
        const username = document.getElementById("usernameInput").value; 
        paragraph.innerHTML = username + " ti sei registrato correttamente!";                                  
}