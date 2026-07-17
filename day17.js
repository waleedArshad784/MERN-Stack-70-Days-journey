
// const cart=[];

//     const button1 = document.getElementById('btn1');
//     const button2 = document.getElementById('btn2');
   

    

   

//      button1 . addEventListener('click', addproduct);

//      button2 . addEventListener('click', removevalue);

//     const message = document.getElementById('result');






//     function addproduct(){
//          const newproduct = document.getElementById('product').value;
//         cart.push(newproduct);
//         message.innerHTML=" The new product  :  " + newproduct +" is added";


//     }


//     function removevalue(){
//      const remove=cart.pop();
//     message .innerHTML = "the  product :  "+ remove + "is remove";

//     }  


// 1. Create an empty array to store the shopping cart items
let shoppingCart = [];

const productInput = document.getElementById('product'); // Your input field
const addBtn = document.getElementById('btn1');             // Your "Add" button
const removeBtn = document.getElementById('btn2');       // Your "Remove" button
const displayArea = document.getElementById('result');   // Where you show the list

// 2. Function to update the display
function updateDisplay() {
    if (shoppingCart.length === 0) {
        displayArea.innerHTML = "Your cart is empty.";
        return;
    }
    
    // Join all items in the array with a comma or turn them into a list
    displayArea.innerHTML = `<strong>Your Cart  : </strong> ${shoppingCart.join(' ,  ')}`;
}

// 3. Add Product Event
addBtn.addEventListener('click', () => {
    const newProduct = productInput.value.trim();
    
    if (newProduct !== "") {
        shoppingCart.push(newProduct); // Add the new item to our array
        productInput.value = "";       // Clear the input field
        updateDisplay();               // Refresh the screen
    }
});

// 4. Remove Last Product Event
removeBtn.addEventListener('click', () => {
    shoppingCart.pop(); // Remove the last item from the array
    updateDisplay();    // Refresh the screen
});

 



