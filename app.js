

function kgToGrams () {
    kg = +prompt("Unesite KG")
    return `Broj grama za unete kilograme iznosi ${kg * 1000}`
}

console.log(kgToGrams(4));