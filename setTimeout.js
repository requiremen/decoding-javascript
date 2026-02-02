// ek aur async code likhte hai suppose mai chahta hoon ki clock mera cahlle ek alag tthread mai aur jo 1sec tak challe and then usse \
// ek function se call karke ham uske andar ki chixe print karde 
console.log(1);
console.log (2);
// wait for 1 sec
function wait(){
    console.log(1+2);
}
setTimeout(wait,1000);
console.log("dekho mai pehle print hua")
