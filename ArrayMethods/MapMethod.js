
//map method in arrays in javascript  
//map method in java script retursn a new array calling a function on each elemetns of array

function sq(x){


    return x*x; 

} 





const  numbers=[1,2,-4,5,6]; 


const sqaures_num=numbers.map(sq); 


for(let i=0;i<numbers.length;i++){

    console.log(sqaures_num[i]); 


}