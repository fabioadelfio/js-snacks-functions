/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const namesByinitials = [];

// Dichiara la funzione qui.
const namesInitials = (names, namesByinitials) => {
    for(i = 0; i < names.length; i++) {
        const currentName = names[i];
        namesByinitials.push(currentName[0]);
    }
    return namesByinitials;
}


// Invoca la funzione qui e stampa il risultato in console
console.log(namesInitials(names, namesByinitials));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]