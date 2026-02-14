// this is the basic way of filtttering of odd numbers from array
const arr = [1,2,3,4,5];

const newarr =[];
for(let i = 0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        newarr.push(arr[i]);
    }
}
console.log(newarr);

//filltering 
const arr = [1,2,3,4,5];

const ans = arr.filter(function(n){
    if(n%2==0){
        return true;
    }
    else {
        return false;
    }
})
console.log(ans);

