let count = 0;
let oldValue = 0;
let result = 0;
let countSum = 0;
let operator;

const screen = window.document.getElementById("screen");

const resultOperations = '=';
const arithmeticOperations = '+-*/';

const validOperations = [
    ...resultOperations.split(''),
    ...arithmeticOperations.split('')
];

const reset = () => {
    count = 0;
    oldValue = 0;
    result = 0;
    countSum = 0;
    operator;
    screen.innerHTML = ""
};

const parseNumber = (number) => {

    if (number.toString().includes('.')) {
        return parseFloat(number)
    } else {
        return parseInt(number)
    }
}

const eval = (event) => {
    if (!validOperations.includes(event.target.value)) {
        if (countSum >= 1) {
            screen.innerHTML = "";
        }

        screen.innerHTML += event.target.value;
        console.log(1);
        countSum = 0;
    }

    const evalMap = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => (b === 0 ? 0 : a / b),
    };

    if (validOperations.includes(event.target.value)) {

        if (operator == "=" && arithmeticOperations.includes(event.target.value)) {
            operator = event.target.value;
        }

        if (countSum >= 1 && operator !== "=") {
            screen.innerHTML = "";
            operator = event.target.value;
            return;
        }

        if (count == 0) {
            operator = event.target.value;
            oldValue = screen.innerHTML;
            count++;
            screen.innerHTML = "";
        }

        else {
            const operandA = parseNumber(oldValue);
            const operandB = parseNumber(screen.innerHTML);

            if (operator == '=') {
                result = oldValue;
            }
            else {
                result = evalMap[operator](operandA, operandB);
            }

            screen.innerHTML = "";
            screen.innerHTML += result;
            oldValue = result;
            result = 0;
            countSum++;
            operator = event.target.value;
        }
    }
}

