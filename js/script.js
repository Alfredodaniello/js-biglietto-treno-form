/* Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. */

// Quando l'utente clicca sul bottone dobbiamo leggere i valori delle input
const generateButton = document.querySelector("#generate-button");
generateButton.addEventListener("click", function() {
    const userName = document.querySelector("#user-name").value;
    const distance = parseInt(document.querySelector("#distance").value);
    const userAge = parseInt(document.querySelector("#user-age").value);

    //Calcolo il prezzo del biglietto
let ticketPrice = 0.21 * distance;
if (userAge < 18) {
    ticketPrice = ticketPrice - ticketPrice * 0.20;
} else if (userAge > 65) {
    ticketPrice = ticketPrice - ticketPrice * 0.40;
};
console.log(ticketPrice)
})

