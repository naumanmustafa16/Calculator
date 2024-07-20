let a = parseInt(prompt("Please enter the first Number:"))
let operator = (prompt("Please enter the operator:"))
let b = parseInt(prompt("Please enter the second Number:"))
let result;

function operate(a,b,operator) {
    if (operator == '+') {
        return result = a+b;
        
    }
    else if (operator == '-'){
        return result = a-b;
    }
    else if (operator == '*'){
        return result = a*b;
    }
    else if (operator == '/'){
        return result = a/b;
    }
}
operate(a,b,operator);
alert(result)