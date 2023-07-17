function calculate() {
    console.log("calculate function called")

    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operator = document.getElementById('operator').value
    var result = 0

    switch(operator)
    {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            if(number2 == 0) {
                console.log("Nicht durch Null teilen")
                document.getElementById('result').innerText = "Nicht durch Null teilen"
            }
            else {
                result = number1 / number2
            }
            break
    }

    if(result != 0) {
        document.getElementById('result').innerText = result
    }

}