//CALCULATOR

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    let expression = display.value;

    if (expression.includes("+")) {
        let numbers = expression.split("+");
        let firstNum = Number(numbers[0]);
        let secondNum = Number(numbers[1]);

        display.value = firstNum + secondNum;
    }
    else if (expression.includes("-")) {
        let numbers = expression.split("-");
        let firstNum = Number(numbers[0]);
        let secondNum = Number(numbers[1]);

        display.value = firstNum - secondNum;
    }
    else if (expression.includes("*")) {
        let numbers = expression.split("*");
        let firstNum = Number(numbers[0]);
        let secondNum = Number(numbers[1]);

        display.value = firstNum * secondNum;
    }
    else if (expression.includes("/")) {
        let numbers = expression.split("/");
        let firstNum = Number(numbers[0]);
        let secondNum = Number(numbers[1]);

        display.value = firstNum / secondNum;
    }
    else{
        display.value = "solly :)";
    }
}