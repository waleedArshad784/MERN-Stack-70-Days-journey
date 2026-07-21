


const Button1= document.getElementById("btn1");
const Button2 = document.getElementById("btn2");

const question = document.getElementById("Qs");
const Button3 = document.getElementById("btn3");


const result = document.getElementById("Result");


Button1.addEventListener('click', randomnumber);
Button2.addEventListener('click',checkNumber);
Button3.addEventListener('click',quite);

 let random;


  function randomnumber(){
    const max = Number(document.getElementById("input").value);
    random =  Math.floor( Math.random() * max) +1 ;
   
    return  random;
 };




  function quite(){

    result.innerHTML = "Game Ended.";

}

      function checkNumber(){

    const guess = Number(document.getElementById("guss-no").value);

    if(guess === random){

        result.style.color ="white";
        result.style.border = "1px solid black";
        result.style.padding = "20px";
        result.style.borderRadius = "10px";
        result.style.backgroundColor = "blue";
        result.style.font = "bold";
        result.style.fontWeight = "bold";

        

        result.innerHTML = `You Win! Random Number was :  ${random}`;

      


    }
    else if(guess < random){

        question.innerHTML = "Your Guess was Too Small. Try Again.";

    }
    else{

        question.innerHTML = "Your Guess was Too Large. Try Again.";

    }


}




