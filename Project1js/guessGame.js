console.log("Guess the Number Game in JavaScript");

const name = prompt("Enter your name:");
console.log("Welcome", name);
//guess number game using java script and html 

// Random number between min and max (inclusive)
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate first random number
let ans = rand(1, 6);
console.log("Random Number:", ans);

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function () {

    if (ans === 1) {
        console.log("Your guess was correct!");

        ans = rand(1, 6);
      
    }
    else {
        console.log("Your guess was wrong.");
        console.log("Correct Number was:", ans);

        // Generate a new random number
        ans = rand(1, 6);
        
    }

});

btn2.addEventListener("click",function(){
    
    if(ans==2){

        console.log("Your Guess Was Correct!"); 

    }
    else{
        console.log("Your guess Was Wrong "); 
        ans=rand(1,6); 

    }
})  


btn3.addEventListener("click",function(){
    
    if(ans==3){

        console.log("Your Guess Was Correct!"); 

    }
    else{
        console.log("Your guess Was Wrong "); 
        ans=rand(1,6); 

    }
})



btn4.addEventListener("click",function(){
    
    if(ans==4){

        console.log("Your Guess Was Correct!"); 

    }
    else{
        console.log("Your guess Was Wrong "); 
        ans=rand(1,6); 

    }
})


btn5.addEventListener("click",function(){
    
    if(ans==5){

        console.log("Your Guess Was Correct!"); 

    }
    else{
        console.log("Your guess Was Wrong "); 
        ans=rand(1,6); 

    }
})


btn6.addEventListener("click",function(){
    
    if(ans==6){

        console.log("Your Guess Was Correct!"); 

    }
    else{
        console.log("Your guess Was Wrong "); 
        ans=rand(1,6); 

    }
})