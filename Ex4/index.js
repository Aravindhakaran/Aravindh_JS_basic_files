let outputscreen=document.getElementById("output");
function display(number){
    outputscreen.value += number;

}
function calculate(){
    try{
        outputscreen.value = eval(outputscreen.value);

    }
    catch(err){
        alert("invalid");
    }

}
function Clear(){
    outputscreen.value = " ";


}
function del(){
outputscreen.value = outputscreen.value.slice(0,-1);


}