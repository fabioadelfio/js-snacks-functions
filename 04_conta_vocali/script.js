/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.
const isVowel = (char) => {
    char = char.toLowerCase();
    return (
        char === `a` ||
        char === `e` ||
        char === `i` ||
        char === `o` ||
        char === `u`
    )
}

const countVowels = (word) => {
    let vowelsNumber = 0;
    for(i = 0; i < word.length; i++) {
        const currentChar = word[i];
        if(isVowel(currentChar)) vowelsNumber += 1;
    }
    return vowelsNumber;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(countVowels(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)