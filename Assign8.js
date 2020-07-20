console.log("USe arrow function");


let ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
'Do you agree?',
() => console.log('You agreed'),
() => console.log('You interrupted execution'),
);

//function ask(question,yes,no){
    //if (confirm(question)) yes()
    //else no();
//}

//ask(
    //"Do You agree?",
    //function() {alert("You Agreed.");},
    //function() {alert("You cancelled the execution.");}
//);