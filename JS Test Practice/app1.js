//ispisi sve brojeve od 1 do 10

for (let i = 1; i <= 10; i++){
    console.log(i);
}

//sve parnee od 25 do 32

for (let i=25; i <= 32; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//sve neparne od 1 do 10
for (let i= 1; i <= 10; i++) {
    if (i % 3 !== 0) {
        console.log(i);
    }
}

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Ispisuju se brojevi od manjeg ka vecem.

let broj1 = Number(prompt("Unesite prvi broj: "));
let broj2 = Number(prompt("Unesite drugi broj: "));

if (isNaN(broj1) || isNaN(broj2)) {
    console.log("Niste uneli korektnu vrednost. ");
} else if (broj1 === broj2) {
    console.log("Brojevi ne mogu biti isti. ");
} else if (broj1 < broj2) {
    while(broj1 <= broj2) {
        console.log(broj1)
        broj1++; }
    } else if  (broj2 < broj1) {
        while(broj2 <= broj1) {
            console.log(broj2)
            broj2++;
        }
}



//1 Traziti od korisnika da unese neki broj. Na osnovu te vrednosti izvrsiti ispis
// kvadrata brojeva od 1 do tog unetog broja:

//2 Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.
// Iteracija se vrsi od 3 do 17.

// Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n.

// 3.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, ljegov kvadrat i vrednost broja umanjenu za 25.

//4Ispisati novu recenicu gde ce svaka rec zavrsavati velikim slovom.

//5 Korisnik unosi dva realna broja x i y.Napisati program koji izracunava i stampa
//kolicnik x/y,ako je broj y razlicit od nule,
//a inace ispisuje poruku:Deljenje je nemoguce.