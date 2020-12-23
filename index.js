var num1 = '';
var num2 = '';
var operator = '';

WriteToScreen(0)

console.log(eval('2**4'))

function num(val) {

    if(val == 'clear'){
        num1 = '';
        num2 = '';
        operator = '';
        WriteToScreen('')
        return
    }

    if (val == '=' && operator && num1 && num2) {
        WriteToScreen(eval(num1 + operator + num2))
        return
    }

    if (val == '=') {
        return
    }

    if ((num1) && (!operator) && (val == '+' || val == '-' || val == '/' || val == '*')) {
        operator = val
        WriteToScreen(operator)
        return
    }

    if (!operator && !num2) {
        num1 += val
        WriteToScreen(num1)
    }

    if (num1 && operator) {
        num2 += val
        WriteToScreen(num2)
    }
}

function WriteToScreen(value) {
    document.getElementById('screen').value = value
}