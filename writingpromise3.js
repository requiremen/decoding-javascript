function settimeoutpromise(delay){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()

            
        },delay)
    })
}
function callback(call){
    console.log("callback function called")
}
settimeoutpromise(2000).then(callback)
