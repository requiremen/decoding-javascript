const fs = require("fs");
function readfilepromise(filename,encoding){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,encoding,function(err,data){
            if(err){
                reject(err);

            }else{
                resolve(data);
            }
        })
        
    })
}
async function main(){
    let contents = await readfilepromise("a.txt", "utf-8");
    console.log(contents);
}
main();
