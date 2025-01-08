/* esercizio 1

Cos'è map?
La funzione map crea un nuovo array popolato con i risultati della 
chiamata a una funzione fornita su ogni elemento dell'array originale. 
Non modifica l'array originale.

const array_originale = [1, 2, 3, 4, 5];
const quadrato_numeri = array_originale.map(Element => Element * Element);
    console.log(quadrato_numeri);

 */



/* 
esercizio 2 

Cos'è filter?
La funzione filter crea un nuovo array con tutti gli elementi che superano un test 
implementato da una funzione fornita. Anche in questo caso, non modifica l'array originale.


const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numeri_pari = numeri.filter(num => num % 2 === 0);
    console.log(numeri_pari);
*/

/*

esercizio 3


const minuscole = ["apple", "banana", "cherry"];

const maiuscole = minuscole.map(element => element.toUpperCase()); 

console.log(maiuscole);

*/

/* 

esercizio 4



const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 22 }
]

// prendo solo quelli maggiorenni
const maggiorenni = people.filter(persone => persone.age >= 18);
    console.log(maggiorenni);

*/

/*

ESERCIZIO 5

const products_cents = [
    { name: "Shirt", price: 1999 },
    { name: "Pants", price: 2999 },
    { name: "Socks", price: 499 }
];

const products_dollars = products_cents.map(products_cents => ({
    
    name: products_cents.name,
    price: products_cents.price / 100
    

}));

console.log(products_dollars);

*/

/*

ESERCIZIO 6

const words = ["hello", "world", "JavaScript", "is", "awesome"];

// prendo solo quelle che hanno più di 5 caratteri

const FivecharWords = words.filter(newWord => newWord.length > 5);
    console.log(FivecharWords);
*/

/*

ESERCIZIO 7

Task: You have an array of numbers. First, filter out the even numbers, 
and then create a new array where each of those even numbers is squared.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// prima filtro i numeri pari
const filtra_pari = numbers.filter(num => num % 2 === 0);

// poi faccio il qudrato di ogni numero del nuovo array

const pari_elevatiQuadrato = filtra_pari.map(num => num * num );
    console.log(pari_elevatiQuadrato);  

*/

/*

ESERCIZIO 8

Task: You have an array of strings. Filter out the strings that have 
more than 3 characters, and then capitalize the remaining strings.

const parole = ["hi", "hello", "hey", "yo", "JavaScript"];

const MaiuscMaggioreTre = parole
    .filter(parola => parola.length >= 3)
    .map(parola => parola.toUpperCase());

    console.log(MaiuscMaggioreTre);

*/

/*

ESERCIZIO 9

Task: You have an array of objects representing people. 
Filter out those who are 18 years old or younger, and 
then create an array of just their names.

const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 22 }
];


const Adults = people
    .filter(people => people.age >= 18)
    .map(people => ({
        
       name: people.name
    
    }));

    console.log(Adults);
*/ 

/*
    ESERCIZIO 10

    Task: You have an array of products with their prices in cents. 
    Filter out the products that cost more than $20, and then format 
    the remaining products' prices into a string with a dollar sign.

const products = [
    { name: "Shirt", price: 1999 },
    { name: "Pants", price: 2999 },
    { name: "Socks", price: 499 }
];


const greaterTwenty = products
        .filter(product => product.price < 2000)
        .map(product => ({

            name: product.name,
            price: product.price/100 + "$"
        }));

    console.log(greaterTwenty);
*/

/* 
    ESERCIZIO 11

    Task: You have an array of numbers, including negative numbers. 
    Filter out the negative numbers, and then create a new array 
    that contains the square roots of the remaining positive numbers.


const numbers = [-4, 16, -1, 25, 9, -9, 4];

const positiveSquared = numbers
        .filter(numbers => numbers > 0)
        .map(numbers => Math.sqrt(numbers));

        console.log(positiveSquared);

*/

/* ESERCIZIO 12

const numbers = [1, 2, 3, 4, 5];
// In questo esempio, acc inizia a 0 (il valore iniziale) e ad ogni iterazione viene sommato il valore corrente curr
const sum = numbers.reduce((acc, curr) => acc+curr, 0 /* <= l'indice dell'elemento corrente.*///); 
//    console.log(sum);

/* 
    ESERCIZIO 13    
const numbers = [2, 3, 4];
const product = numbers.reduce((acc, curr) => acc*curr);
    console.log(product);
*/

/*
ESERCIZIO 14

const words = ["Hello", " ", "world", "!"];

const phrase = words.reduce((acc, curr) => acc+curr);
    console.log(phrase);
*/

/*
    ESERCIZIO 15        
    
    const numbers = [5, 1, 8, 3, 7];

const max = numbers.reduce((max, num) => num > max ? num : max, numbers[0]);
    // condition ? exprIfTrue : exprIfFalse
    console.log(max);
*/

/* ESERCIZIO 16 

const fruits = ["apple", "banana", "apple", "orange", "apple"];

const target = "apple";
const occurencies = fruits.reduce((acc, fruit) => fruit === target ? acc + 1 : acc, 0);

    console.log(occurencies);
*/

/*

ESERCIZIO 17

const products = [
    { name: "Shirt", price: 1999 },
    { name: "Pants", price: 2999 },
    { name: "Socks", price: 499 }
];
 
const new_products = products
            .filter(product => product.price < 2000)
            .map(product => product.price /100)
            .reduce((acc, price) => acc+price, 0);

            console.log(new_products);

*/

/*
 ESERCIZIO 18

 const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 16 },
    { name: "David", age: 22 }
];

const newGroup = people
                .filter(people => people.age >= 18) //attento all sotto.proprietà ! .age .name etc...
                .map(person => person.age)
                .reduce((acc, age, _, arr) => acc+age / arr.length, 0);
console.log(newGroup);

*/

/*
    ESERCIZIO 19

    const words = ["hello", "world", "JS", "is", "awesome"];

    const words_lenght = words
                        .filter(word => word.length >= 4)
                        .map(word => word.length)
                        .reduce((acc, word) => acc+word, 0);
    console.log(words_lenght);

*/

/*
 ESERCIZIO 20 
 
  const students = [
    { name: "Alice", grade: 48 },
    { name: "Bob", grade: 78 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 62 }
];

const students_Filtered = students
                        .filter(student => student.grade >= 50)
                        .map(student => student.grade)
                        .reduce((acc, grade, _, arr) => acc+grade / arr.length, 0);
console.log(students_Filtered);
 
 */

/*
    ESERCIZIO 21    

    const employees = [
    { name: "Alice", salary: 45000 },
    { name: "Bob", salary: 75000 },
    { name: "Charlie", salary: 120000 },
    { name: "David", salary: 50000 }
];


const new_employee_list = employees
                            .filter(employee => employee.salary >= 50000)
                            .map(employee => employee.salary/1000 )
                            .reduce((acc, salary) => acc+salary, 0);
console.log(new_employee_list + "$");

*/










            


