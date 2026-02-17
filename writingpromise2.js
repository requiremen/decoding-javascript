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
