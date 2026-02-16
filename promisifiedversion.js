function settimoutpromise(ms){
    return new Promise(function(resolve,reject){
        if(ms<0){
            reject("invalid time")
        }else{
        setTimeout(resolve,ms)
        }
    })
}
settimoutpromise(1000)
.then(function(){
    console.log("hi there")
    return settimoutpromise(2000)      
}).then(function(){
    console.log("welcome to callback hell")
    return settimoutpromise(3000)
}).then(function(){
    console.log("lets get started")
}).catch(function(err){
    console.log(err)
}) 


