// SINGLETON

// const Tinder_uder = new Object();

// non singleton object 

const tinder_user2 = {}
tinder_user2.id = "123abc"
tinder_user2.name = "pratap"
tinder_user2.loggedin = false



// console.log(Tinder_uder);
// console.log(tinder_user2);

const regular_user = {
      email : "itssps87@gmail.com" ,
      full_name : {
        users_name : {
            first_name : "Pratap",
            last_name : "singh"
        }
      }

}

// console.log(regular_user.full_name.users_name);



//##################  combine 2 objects#################################


// assign operators


const obj1 = {1: "a",2: "b "}
const obj2 = {3: "a",4: "b "}

// const obj3 = {obj1,obj2}
// console.log(obj3);   // both in one onbject
// single object

// const obj3a = Object.assign({},obj1,obj2) //############ it is going in a new empty object
// const obj3b = Object.assign(obj1,obj2) //######################## for obj 1 all onjects going
// console.log(obj3a);
// console.log(obj3b);


//############# spread operators          ###################

const obj3 = {...obj1,...obj2}
// console.log(obj3);

// ###################array of objects ################

// const users = [
//             {
//               id = "1",
//               email = "isdnk@gmail.com"
        
//             } ,
//             {
//               id1= 1,
//               email1= "isdnk@gmail.com"
        
//             } ,
//             {
//               id2 = 1,
//               email2 = "isdnk@gmail.com"
        
//             } 
            


users[1].email

console.log(Object.keys(tinder_user2));
console.log(Object.values(tinder_user2));




