// the ways for object declarations 

// (litrel,constructor , )
// singletone

//object literals 

const Newsym = Symbol("key1");

const jsUser = {
    name : "pratap",
    full_name : "swa pratap" ,
    [Newsym] : "key1",
    age  : "20",
    location : "vijayawada",
    email: "pratapsingh.connect@gmail.com",
    isLogedIn : "fallse",
    lastLogin : ["monday","saturday"]


}
// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser["full_name"]);

// console.log(jsUser[Newsym]);

// jsUser.email = "pratapsingh.connect65@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "ijvobnd@gmail.com"
// console.log(jsUser["email"]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello user ");

}
jsUser.greeting2 = function(){
    console.log(`hello user ${this.name} `);
    
    
}


console.log(jsUser.greeting());
console.log(jsUser.greeting2());

console.log(`hwllo ${this.name}`); //this is 

console.log(`hello user ${jsUser.name} `); // area 

 