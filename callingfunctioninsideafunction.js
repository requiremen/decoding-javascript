//calling a function inside a function
function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function doArithmetic(a, b, fn) {
    return fn(a, b);
}


const value = doArithmetic(1, 2, sum);
const value1 = doArithmetic(2,3,sub)

console.log(value1)
console.log(value);
