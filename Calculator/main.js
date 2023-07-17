function calculate() {
    console.log("calculate function called")

    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);

    var result = number1 + number2
    console.log(number1 + number2)

    document.getElementById('result').innerText = result

}