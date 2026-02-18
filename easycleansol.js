function callback(err,data){
    if(data){
       data.trim();
       console.log("data is trimmed successfully" );
    }
}

fs.readFile("a.txt","utf-8",callback);
