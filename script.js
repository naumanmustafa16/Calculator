let a = parseInt(prompt("Please enter the first Number:"))
let operator = (prompt("Please enter the operator:"))
let b = parseInt(prompt("Please enter the second Number:"))
let result;

function add (a,b) {
    return result = a+b;
}
function subtract (a,b) {
    return result = a-b;
}
function multiply (a,b) {
    return result = a*b;
}
function divide (a,b) {
    return result = a/b;
}

function operate(operator) {
    if (operator == '+') {
        add(a,b)
        
    }
    else if (operator == '-'){
        subtract(a,b)
    }
    else if (operator == '*'){
        multiply(a,b)
    }
    else if (operator == '/'){
        divide(a,b)
    }
}
operate(operator);
alert(result)