const button=document.getElementById('btn');

button.addEventListener('click', showwelcom);








function showwelcom(){
    const message = document.getElementById("message");
     const error = document.getElementById("error");

    //get value

    const name=document.getElementById('name').value;
     const Email=document.getElementById('email').value;
      const pasword=document.getElementById('password').value;
       const phone=document.getElementById('number').value;



    if(name == "" ||

        Email=="" ||
        pasword== ""||
        phone == 0 


    ){

        error.innerHTML="Pleased filled all the required feilds"
       

    }
    else
    message.innerHTML="Welcome! you filled all the require information"


    

    
    
}



// price calculation feature 



// const button= document.getElementById('btn');
// button.addEventListener('click', showTotal);

//  function showTotal(){
//      const price = Number(document.getElementById('price').value);
// const tax = Number(document.getElementById('tax').value);
// const value = calculateTotal(price,tax)
// const result =document.getElementById('result');
// result.innerHTML ="Total price of product is: "+ value;


//  }

//    function calculateTotal(price,tax){
   
//      const total= price +(price * tax /100);
    
//     return total;
// }











