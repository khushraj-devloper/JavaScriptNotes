

//slice methods returns a shallow copy of array from start to end(end is exclusive)

const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]



const beasts = ["ant", "bison", "camel", "duck", "dusonck","bi","camel","camel"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf("bison", 2));//start seraching form index 2nd
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1



