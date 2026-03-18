// promisified version of read-directory
const fs = require("fs")
function readfiledirectory(folder){
    return new Promise(function(resolve,reject){
        fs.readdir(folder,function(err,files){
            if(err){
                reject(err);
            }else{
                resolve(files)
            }
        })
        
    })
}
function callback(files){
    console.log(files)
}
readfiledirectory("./files").then(callback)
// files	root directory (wrong here) --- this i did wrong earlier 
 // ./files	current project folder ✅
// ../files	parent folder/*
