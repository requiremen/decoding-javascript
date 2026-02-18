const fs = require("fs");
function cleaningfile(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,"utf-8",function(err,data){
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
    cleandata = data.trim();
    console.log("hey your data is cleaned up");

}
cleaningfile("a.txt").then(callback)
    
