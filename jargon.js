console.log("1 script runs")
setTimeout(function(){
    console.log(("2 setTimeout runs"))
},0)

function emptyPromise(){
    return new Promise(function(resolve,reject){
        resolve()
    })
}

Promise.resolve().then(emptyPromise).then(function(){
    console.log("3 promise runs")
})
console.log("4 script ends")
