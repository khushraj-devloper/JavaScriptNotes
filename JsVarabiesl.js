



var a=2; 
var a=4; 
//re declartion is allowed in  varabiles declared with var value updated
console.log("using var keyword for variable is redecalred and its value is updated a=2 to a=4")
console.log(a); 

if(true){

    var m=45; 
    let n=34;
//variable n is local scope and cannot be used outside the block 


}//variables decalred with  var keyword  

console.log("variable m is global scope and can be used outside the block and upated to m=39")
m=33
//console.log(m); 


if(true){

    if(true){

        m=39

    }
}
console.log(m); 

const b=3; 
//b=5 constant varaible cannot be changed in java script


 
console.log(b); 

let c=34;
console.log("Value of c outside every block"); 

console.log(c); 



if(true){

    let c=98; 
    let p=33;
//block 3rd 
console.log("block third "); 

    if(true){
console.log("varaibles decalred with let keyword can be use inside only in the block where they are declared and the blocks present inside that blocks ")
        console.log(p); 
        p=45; 
        c=100; 
        console.log("p  and c value is updated "); 


    }

    console.log("this c value is of  block 3rd ",c); 
    console.log("this is the value of p inside block 3rd",p); 
    

}



