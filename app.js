const num1Input = document.getElementById("num1")
const num2Input = document.getElementById("num2")
const operationInput = document.getElementById("operation")
const submitButton = document.getElementById("submit")

function calculate() {
    const num1 = num1Input.value
    const num2 = num2Input.value
    const operation = operationInput.value
    let result = 0

    switch(operation) {
        case "add":
            result = num1 + num2
            break
        case "subtract":
            result = num1 - num2
            break
        case "multiply":
            result = num1 * num2
            break
        case "divide":
            result = num1 / num2
            break
        default:
            console.log("something went wrong")
            break
    }

    window.alert(`The answer is ${result}`)
}

submitButton.addEventListener("click", calculate)