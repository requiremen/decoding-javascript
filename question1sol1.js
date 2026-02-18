/*
Q: Write a function that

1. Reads the contents of a file
2. Trims the extra space from the left and right
3. Writes it back to the file
*/
// sol 1
const fs = require("fs");
function cleanfile(filename,callback){
     return fs.readFile(filename,"utf-8",function(err,data){
        if(err){
            console.log(err);

        }else{
          callback(data);
        }
    })
   


}
function callback(data){
    let cleaned = data.trim();
    console.log("data is cleaned");
}
