const fs = require("fs");
const content = fs.readFileSync("a.txt","utf-8");
console.log(content)
//this is basically a i/o heavy task which means that that reading file from the a.txt depend on the os/kernal of the system 
//by that time the thread is sitting idle there and then logiing the content when the os read the file 
//this is basically doing a async task syncronously
//next we will understand whats contexswitching bw the tasks like leave the water to boil and check the laudary 
//most imp the loops the while loops and logging is the part played by cpu not the os/kernal
