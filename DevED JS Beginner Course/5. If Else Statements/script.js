const brGodina = prompt("Unesite svoje godine:");

if (brGodina >= 18 && +brGodina <= 40) {
    console.log("Vi ste odrasla osoba")
}

else if (brGodina >= 11 && +brGodina <= 18) {
    console.log("Vi ste Tinejdzer")
}

else if (brGodina >= 40) {
    console.log("Vi ste Zrela Osoba")
}

else {
    console.log("Vi ste Dete")
}


const myAge = 24;

const yourAge = 21;

console.log(myAge + yourAge);


console.log("Hello my name is " + "Mejra")

const name = "Mejra";

console.log("Hello it's me,", name)


const age = prompt('Whats your age?');

if(age => 18){
    console.log("You are good to go!")
} else if(age < 14  ) {
    console.log('Wow, you are really young...why are u even here');
}

else {
    console.log('You arent old enough')
}

const dice1 = 6;
const dice2 = 3;

if(dice1 === 6 && dice2 === 6) {
    console.log("You rolled a double!")
} else {
    console.log("LOL you didnt role a double")
}
