var num1 = '';
var num2 = '';
var operator = '';

WriteToScreen(0)

function num(val) {

    if(val == 'clear'){
        num1 = '';
        num2 = '';
        operator = '';
        WriteToScreen('')
        return
    }

    //bereken uitkomst
    if (val == '=' && operator && num1 && num2) {
        WriteToScreen(eval(num1 + operator + num2))
        num1 = (eval(num1 + operator + num2)).toString();
        num2 = ''
        operator = ''
        console.log(num1)
        console.log(num2)
        return
    }

    if (val == '=') {
        return
    }

    if ((num1) && (!operator) && (val == '+' || val == '-' || val == '/' || val == '*' || val == '^')) {
        operator = val
        if(val == '^'){
            operator = '**'
            WriteToScreen('^')
            return
        }
        WriteToScreen(operator)
        return
    }

    if (!operator && !num2) {
        if(val == 'PI'){
            num1 += Math.PI
            WriteToScreen(num1)
            return
        }
        num1 += val
        WriteToScreen(num1)
    }

    if (num1 && operator) {
        if(val == 'PI'){
            num2 += Math.PI
            WriteToScreen(num2)
            return
        }

        num2 += val
        WriteToScreen(num2)
    }

    console.log(num1, num2, operator)
}

function WriteToScreen(value) {
    document.getElementById('screen').value = value
}