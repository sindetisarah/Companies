let name=["Jane","Doe"];
//deriving the firstname and surname
// let[firstName,secondName]=name
// console.log(firstName)
// console.log(secondName)

//Array destructing is to take in object or array and convert them into smaller object or smaller elements for smaller variables
const alphabet=["A","B","C","D","E","F"]
const numbers=["1","2","3","4","5","6"]

//extracting a we will normally
// const a=alphabet[0]
// const b=alphabet[1]
const[a,b]=alphabet
//take the element you want to destruct to the right and the elements you wanna get to the left 
//With the above statement we assign the first and the scond element to the variable a and b

console.log(a)
console.log(b)

//you can also skip some elements by adding a comma
const [g,,c,,d]=alphabet
console.log(g)
console.log(c)
console.log(d)
//getting the rest of the elements we use the spread operator
const[m,,n,...rest]=alphabet
console.log(rest)
//you can aslo combine two different arrays together
//const combinedArray=alphabet.concat(numbers)
//console.log(combinedArray)


//OBJECT DESTRUCTURING
// let person={
//     student:"John",
//     age:23,
//     profession:"FrontEnd Developer "
// }
// //destructing Object Person
// let{student,age,profession}=person
// console.log(student)
// console.log(age)
// console.log(profession)

// const personOne={
//     names:"Sarah",
//     ages:23,
//     address:{
//         city:"Somewhere else",
//         state:"One of There"

//     }
// }
const personTwo={
    namez:"Shadya",
    agez:24,
    favouriteFood:"WaterMelon",

    address:{
        city:"Somewhere else",
        state:"Another one of Them"

    }
}
//when  destructing an object we use the literal notation used to create an object and set the properties you want to destruct

//accesing now the destructed properties
//accessing is actually based on the name of the key representing the property name
// console.log(namez)
// console.log(ages)

//incase you want to change the acess name you can map the property name to a new name
// const{names:firstName}=personOne
// console.log(firstName) 
//object destructuring also allows us to use default values
// const{namez:secondName,agez,favouriteFood="Rice"}=personTwo
// console.log(secondName)
// console.log(agez)
// console.log(favouriteFood)
// //you can aslo use rest here
// const{namez:secondName,...rest}=personTwo
// //rest here will output the rest of the properties
// console.log(rest)