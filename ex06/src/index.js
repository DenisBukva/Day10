var lion = {
    name: "Simba",
    legs: "4",
    tails: "1"
};
function myFunction(a, b){
    
    lion[a] = b;
    return lion;

}
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;