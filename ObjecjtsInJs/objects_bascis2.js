

let obj={
    name:"ks", 
    age:23, 
    roll:1 
}
//for each loop in objects to prints its proerpties 

for(let key in obj){

    console.log(typeof key);
    console.log(key+" "+obj[key]) 
}


//to get all keys 
console.log(Object.keys(obj)); //gives array object  type 
//output  ['name' ,'age', 'roll']

console.log(Object.values(obj));  
//ouput ['ks','23',1]    


console.log(Object.entries(obj)); 
//[ [ 'name', 'ks' ], [ 'age', 23 ], [ 'roll', 1 ] ]

Object.keys(obj).forEach((x)=>{

    console.log(x);

})


Object.values(obj).forEach((x)=>{

    console.log(x); 

})   
