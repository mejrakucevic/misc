
// FIZZ BUZZ CHALLENGE
// Iteracija se vrsi od 1 do 100(ukljucujuci).
// Ako je dati broj deljiv sa 3 u konzoli se ispisuje FIZZ,
// ako je dati broj deljiv sa 5 u konzoli se ispisuje BUZZ i
// ako je dati broj deljiv i sa 3 i sa 5 u konzoli se ispisuje FIZZ BUZZ.


// for (let i = 1; i <= 100; i++) {
//    if (i % 3 === 0) {
//       console.log("FIZZ");
//    } else if (i % 5 === 0) {
//       console.log("BUZZ");
//    } else if (i % 5 === 0 && i % 3 === 0) {
//       console.log("FIZZ BUZZ");
//    } else {
//       console.log(i);
//    }
// }      

// Neka se izvrsi iteracija od broja 99 do -99.
// Ispisati zbir broja deljivog sa 4 i broja 14.

// for (let i = 99; i>= -99; i--) {
//    if (i % 4 === 0) {
//       console.log(i + 14);
//    }
// }

// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.

// let number1 = Number(prompt("Insert your first number:  "));
// let number2 = Number(prompt("Insert your second number: "));


// if (isNaN(number1) && isNaN(number2) && number1 === number2) {
//    console.log("You didnt insert the correct value. ");
// } else if (number1 < number2) {
//    while (number1 <= number2) {
//          console.log(number1)
//          number1++;
//       } 
//    } else if (number2 < number1) {
//       while(number2 <= number2) {
//          console.log(number2)
//          number2++
//       }
//    }


// Ispisati dvostruku vrijednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

// for (let z = 6; z < 15; z++) {
//    console.log(z * 2);
// }

let suma = 0;

// // for (let i=10; i<=20; i++) {
// //    if (i % 3 !== 0) {
// //       suma+= i;
      
// //    }
//  }
// // console.log(suma);

for (let i=11; i <=20; i+=2) {
      suma+= i;
}

console.log(suma)

