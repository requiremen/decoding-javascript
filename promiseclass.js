// discussing on promise class now 
//first lets see the settimeout async function

// function callback(){
//     console.log("i am the callback called after 5 seconds");

// }
// setTimeout(callback,5000);

//now lets see how can we write the promise vesion of this async function

function setTimeoutPromise(ms){
    const p = new Promise(function(resolve){

        setTimeout(resolve,ms);

    })
    return p;
}
function callback(){
    console.log("i am the callback called after 5 seconds");
}
setTimeoutPromise(5000).then(callback);
