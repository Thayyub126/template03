
let myData = new Date();
console.log(myData);
console.log(typeof myData);

console.log(myData.toString());
console.log(myData.toDateString());
console.log(myData.toLocaleString());
console.log(myData.toLocaleDateString());
console.log(myData.toLocaleTimeString());

let newDate = new Date(2024,0,12);
console.log(newDate.toLocaleDateString());

let present = Date.now();
console.log(present);// it wiil be getting in millisec from 1970 jan
