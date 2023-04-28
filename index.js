let add=document.getElementById("add");
let multp=document.getElementById("multp");
let divs=document.getElementById("divs");
let subt=document.getElementById("subt");
let deft=document.getElementById("default");

let a=prompt("Enter the first number to perform a mathematical operation:");
let b=prompt("Enter the second number to perform a mathematical operation:");
let abs=prompt("Choose a mathematical operation: {addition, multiplication, division, subtraction}");

let operation=abs.toLowerCase();

function mathematicalOperation(operation) {
    switch(operation){
        case "addition" : {add.innerText=(Number(a)+Number(b))} break;
        case "multiplication" : {multp.innerText=(Number(a)*Number(b))} break;
        case "division" : {divs.innerText=(Number(a)/Number(b))} break;
        case "subtraction" : {subt.innerText=(Number(a)-Number(b))} break;
        default: deft.innerText=("Belə bir əməliyyat yoxdur!");
    }
}
mathematicalOperation(operation);