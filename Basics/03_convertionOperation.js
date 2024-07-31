let score = "45";
console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));

// "33"     =>  33
// "33qwe"  =>  NaN
// true     => 1 ; 
//false     => 0

let loggedIn = 1;
let booleanVal = Boolean(loggedIn);

console.log(booleanVal);

// 1    => true;
// 0    => false;
// ""   => false;
// "we"  => true

let num = 33;
let str = String(num);
console.log(str);
console.log(typeof str);

//    operations 

let str1 = "hello";
let str2 = " world";

let str3 = str1 + str2;

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(2 + 2 + "1");