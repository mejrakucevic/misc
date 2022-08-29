// FIZZ BUZZ CHALLENGE

// iteracija se vrsi od 0 do 100.
// Ispisujemo FIZZ ako je broj deljiv sa 3
// Ispisujemo BUZZ ako je broj deljiv sa 5
// Ispisujemo FIZZ BUZZ ako je broj deljiv i sa 3 i sa 5
// 0
// 1
// 2
// FIZZ
// 4
// BUZZ
// FIZZ


let i = prompt("Type a number from 0 to 100")

for (let i = 1; i <= 100; i++ ) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ");
    } else if (i % 3 === 0) {
        console.log('FIZZ');  }
    else if (i % 5 === 0){ 
        console.log('BUZZ')
        }
        else {
            console.log(i)
        }
        
    }