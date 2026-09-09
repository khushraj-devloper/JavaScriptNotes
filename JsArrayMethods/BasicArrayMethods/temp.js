






function iss(x,idx,arr){

    if(x>0){

        console.log(x); 
        console.log(idx); 
        console.log(arr); 
        return true; 

    }
}

const num=[-2,1,2,3,4]; 
const x=num.filter(iss); 
console.log(x); 

for(let key of num){

    console.log(key);
    
}

