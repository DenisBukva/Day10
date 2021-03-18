var myPet = {
    species:"Pit bull",
    name: "John",
    legs: 4,
    friends: ['Rex', 'Axa'],
    
}
function myFunction(myobj) {
    return myobj;
}
console.log(myFunction(myPet));
module.exports = {myPet, myFunction};