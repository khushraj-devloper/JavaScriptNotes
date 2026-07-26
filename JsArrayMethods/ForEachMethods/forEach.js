

//The forEach() method of Array instances 
// executes a provided function once for each array element.

const arr=[1,2,4,4,5,2]; 

arr.forEach((x)=>{

    console.log(x); 

})
console.log("printing sqaures of each element using arr.forEach(sq)")

function sq(x){

    console.log(x*x); 

}
arr.forEach(sq); 
