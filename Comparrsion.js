

//== vs === 


let a="3"; 
let b=3; 
//== it automatically converts from one type to another type and check values
 
if(a==3){

    console.log("a=3 which is a string  and b=3 is a numberic value")
}
//=== avoids  conversion type  
if(a===b){

    //this code block will not excute  

}
else{
//this code block will excute as 
    console.log("a is string and b is numeric type"); 

}