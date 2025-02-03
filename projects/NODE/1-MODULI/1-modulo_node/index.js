const saluta = require("./utils"); // importo la funzione dal file utils come modulo

const nomi = require("./nomi");

 // i dati vengono salvati come oggetti perciò vanno trattati come tali
saluta(nomi.persona1); 
saluta("Anna");
saluta(nomi.persona2);