/* 

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)

va applicato uno sconto del 20% per i minorenni

va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo) 

*/

var euroPerChilometro = 0.21;

var chilometri = parseInt(prompt("Inserisci i chilometri che vuoi percorrere"));

var eta = parseInt(prompt("Inserisci la tua età"));

document.getElementById("chilometri").innerHTML = ("Chilometri da percorrere:" + " " + chilometri + " " + "km");
document.getElementById("eta").innerHTML = (eta + " anni");

var prezzo = euroPerChilometro * chilometri;

if (eta < 18)
{
    document.getElementById("prezzo").innerHTML = ("Il costo del tuo biglietto sarà di" + " " + (prezzo * 0.8).toFixed(2) + " " + "€");
}
else if (eta > 65)
{
    document.getElementById("prezzo").innerHTML = ("Il costo del tuo biglietto sarà di" + " " + (prezzo * 0.6).toFixed(2) + " " + "€");
}
else
{
    document.getElementById("prezzo").innerHTML = "Il costo del tuo biglietto sarà di" + " " +  (prezzo.toFixed(2) + " " + "€");
}

