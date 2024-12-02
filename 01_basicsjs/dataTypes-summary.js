// data types {premitive and non premative datqa types}

// js is dynamic




// (premative (7) : string,  boolen,  Number ,  null, undefined    ,symbol,   bigInt  )



// Referance (non premative : arrays  ,  objects , Functions )


// memory types (stack, Heap),,,,,,,,

// stack (primitive) heap (non primitive  )



let bgmiid = "123456"


let bgmiid1 = bgmiid
bgmiid1 = "654321"

 
console.log(bgmiid1);
console.log(bgmiid);


// heap 

let user1 = {
     email : "sys@gmail.com",
     card  :  "sys@ybl"

}
let user2 = user1

user2.email = "yyy@gmail.com"

console.log(user1.email);
console.log(user2.email);



