 

//object destructing in java script  

 const obj={

    name:"Rahul", 
    age:34,  
    add:"Mumbai" 
 }

 const {name,age,add}=obj 
 console.log(name,age,add);   
//can be destruct like this  to get values  

 const {name:UserName,age:Userage}=obj; 
 console.log(UserName,Userage); 


const ob2={

   greeting: function(){

      console.log("Hello guys"); 

      return 20; 

   }
}  


const val=ob2.greeting(); 
console.log(val); 
