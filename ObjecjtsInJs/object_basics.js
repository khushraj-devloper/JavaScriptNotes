

//objects in java scirpt 

//creating object using object litreals 

let obj={
    name:"Rahul",
    age:23, 

};
//using object constructor to create objects 

let obj2 = new Object();
obj2.name= "Sourav",
obj2.age= 23,
obj2.job= "Developer"

console.log(obj);
console.log(obj2); 
//accesing object propterties
 

// Using Dot Notation
console.log(obj.name);

// Using Bracket Notation
console.log(obj["age"]);
//adding properties to object

obj.color = "Red";
console.log(obj);

delete obj.color;

console.log(obj);



console.log(Object.keys(obj)); 
console.log(Object.values(obj)); 
console.log(Object.entries(obj)); 

