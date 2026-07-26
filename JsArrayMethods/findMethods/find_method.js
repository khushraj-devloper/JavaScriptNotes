

//The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. 
//If no values satisfy the testing function, undefined is returned.
let numbers=[-1,-3,-4,-3,34,33,54,34]


function isPos(x,idx,arr){

    if(x>0){
   console.log("current value :",x); 
        console.log("index of current value ",idx); 
        console.log("Array is ",arr); 
      return true

    }

    return false;
}

function is_hundered(x,idx,arr){

    if(x>100){
     

        return true; 

    }
    return false; 

}

const ans=numbers.find(isPos)//returns the first elemtn which is postive in array 
const ans2=numbers.find(is_hundered); 

console.log(ans); 
console.log(ans2);
