let sum=(a,b,c)=>{
    var add=a+b;
    var product=add*c;
    console.log(product)
}
sum(2,3,4)
// console.log(sum)
console.log("Plant Kunde");
setTimeout(function(){
    console.log("Water Kunde")
},3000)
console.log("Add Fertiliser")
//prints ut a given out at different intervals
setInterval(() => {
    console.log("Hello")
    
},6000);
//They accept another function as an argument
//call backs and set intervals
function greeting(name){
    console.log(`Hello ${name},welcome to Js Class`);

}
function introduction(firstName,lastName,callback){
    const fullName='${firstName}${lastName}'
}
//A promise handle the process of asychronous operation
//they have three states
//Async/Await
//
numbers=[1,2,3,4,5,6,7]
console.log(numbers.filter(number=>number%2==0))

