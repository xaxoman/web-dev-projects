const pi = 3.14;

export default pi; // la keyword default permette di esportare un solo valore per modulo

function reminder(param) {
    
    console.log(`Sveglia è ora di ${param}`);
}

// possiamo anche esportare più valori alla volta e con nomi personalizzati
export { pi as pigreco, reminder as sveglia };

