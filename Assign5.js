console.log("Sales during year");


let sales1=parseInt(window.prompt("Enter 0-5000 sales1:%"));
console.log(Number(sales1));
let sales2=parseInt(window.prompt("Enter 5001-10000 sales2:%"));
console.log(Number(sales2));
let sales3=parseInt(window.prompt("Enter 10001-20000 sales3:%"));
console.log(Number(sales3));
let sales4=parseInt(window.prompt("Enter Above 20000 sales4:%"));
console.log(Number(sales4));



let add= sales1+sales2+sales3+sales4;
console.log(`The Total Commision Earned by Employee is % ${add}`);