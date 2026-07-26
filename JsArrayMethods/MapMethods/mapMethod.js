



//map method in java script array this method will be applied to elemetns of array and return a new array  

//map method example in javascript 

const numbers=[1,2,3,4]; 


function sq(x){

    return x*x; 

}

const sq_nums=numbers.map(sq);

sq_nums.forEach(element=>{

    console.log(element); 

})



//synatx of map method in javascripot 

const result = numbers.map(function(currentValue, idx, array) {

    console.log("Current Value:", currentValue);
    console.log("Index:", idx);
    console.log("Original Array:", array);

    return currentValue + 5;

});

console.log(result);