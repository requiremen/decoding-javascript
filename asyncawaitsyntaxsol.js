const fs = require("fs");
function cleaningfile(filename){
    return new Promise(function(resolve,reject){
        fs.readFile(filename,"utf-8",function(err,data){
            if(err){
                reject(err);
            }
            else{
                cleandata = data.trim();
                resolve(cleandata);
            }
        })
    })

}

async function main(){
    let content  = await cleaningfile("a.txt");
    console.log("done. cleaning file..."+ content);
    

}
main();
    
