/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const searchedChar = `A`;
const filteredNames = [];

// Dichiara la funzione qui.
const filterByInitials = (names, searchedChar) => {
    for(i = 0; i < names.length; i++) {
        const currentName = names[i];
        if(currentName[0] === searchedChar) {
            filteredNames.push(currentName);
        }
    }
    return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterByInitials(names, searchedChar));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]