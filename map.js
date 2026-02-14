const arr = [1,2,3,4,5];

function transform(i){
    return i*2;
}
const ans = arr.map(transform);
console.log(ans);
// map function lets you iterate over and array and using the callback it can perform task on each of the elements
