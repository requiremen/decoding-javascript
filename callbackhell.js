// lets have discussing aboout callback hell
setTimeout(function(){
    console.log("hi there")
    setTimeout(function(){
        console.log("welcome to callback hell")
        setTimeout(function(){
            console.log("lets get started")
        },3000)
    },2000)
},1000)
// this is how call back hell looks like 
