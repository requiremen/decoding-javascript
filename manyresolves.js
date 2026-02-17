let p = new Promise(function(resolve, reject){
    resolve("helllo world");
    resolve("hello world again");
    resolve("hello world again and again");
})
p.then(function(data){
    console.log(data);
})
// proof that promise do not resolves many time 
