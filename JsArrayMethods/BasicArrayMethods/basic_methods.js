


//some basic methods of array in javascript  


const numbers=[1,2,4,4] 

const count=numbers.push(1,2,3); // add three elemtns and return the lenght of array 


console.log(count); 
console.log(numbers); 


// pop method remove elemetn from last of array and return that element value  

let elemet_removed=numbers.pop(); 

console.log("Element removed is ",elemet_removed); 
console.log("Updated array  ")
console.log(numbers); 


let first_element=numbers.shift(); //removes first element from array and retursn remved elemnt

console.log(first_element); 
console.log(numbers);



const array = [1, 2, 3];

console.log(array.includes(2));
// Expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// Expected output: true

console.log(pets.includes("at"));
// Expected output: false

