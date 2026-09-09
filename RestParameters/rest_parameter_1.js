
//The rest parameter (...) allows a function to accept any number of arguments a
// and collect them into a single array, making functions more flexible and dynamic.


//Represented using three dots (...) followed by a parameter name
//Collects multiple arguments into an array
//Must always be the last parameter in a function
function addNum(...numbers){


    let sum=0;  
    console.log(typeof numbers); 
    

    for(let val of numbers){

        sum=sum+val; 

    }

    return sum; 

}

console.log(addNum(1,2,3,4)); 



function addNum2(a,b,...numbers){


    let sum=0; 

    numbers.forEach((x)=>{

        sum=sum+x; 

    })
    return sum; 
    
}