/*
- Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// Dati utente
const kmPercorsi = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"))

let costoBiglietto = kmPercorsi * 0.21;
const minoriDiscount = 20;
const over65Discount = 40;
let prezzoScontato;

// Applica sconto per minorenni e over 65
if (eta > 65) {
  prezzoScontato = (kmPercorsi / 100) * (100 - over65Discount);
} else if (eta < 18) {
  prezzoScontato = (kmPercorsi / 100) * (100 - minoriDiscount);
} else {
  prezzoScontato = kmPercorsi; 290
}

// Mostra il prezzo finale all'utente
console.log(`Il costo totale è di ${prezzoScontato.toFixed(2)} €`);