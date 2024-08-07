//Singleton

Object.create

//object literals

const mySym = Symbol("key1")

const user = {
    name : "Thayyub",
    gender : "male",
    email : "shaik@gmail.com",
    isLoggeedIn : true,
    age : 18,
   [ mySym ]: "key2"
}

console.log(user.age);
console.log(user["name"]);
console.log(user[mySym]);
console.log(user);


// Object.freeze(user)  // we cant change the object

user.email = "gogle.com";

// console.log(user);


user.greeting = function(){
    console.log("hello js");
    
}

user.greetingTwo = function(){
    console.log(`hello ${this.name}`); // this refers to the same object references   
} 

console.log(user.greeting());
console.log(user.greetingTwo());

