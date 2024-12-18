// let var const 


//{} this is scope
// let a = 1000
// function (true) {
//     let a = 10
//     const b = 20
//     // var c = 30 it is not requred
//     console.log("inner : ",a);
    

// }


// console.log(a);

function one() {
    const username = "pratap "

        function two() {
            const website = "youtube"
            console.log(username);
            
        }
// console.log(website);

two()



}
 
one()