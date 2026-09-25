const display = document.getElementById("display");

const buttons = document.querySelectorAll(".buttons button");

let firstNumber = "";
let operator = "";
let secondNumber = "";


for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function () {

        let button = buttons[i].textContent;

        if (button === "C") {

            display.value = "0";

            firstNumber = "";
            operator = "";
            secondNumber = "";

        }
        else if (button === "DEL") {

            display.value = display.value.slice(0, -1);

            if (display.value === "") {
                display.value = "0";
            }

        }

        else if (
            button === "+" ||
            button === "−" ||
            button === "×" ||
            button === "÷"
        ) {

            firstNumber = display.value;

            operator = button;

            display.value = "0";

        }

        else if (button === "=") {

            secondNumber = display.value;

            let num1 = Number(firstNumber);
            let num2 = Number(secondNumber);

            let result;


            if (operator === "+") {
                result = num1 + num2;
            }

            else if (operator === "−") {
                result = num1 - num2;
            }

            else if (operator === "×") {
                result = num1 * num2;
            }

            else if (operator === "÷") {

                if (num2 === 0) {
                    display.value = "Error";
                    return;
                }

                result = num1 / num2;
            }


            display.value = result;

        }

        else if (button === "%") {

            display.value = Number(display.value) / 100;

        }

        else if (button === ".") {

            if (!display.value.includes(".")) {
                display.value += ".";
            }

        }


        else {

            if (display.value === "0") {

                display.value = button;

            } else {

                display.value += button;

            }

        }

    });

}