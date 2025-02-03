const result_screen = document.getElementById("result");
const buttons = document.querySelectorAll("#btn");

let currentInput = "";
let numbers = [];
let operators = [];

function calculateResult(numbers, operators) {
    // Handle the first operation
    let total = numbers[0];

    for (let i = 0; i < operators.length; i++) {
        switch (operators[i]) {
            case "+":
                total += numbers[i + 1];
                break;
            case "-":
                total -= numbers[i + 1];
                break;
            case "x":
                total *= numbers[i + 1];
                break;
            case "%":
                if (numbers[i + 1] === 0) {
                    return "Error: Division by zero";
                }
                total /= numbers[i + 1];
                break;
            case "√":
                total = Math.sqrt(numbers[i]);
                break;
            case "log":
                total = Math.log(numbers[i]);
                break;
            case "^":
                total = Math.pow(numbers[i], numbers[i + 1]);
                break;
            default:
                return "Error: Invalid operator";
                break;
        }
    }

    return total;
}

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.getAttribute("data-value");

        if (["+", "-", "x", "%", "√", "^", "log"].includes(value)) {
            // Push the current input number to the numbers array
            if (currentInput !== "") {
                numbers.push(parseFloat(currentInput));
                currentInput = "";  // Reset the current input
            }
            
            // Push the operator to the operators array
            operators.push(value);
            result_screen.innerHTML += value;

        } else if (value === "DEL") {
            result_screen.innerHTML = "";
            numbers = [];
            operators = [];
            currentInput = "";

        } else if (value === "=") {
            // Push the last entered number to the numbers array
            if (currentInput !== "") {
                numbers.push(parseFloat(currentInput));
            }

            if (numbers.length === 0 || operators.length === 0) {
                result_screen.innerHTML = "Error: Invalid input";
                return;
            }

            const result = calculateResult(numbers, operators);
            result_screen.innerHTML = result;
            // Reset for the next calculation
            numbers = [];
            operators = [];
            currentInput = "";

        } else {
            // It's a number or decimal point
            currentInput += value; // Accumulate the digits/decimal in the current input
            result_screen.innerHTML += value;
        }
    });
});
