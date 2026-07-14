// document.getElementById('demo').innerHTML="HI this is javascript"
// window.alert("Welcom in the javascript");
// console.log('hello world');

// let bookPrice = 15;
// let bookPric = 20;

// let output = "the total price of my two books : " + (bookPrice + bookPric) + " Rupes";


// let output = `the total price is : ${bookPrice + bookPric}` //backticks
// console.log(output); 

//  let color = "yellow";

// if( color === "red"){
//     console.log("stop")
// }
// else if(color === "green"){
//     console.log("Go")

// }
// else if( color === "yellow"){
//     console.log ("ready")

// }   

//  let size= "medium"

//  if(size == "small"){
//     console.log('the price is :  50 Rs')
//  }
//  else if (size == "medium"){
//     console.log(' the price is : 100')
//  }
//   else if (size == "larage"){
//     console.log(' the price is : 150')
//  }
//   else if (size == "extra_larage"){
//     console.log(' the price is : 200')
//  }
//  else {
//     console.log('you can not take the popcorn')
//  }

//  let string="waleed"
//   if (( string[0] == "A") && (string.length == 3)){
//     console.log("this is good string");
//   }
//   else {
//     console.log("this is not a good string ")
//   }




  // 1. Take two inputs from the user
// (We use Number() because prompt() always returns inputs as text/strings)
// const firstInput = Number(prompt("Enter the first number:"));
// const secondInput = Number(prompt("Enter the second number:"));

// // 2. Perform an operation (for example, adding them together)
// const sum = firstInput + secondInput;

// // 3. Give the output back to the user
// alert(`The sum of ${firstInput} and ${secondInput} is${sum}`);

// // You can also see it in your console
// console.log(`User inputs: ${firstInput} and ${secondInput}. Output: ${sum}`);


// swwitch statment 



// let color = "red"

// switch(color){
//     case "red" :
//         console.log("stop");
//         break;

//         case "yellow" :
//             console.log("ready");
//             break;

//             case "green" :
//                 console.log("go")

// }


// const Day = Number(prompt("Enter the Day number:"));
// switch(Day){
//     case 1:
//         console.log("Today is monday");
//         break;

//         case 2:
//             console.log("Today is tuesday ");
//             break;
//              case 3:
//             console.log("Today is wensday ");
//             break;
//              case 4:
//             console.log("Today is thursday ");
//             break;
//              case 5:
//             console.log("Today is Friday ");
//             break;
//              case 6:
//             console.log("Today is saturday ");
//             break;
//              case 7:
//             console.log("Today is sunday ");
//             break;
// }



// question 6//

// const num1=prompt("enter any first numbwr");
// const num2=prompt("enter the second number");

// const last_digit1 =num1[num1.length-1];
// const last_digit2 =num2[num2.length-1];


// if(last_digit1 == last_digit2){
//     console.log("the last digit are same ");
// }
// else{
//     console.log("last digit are not sum ");
// }


// select the button 

const button = document.getElementById('btn');
const result = document.getElementById('result');

// when click on button//

button.addEventListener("click",calculateresult);

// function for calcultaing result

function calculateresult(){

    // get values //

    const student_name=document.getElementById("name").value;
    const English=Number(document.getElementById("eng").value);
    const Math=Number(document.getElementById("math").value);
    const Science=Number(document.getElementById("science").value);

    // condition for checking tthat  value putting or not

    if ( 
        student_name ==="" ||
        English === 0   ||
        Math === 0  ||
        Science === 0    

    ){
        result.innerHTML = "<h3>please fill all the feilds </h3>"
        return

    }
    

    //calcualte result 

    const total= English + Math + Science ;
    const percentage = total/3;

    let grade ="";
    if(percentage >= 90){
        grade = "A+";
    }
     else if(percentage >= 80){
        grade = "A";
    }
     else if(percentage >= 70){
        grade = "B";
    }
      else if(percentage >= 60){
        grade = "C";
    }
      else if(percentage >= 50){
        grade = "D";
    }
    else {
        grade="fail";
    }

    result.innerHTML = `
     <h2> Student Result </h2>
     <p> <strong> Name : </strong> ${student_name} </p>
      <p> <strong> English : </strong> ${English} </p>
       <p> <strong> Math: </strong> ${Math} </p>
        <p> <strong> Science : </strong> ${Science} </p>
         <p> <strong> Total : </strong> ${total} /300</p>
          <p> <strong> Percentage : </strong> ${percentage . toFixed(2)}% </p>
           <p> <strong> Grade : </strong> ${grade} </p>

        

    `
    console.log ("Student_Name : ",student_name );
     console.log ("English : ",English );
      console.log ("Math : ",Math );
       console.log ("Science : ",Science );
        console.log ("Total : ",total);
         console.log ("Grade : ",grade);


            

    


}







 





// Corrected line:
// console.log("the total price of my two books : ", bookPrice + bookPric);