//make feedback global - this is the answer area
var elMsg = document.getElementById('feedback');
  
// function for Numbers
function k1()
{
    document.getElementById('expression').value+='1';
}

function k2()
{
    document.getElementById('expression').value+='2';
}

function k3()
{
    document.getElementById('expression').value+='3';
}

function k4()
{
    document.getElementById('expression').value+='4';
}

function k5()
{
    document.getElementById('expression').value+='5';
}

function k6()
{
    document.getElementById('expression').value+='6';
}

function k7()
{
    document.getElementById('expression').value+='7';
}

function k8()
{
    document.getElementById('expression').value+='8';
}

function k9()
{
    document.getElementById('expression').value+='9';
}

function k0()
{
    document.getElementById('expression').value+='0';
}

function dec()
{
    document.getElementById('expression').value+='.';
}

function clear()
{
    document.getElementById('expression').value='';
    elMsg.textContent= '';
    
}

function plus()
{
    document.getElementById('expression').value+='+';
}

function minus()
{
    document.getElementById('expression').value+='-';
}

function mult()
{
    document.getElementById('expression').value+='*';
}

function divide()
{
    document.getElementById('expression').value+='/';
}

function remainder()
{
     document.getElementById('expression').value+='%';
}

//evaluate expression using eval()

function evalExpr()
{
   var expression = document.getElementById('expression').value;
   var answer = eval(expression);
   elMsg.textContent = answer;
}
//value of sin

function sin()
{
    var expression = document.getElementById('expression').value;
    var answer = Math.sin(expression);
    elMsg.textContent = answer;
}
//value of cos

function cos()
{
    var expression = document.getElementById('expression').value;
    var answer = Math.cos(expression);
    elMsg.textContent = answer;
}
//value of tan

function tan()
{
    var expression = document.getElementById('expression').value;
    var answer = Math.tan(expression);
    elMsg.textContent = answer;
}
//value of sqrt

function sqrt()
{
    var expression = document.getElementById('expression').value;
    var answer = Math.sqrt(expression);
    elMsg.textContent = answer;
}
//value of log

function log()
{
    var expression = document.getElementById('expression').value;
    var answer = Math.log(expression);
    elMsg.textContent = answer;
}
//value of pi

function pi()
{
    var x = document.getElementById('expression').value;
    var answer;
    
    if (x)
        { 
            answer = Math.PI * x;
        }
    else
        {
            answer = Math.PI;
        }
    
    elMsg.textContent = answer;
}
//append exp
function append_exp()
{
    var ex = document.getElementById('expression').value;
    var answer = Math.exp(ex);
    elMsg.textContent = answer;
}

//append leftbracket

function lbrat()
{
    document.getElementById('expression').value+='(';
}
//append rightbracket
function rbrat()
{
    document.getElementById('expression').value+=')';
}


var butEquals = document.getElementById('but_equals');
butEquals.addEventListener('click',evalExpr,false);

var buttonSin = document.getElementById('but_sin');
buttonSin.addEventListener('click',sin,false);

var buttonCos = document.getElementById('but_cos');
buttonCos.addEventListener('click',cos,false);

var buttonTan = document.getElementById('but_tan');
buttonTan.addEventListener('click',tan,false);

var buttonSqrt = document.getElementById('but_sqrt');
buttonSqrt.addEventListener('click',sqrt,false);

var buttonLog = document.getElementById('but_ln');
buttonLog.addEventListener('click',log,false);

var buttonPi = document.getElementById('but_pi');
buttonPi.addEventListener('click',pi,false);

var buttonExp = document.getElementById('but_exp');
buttonExp.addEventListener('click', append_exp, false);

var button1 = document.getElementById('but_one');
button1.addEventListener('click', k1, false);

var button2 = document.getElementById('but_two');
button2.addEventListener('click', k2, false);

var button3 = document.getElementById('but_three');
button3.addEventListener('click', k3, false);

var button4 = document.getElementById('but_four');
button4.addEventListener('click', k4, false);

var button5 = document.getElementById('but_five');
button5.addEventListener('click', k5, false);

var button6 = document.getElementById('but_six');
button6.addEventListener('click', k6, false);

var button7 = document.getElementById('but_seven');
button7.addEventListener('click', k7, false);

var button8 = document.getElementById('but_eight');
button8.addEventListener('click', k8, false);

var button9 = document.getElementById('but_nine');
button9.addEventListener('click', k9, false);

var button0 = document.getElementById('but_zero');
button0.addEventListener('click', k0, false);

var buttondot = document.getElementById('but_decimal');
buttondot.addEventListener('click', dec, false);

var buttonPlus = document.getElementById('but_plus');
buttonPlus.addEventListener('click',plus,false);

var buttonMinus = document.getElementById('but_minus');
buttonMinus.addEventListener('click',minus,false);

var buttonMult = document.getElementById('but_mult');
buttonMult.addEventListener('click',mult,false);

var buttonDiv = document.getElementById('but_divide');
buttonDiv.addEventListener('click',divide,false);

var buttonLb = document.getElementById('but_leftbracket');
buttonLb.addEventListener('click', lbrat, false);

var buttonRb = document.getElementById('but_rightbracket');
buttonRb.addEventListener('click', rbrat, false);

var buttonClear = document.getElementById('but_clear');
buttonClear.addEventListener('click', clear, false);

var buttonRemainder = document.getElementById('but_remainder');
buttonRemainder.addEventListener('click', remainder, false);







