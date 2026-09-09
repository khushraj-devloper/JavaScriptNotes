let obj1 = { name: "Sourav" };
let obj2 = { age: 23};

let obj3 = { ...obj1, ...obj2 }; //merging the objects using spread operator
console.log(obj3);