/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) 

*/

var euroPerChilometro = 0.21;

var Chilometri = parseInt(prompt("Inserisci i chilometri che vuoi percorrere"));

var eta = parseInt(prompt("Inserisci la tua età"));

console.log(Chilometri + " km");
console.log(eta + " anni");

var prezzo = euroPerChilometro * Chilometri;



var prezzoScontato20 = prezzo * 0.8;

var prezzoScontato40 = prezzo * 0.6;


if (eta < 18)
{
    console.log(prezzoScontato20 + " " + "euro");
}
else if (eta > 65)
{
    console.log(prezzoScontato40 + " " + "euro");
}
else
{
    console.log(prezzo + " " + "euro");
}
