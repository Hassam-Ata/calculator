document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    const numericKeys = document.querySelectorAll(".numericKeys");
    const allClearBtn = document.querySelector(".allClear");
    const operators=document.querySelectorAll(".operators")
    const equalsTo=document.querySelector(".equalsTo");
    const previousScreen=document.querySelector(".previousScreen");
    const currentScreen=document.querySelector(".currentScreen");

    const decimal= document.querySelector(".decimal");
    let currentValue = '';
    let previousValue = '';
    let operator = '';

    numericKeys.forEach((numericKey) => {
        numericKey.addEventListener("click", () => {
            handleNumbers(numericKey.textContent);
            currentScreen.textContent = currentValue;
        
        });
    });

    operators.forEach((op)=>{
        op.addEventListener("click",()=>{
            handleOperators(op.textContent);
            previousScreen.textContent=previousValue +" "+operator;
            currentScreen.textContent=currentValue;
            console.log(operator);

        });
    });
    
    equalsTo.addEventListener("click",()=>{
        calculate();
                    // Display the result in previousScreen and clear current value
                    previousScreen.textContent = "";
                    currentScreen.textContent = previousValue;
            
                    // Reset currentValue for next calculation
                    currentValue = "";
        


    })

    allClearBtn.addEventListener("click", () => {
        previousValue="";
        currentValue = "";
        currentScreen.textContent=currentValue;
        
    });

    decimal.addEventListener("click",()=>{
        handledecimal();
    })

    function handleNumbers(num) {

        if (currentValue.length<=5) {
            currentValue+=num;   
        }
    }

    function handleOperators(op) {
        operator=op;
        previousValue=currentValue;
        currentValue="";

        
    }
    function handledecimal(){
        if (!currentValue.includes(".")) {
            currentValue+="."; 
            
        }
    }
    function calculate() {
        currentValue = Number(currentValue);
        previousValue = Number(previousValue);
    
        if (!isNaN(currentValue) && !isNaN(previousValue)) {
            switch (operator) {
                case "+":
                    previousValue += currentValue;
                    break;
                case "-":
                    previousValue -= currentValue;
                    break;
                case "*":
                    previousValue *= currentValue;
                    break;
                case "/":
                    if (currentValue !== 0) {
                        previousValue /= currentValue;
                    } else {
                        alert("Error: Division by zero");
                        currentValue='';
                        previousValue='';
                        return;
                    }
                    break;
                default:
                    break;
            }
    
            // Round the result to 3 decimal places
            previousValue = Math.round(previousValue * 1000) / 1000;
    

        }
    }
    
});

