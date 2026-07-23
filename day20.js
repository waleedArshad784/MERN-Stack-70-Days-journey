// let arr =[1,2,3,4,5];
// let print =  function (el){
//     console.log(el);
// }
// arr.forEach(print);

// let num =[1,2,3,4,5];
// let double = num.map(
//      function (el){

//     return el * el;
// } 
// );


// let nums =[10,20,30,40,46, 60];

// let check = nums.every((el)=>{
//     return  el % 10 == 0 ;
// })
// console.log(check);


// let nums =[10,20,30,40,46, 60];

// let min = nums.reduce((min, el)=>{
//    if (min < el){
//     return min ;

//    }
//    else{
//     return el;
//    }
// }
// )

// console.log(min)


// square and sum and then everage  find 

let arr=[1,2,3,4,4,5];

let square = arr.map ((num) =>{
   return num*num;
})
console.log(square);

let sum= arr.reduce((res,ele) => {
   return res += ele;
})
console.log(sum);

let avg = sum/arr.length;
let avgno=Math.floor(avg);
console.log(avgno);


 let plus = 5;
let newarr= arr.map((Element)=> {
   return Element += plus;

})
console.log(newarr);


let lowerCase = ["one","two","three","four","five"];

let uppCase = lowerCase.map((e)=>{
   return e.toUpperCase();
})
console.log(uppCase);



let newobj = ( (obj1,obj2)=>({...obj1,...obj2})
 
)








