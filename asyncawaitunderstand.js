async function main(){
    let contents = await readfilepromise("a.txt", "utf-8"); // here what is hapenning the async function is waiting for the promise
    //to be resolved and then it is storing in the content vairaible for that await syntax is used  to make that promise resolved
    // just like we used the .then() method to resolve promise here we are using the await syntax to resolve the promise and 
    // then we are storing the resolved value in the content variable and then we are printing it
    console.log(contents);
}
main();
