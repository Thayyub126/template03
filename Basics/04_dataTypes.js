// PRIMITIVE DATA TYPES

// 7 TYPES  ---> Number , String , Boolean , Null , Undefined , Symbol , BigInt




// NON- PRIMITIVE (REFERENCE TYPE)

// 3 Types   ---> Array , Object , Functions


/*============================= */

// stack(primitive data types)                Heap(NON-primitive data types)


// stack gives its copy value where as heap gives its reference value

let oneNum = "Hai";
let twoNum = oneNum;
twoNum ="Hello";

console.log(oneNum);
console.log(twoNum);


let user1 ={
    name: "tahyyub",
    no : 1234
}

let user2 = user1;

user2.name= "webhash";


console.log(user1.name);
console.log(user2.name);



