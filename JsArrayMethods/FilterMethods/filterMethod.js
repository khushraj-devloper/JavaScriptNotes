


const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13] 


function isPos(x,idx,arr){

    if(x>0){
      console.log("current value ",x); 
    console.log("index of current value ",idx); 
      console.log("array  is ", arr); 

        return true; 

    }

}
let array2=[1,4,2334,-23,23,-12,53,-1,0]; 


console.log(array.filter(isPos));


