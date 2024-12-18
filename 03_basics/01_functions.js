
// function myName (){
//     console.log("p");
//     console.log("r");
// console.log("a");
// console.log("t");
// console.log("a");
// console.log("p");

// }


// function addNumbers (number1,number2){
//     number1+number2
//     console.log(number1+number2);
    

// }

// addNumbers(8,9)
// addNumbers(8,"a")
// addNumbers(8,"3")
// addNumbers(8,null)

// const result = addNumbers(1,5)
// console.log(result);



function addNumbers (number1,number2){
   let result = number1+number2
   console.log(number1+number2);
   return result
   console.log(result);
   

}
const result = addNumbers(1,5)
console.log(result);




function addkarna (a,b){

    return a + b
}


console.log(addkarna(1,1));


//  ~~~~~~~~~~~~~~

function loginUserMessage(username) {
    if( username === undefined){
        console.log("please enter a name ");
        return
    }
    return `${username} just logged in`
    
}
console.log (loginUserMessage());





function kaiseHO(person) {

    return `${person} acha hai`
    
}

console.log(kaiseHO("pratap"));
