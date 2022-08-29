// const text = document.querySelector('.title');
// const button = document.querySelector('.buttonn');

// // text.style.color = "red";

// text.classList.add('change');

// // button.addEventListener('click', function(){
// //     text.classList.toggle('change');
// // })

const abcList = document.querySelector('.abeceda');
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
    // create an li out of thin air

    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);
    // add the input value inside that new li
    newLi.appendChild(liContent);
    // attaching the li to the user list
    abcList.appendChild(newLi);

});



// console.log(abcList);

// for(abc of abcList){
//     abc.addEventListener('click', function(){
//         this.style.color = "red";
//     });
// }
