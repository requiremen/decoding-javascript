// writing the promisfied version of the fs.readFile function
// writing the promisified version of setTimeout function
// writing the promisified version of fs.writeFile function
// okay first letscatchup with the basic
function readfilepromise(filename,encoding){
    return new Promise();
}
// okay this is an empty promise 
//lets look at how the hell it is called 
const p  = readfilepromise("a.txt","utf-8").then(function(data){
    console.log(data);
    
}).catch(function(err){
    console.log(err);
    
})


// . then method is conatining the callback function which is called when the promise is resolved 
// and the catch method is called when the promise is rejected 
