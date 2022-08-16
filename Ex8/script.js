function mycalculator1(){
let number1=parseInt(document.getElementById("number1").value);
let number2=parseInt(document.getElementById("number2").value);
console.log();
number3=number1+number2;
document.getElementById("result").innerHTML =number3;
}

function mycalculator2(){
let number1 =parseInt(document.getElementById("number1").value);
let number2 =parseInt(document.getElementById("number2").value);
document.getElementById("result").innerHTML = number1-number2;

}
function mycalculator3(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = number1*number2;
}
function mycalculator4(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    document.getElementById("result").innerHTML = number1/number2;
}