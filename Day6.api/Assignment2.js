console.log("Print the table");

// let result = '\n';
// for (let i = 1; i < 11; i++) {
//     for (let j = 1; j < 11; j++) {
//         result += (i*j) + ' ';
//     }
//     result += '\n'
// }
// connsole.log(result);



// let num=window.prompt("enter any number")
// var result = 'x ';
// for (var i = 0; i < num; i++) {

//     for (var j = 0; j < num; j++) {

        
       
//         result += (i*j) + ' ';
//         }
    
//     result += '\n'
// }

// console.log(result);

var num=prompt("Enter a number to display its multiplication table..");
document.write(`Multiplication Table of  ${num}<br><br>`)
for(let i=1;i<=10;i++){
    document.write(`${num} x ${i} = ${num*i}<br><br>`);
}