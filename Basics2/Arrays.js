// Basics



/*
let arr = [1,2,3,"hai", true];

let names= ["ht", "ku","jo"];

let newArr = new Array(
    1,2,3,"hello", true
)
// console.log(newArr);

// Array Methods


arr.push(6);// add element to the array at last
arr.pop()   // remove array last element
arr.unshift(8); // add element at first of the array
arr.shift()    // removes first elememt of the array
console.log(arr);



 */

/*

const marvelHeros = ["strange", "thor", "hulk"];
const dcHeros   = ["superman", "batman", "aquaman"];

// how merge two Arrays

marvelHeros.push(dcHeros);
console.log("push:",marvelHeros);

const allHeros = marvelHeros.concat(dcHeros); // concat returns a new value
console.log("concat:",allHeros);

const allHerosnew = [...marvelHeros, ...dcHeros] // spread operator actualy spread an array into elements
console.log("spread operator:",allHerosnew);


*/




//HOW TO FLAT ARRAY IN ANOTHER ARRAY
const anotherArray = [1,2,3,[4,5],[6,7,[8,9]]];

const flatArray = anotherArray.flat(Infinity);

console.log("Flat_Array :-",flatArray);

console.log(Array.isArray("javascript"));
console.log(Array.from("Typescript"));
console.log(Array.from({name:"css"}));

const scr1 = 100;
const scr2 = 150;
const scr3 = 200;

console.log(Array.of(scr1,scr2,scr3));







