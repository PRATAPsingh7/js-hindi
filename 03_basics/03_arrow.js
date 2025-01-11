const user = {
    username : "pratap",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this);
        
    }


}


// user.welcomeMessage()
// user.username = "hello"
// user.welcomeMessage()


console.log(this);
