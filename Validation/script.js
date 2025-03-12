// Clears the calculator display
function clearScreen() {
    document.getElementById("result").value = "";
}

// Appends the clicked button's value to the display
function setScreenValue(value) {//value=8
    document.getElementById("result").value += value;
}
//'+'+='3'-->value(recent)=value(o)+value(n)=>'+'+'3'=>'+3'
//a=4, a+=3 --> a(new)=4(old)+3=7

// Calculates and displays the result
function calculateResult() {
    const resultElement = document.getElementById("result");//input
    const expression = resultElement.value.trim();//"+398-100"

    // Check for empty input
    if (expression == '') {
        resultElement.value = 'Enter an expression';
        return;
    }

    // Evaluate expression and handle errors
    try {
        resultElement.value = eval(expression);//eval("+398-100") evaluate the ex
    } catch (e) {
        resultElement.value = 'Invalid expression';
    }
}
