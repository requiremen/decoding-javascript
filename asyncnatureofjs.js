// //calling a function inside a function
// function sum(a, b) {
//     return a + b;
// }

// function sub(a, b) {
//     return a - b;
// }

// function doArithmetic(a, b, fn) {
//     return fn(a, b);
// }


// const value = doArithmetic(1, 2, sum);
// const value1 = doArithmetic(2,3,sub)

// console.log(value1)
// console.log(value);

//now using this concept in asynchronus task
const fs = require("fs")
// using the callback sytax
function filereadkarlena(err,content){
    console.log(content);
}
const content = fs.readFile("a.txt","utf-8",filereadkarlena);
//ab yahan pe callback use hua ki bhai os/kernal ka task hojye toh filereadkarlena wala function call kardena
let sum = 0;
for(let i = 0;i<100000000;i++){
    sum = sum + i;
}
console.log(sum);
// toh ab yahan pe kya ho rha ki hamara thread contextswitching kar raha hai woh os/kernal read file ke task ko chor ke yahan pe loop 
//run karega pehle and then callback ka concept use karke hamne thread ko samjhaya ki bhai udhar chala ja file read hogayi hai 
//kyunki thread utna smart nahin hota node js ka ki woh apne aap samjjh jaye ki usse file ka content bhi execute karn hai
//this is the concept of async nature of js and contextswitching
