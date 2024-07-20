// All Declaration here

let a; //First Number
let operator; //Operator String (+,-,*,/)
let operatorList = []; //Operator List to keep track of operators.
let b; //Second Number
let displayValue = ''; //Variable to keep displays
let result;
let record = [];
const num = Array.from(document.querySelectorAll(".num")); // All the number buttons
const display = document.querySelector(".display"); // Calculator Display
const clearAll = document.querySelector(".allClear"); // For AC Button
const add = document.querySelector(".add"); //For + Button
const subtract = document.querySelector(".subtract"); //For - Button
const multiply = document.querySelector(".multiply"); //For * Button
const divide = document.querySelector(".divide"); //For / Button
const equalTo = document.querySelector(".equalTo") //For = Button to get answer

// Clear All (AC) shall erase everything

clearAll.addEventListener("click", () =>{
    displayValue = '';
    a = 0;
    b= 0;
    result = 0;
    record = [];
    displayValue = '';
    operator ='';
    operatorList = [];
    display.textContent = displayValue;
    console.log("Clear All is pressed")
})

// Inputting Numbers

num.forEach(button => {
    console.log(`record from Taking Number Section:${record} `)
    button.addEventListener("click",() =>{
    displayValue = displayValue + button.textContent;
    display.textContent = displayValue 
})})

// Listening to Operators (+,-,*,/)

add.addEventListener("click",()=>{
    // console.log("+ is clicked");
    
    operatorList.push("+");
    operator = operatorList[0];
    record.push(Number(displayValue))
    // console.log(record)
    if (record.length == 2){
    operate(record,operator)
    }
    displayValue = '' 
    
})

subtract.addEventListener("click",()=>{
    // console.log("- is clicked")
    
    operatorList.push("-");
    operator = operatorList[0];
    record.push(Number(displayValue))
    // console.log(record)
    if (record.length == 2){
    operate(record,operator)
    }
    displayValue = '' 
})

multiply.addEventListener("click",()=>{
    // console.log("* is clicked")
    
    operatorList.push("*");
    operator = operatorList[0];
    if (displayValue === ''){
    record.push(Number(displayValue) + 1)}
    else{
    record.push(Number(displayValue))
    }
    // console.log(record)
    if (record.length == 2){
    operate(record,operator)
    }
    displayValue = '' 
})

divide.addEventListener("click",()=>{
    // console.log("/ is clicked")
    
    operatorList.push("/");
    operator = operatorList[0];
    if (displayValue === ''){
        record.push(Number(displayValue) + 1)}
        else{
        record.push(Number(displayValue))
        }
        
    // console.log(record)
    if (record.length == 2){
    operate(record,operator)
    }
    displayValue = '' 
})

// equalTo(=) to get result

equalTo.addEventListener("click", () =>{
    // console.log(operatorList)
    operator = operatorList[0];
    record.push(Number(displayValue))
    // console.log(`= is clicked. ${record}, ${operator}`)
    operate(record,operator);
    operatorList = []
    operator = '';
    // record = [];
    displayValue = ''
})


// This is where operation happens
function operate(record,operator) {
    if (operator == '+') {record.reduce((result,currentValue) =>{
        result = result + currentValue;
        displayValue = String(result)
        display.textContent = displayValue;
        
        // console.log(`this is operator List ${operatorList}`)
        // console.log(`this is result ${result}`)
        // console.log(`this is record ${record}`)
        // record =[]
        record.splice(0,2,result);
        operatorList = operatorList.slice(-1)
        // console.log(`this is result ${result} now`)
        // console.log(`this is record ${record} now`)
        // console.log(`this is operator List ${operatorList} now`)
    }) 

    }
    else if (operator == '-'){record.reduce((result,currentValue) =>{
        result = result - currentValue;
        display.textContent = result;
        // console.log(`this is operator List ${operatorList}`)
        operatorList = operatorList.slice(-1)
        
        // console.log(`this is result ${result}`)
        // console.log(`this is record ${record}`)
        //  record =[]
        record.splice(0,2,result);
        // console.log(`this is result ${result} now`)
        // console.log(`this is record ${record} now`)
        // console.log(`this is operator List ${operatorList} now`)
    }) 

    }
    else if (operator == '*'){record.reduce((result,currentValue) =>{
        result = result * currentValue;
        display.textContent = result;
        // console.log(`this is operator List ${operatorList}`)
        operatorList = operatorList.slice(-1)
        
        // console.log(`this is result ${result}`)
        // console.log(`this is record ${record}`)
        record.splice(0,2,result);
        // console.log(`this is result ${result} now`)
        // console.log(`this is record ${record} now`)
        // console.log(`this is operator List ${operatorList} now`)
    }),1 }
    else if (operator == '/'){record.reduce((result,currentValue) =>{
        result = result / currentValue;
        if (result % 1 != 0){
        display.textContent = result.toFixed(2)}
        else{display.textContent = result}
        // console.log(`this is operator List ${operatorList}`)
        operatorList = operatorList.slice(-1)
        
        // console.log(`this is result ${result}`)
        // console.log(`this is record ${record}`)
        record.splice(0,2,result);
        // console.log(`this is result ${result} now`)
        // console.log(`this is record ${record} now`)
        // console.log(`this is operator List ${operatorList} now`)
    }) }

}