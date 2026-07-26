


//type coercion in java script 



let c="5"+2; //outputis 52 and c is string type  varabile

console.log(c,typeof c);   
let m="6"+true;
console.log(m,typeof m);  //output is 6true and a string type

//numeric type coercion 


let p="10"/"2"; 
console.log(p,typeof p); 
let q="10"-2; 
console.log(q,typeof q); 
let n="10"-"2"; 

console.log(n,typeof n); 
let u="5"*2;// it will resutl a number   type 
let mul="5" * "6" ;//it will result a number type
let mul2="5"*6; // it will result a number type 

console.log(mul,typeof mul); 
console.log(mul2,typeof mul2); 


// if empty string is passed in boolean() then give false 
// if 1 or any other intger pass give true 
//if 0 is passed in boolean give false 


console.log(Boolean("hello wrold")); //true
console.log(Boolean(""));//false 
console.log(Boolean("0"));//true

console.log(Boolean(1)); //true
console.log(Boolean(34));//true 

console.log(Boolean(0)); //false





