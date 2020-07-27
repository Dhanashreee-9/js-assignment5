console.log("Use higher order function to filter odd numbers from array and cube of it.");



let inputArray = [];
let size =window.prompt("Enter any positive number");
 console.log(size);

for(let i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = ( + (i+1));
}
//Print the array in the console.
console.log(inputArray);




let evenCube=inputArray.filter(el=>el%2!==0).map((el)=> el**3)
         
console.log(evenCube);












