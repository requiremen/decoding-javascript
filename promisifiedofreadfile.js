// implementing fs 
// const fs = require("fs");
// function callback(err,data){
//    console.log(data);
// }


// fs.readFile("a.txt","utf-8",callback);
// lets write thios using promise class
const fs = require("fs");
function readFilePromise(filepath,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(filepath,encoding, function(err,data){
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
       
    })
}
function callback(data){
    console.log(data);
}
function callbackerror(err){
    console.log("bhai error hai"+ ""+err);
}
readFilePromise("a.txt","utf-8").then(callback).catch(callbackerror)
