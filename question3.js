 function SumArray(){
     let array=[1,2,3,4,5];
    let sum=0;
   for(let i = 0;i<=array[i] ; i++){
       sum=sum+array[i];

     }
     return sum;
 }
 let add=SumArray();
console.log(add);
//q2.b

function recursive(){
    let number=[0,1];
    let recurs = 3;
    for(let i=2; i<=number[i] ;i++){
        recurs = recurs* number[i];
    } 
    return recurs; 
}
let answer=recursive();
console.log(answer);

//c.
let word="Uwineza";
console.log(word.reverseString(word));

//d.
// - iteration help when there is a lot of to be processed compare to the recursion

// e.

function SumArray(){
    let array=[1,2,3,4,5];
   let sum=0;
  for(let i = 0;i<=array[i] ; i++){
      sum=sum+array[i];

    }
    return sum;
}
let add2=SumArray();
console.log(add);
   
  
