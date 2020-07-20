console.log("Use loops");

//let num=parseInt(window.prompt("Enter any value of num:"));
//console.log(`${num}`);

//if(num>0 && num<100)
//{
    //console.log("Give another input");
//}
//else if(num>100 || num<100){
    //console.log(`Entered number is ${num}`);
//}


//Ternary Operator
let num=window.prompt("Enter any value of num:");

let result= (num>0 && num<100)?'Give another input':
(num>100 || num<100)? `Entered number is ${num}`:
"--";
console.log(result);