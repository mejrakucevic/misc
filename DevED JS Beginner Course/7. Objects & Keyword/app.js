const user = {
    name : 'Mejra',
    age : 17,
    purchases: ['Dog', "Car", "RTX 3090"],


    sayName: function() {
        console.log(this.name);
    }
} ;

user.sayName();

function saymyAge() {
    console.log('My age is',  user.age);
}

saymyAge();

// console.log(user.purchases);



// console.log(this) opens windows vid with a bunch of functions

