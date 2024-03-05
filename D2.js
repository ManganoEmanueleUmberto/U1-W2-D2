/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 10
let b = 22
let greaterNumber
if (a > b) {
  greaterNumber = a
} else {
  greaterNumber = b
}
console.log(greaterNumber, " è il numero maggiore")

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let providedNumber = 10
if (providedNumber !== 5) {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (providedNumber % 5 === 0) {
  console.log("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let c = 7
let d = 12
if (c === 8 || d === 8 || c + d === 8 || c - d === 8) {
  console.log("Condizione verificata")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 70

if (totalShoppingCart < 50) {
  totalShoppingCart += 10
  console.log(
    "Non hai diritto alla spedizione gratuita. Al totale del carrello verrano aggiunti 10 euro ",
    totalShoppingCart
  )
} else {
  console.log("Congratulazioni hai diritto alla spedizione gratuita")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let discountedPrice = totalShoppingCart - (totalShoppingCart * 20) / 100

if (discountedPrice < 50) {
  discountedPrice += 10
  console.log(
    "Prezzo Iniziale: ",
    totalShoppingCart,
    "  Il totale dopo lo sconto (+ spedizione di 10 euro) è: ",
    discountedPrice
  )
} else {
  console.log(
    "Prezzo Iniziale: ",
    totalShoppingCart,
    "  Il totale dopo lo sconto è: ",
    discountedPrice
  )
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let number1 = 122
let number2 = 14
let number3 = 10
let firstNumber
let secondNumber
let thirdNumber

if (number1 > number2 && number1 > number3) {
  firstNumber = number1
  if (number2 > number3) {
    secondNumber = number2
    thirdNumber = number3
  } else {
    secondNumber = number3
    thirdNumber = number2
  }
} else if (number2 > number1 && number2 > number3) {
  firstNumber = number2
  if (number1 > number3) {
    secondNumber = number1
    thirdNumber = number3
  } else {
    secondNumber = number3
    thirdNumber = number1
  }
} else {
  firstNumber = number3
  if (number2 > number1) {
    secondNumber = number2
    thirdNumber = number1
  } else {
    secondNumber = number1
    thirdNumber = number2
  }
}

console.log(
  number1,
  " ",
  number2,
  " ",
  number3,
  " in ordine dal piu alto al piu basso: ",
  firstNumber,
  " ",
  secondNumber,
  " ",
  thirdNumber
)

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (typeof providedNumber === "number") {
  console.log("Hai fornito un numero")
} else {
  console.log("Non hai fornito un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (providedNumber % 2 === 0) {
  console.log(providedNumber, " è un numero pari")
} else {
  console.log(providedNumber, " non è un numero pari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7
if (val < 10 && val >= 5) {
  console.log("Meno di 10")
} else if (val < 5) {
  console.log("Meno di 5")
} else {
  console.log("Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

me.city = "Toronto"

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop()

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let array = []
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array[array.length - 1] = 100
console.log(array)
