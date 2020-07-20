console.log("Javascript Calculator");


let choice= (window.prompt("Enter your choice:"));
console.log(` Enter your choice ${choice}`); 

let x = parseInt(window.prompt("Enter the value of x:"));
console.log(Number(x));
let y=parseInt(window.prompt("Enter the value of y:"));
console.log(Number(y));



if(choice==1){
    let z=x+y;
    console.log(` Addition is ${z}`);
    
}
else if(choice==2){
    let z=x-y;
    console.log(`Subtarction is ${z}`);
   
}
else if(choice==3){
    let z=x*y;
    console.log(`Multiplication is${z}`);
    
}
else if(choice==4){
    let z=x/y;
    console.log(`Division is ${z}`);
   
}
else if(choice==5){
    Math.sqrt(x);
    Math.sqrt(y);
}


