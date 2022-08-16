function and(){

let value1 = document.getElementById("value1").value;
let value2 = document.getElementById("value2").value;
let value3 = document.getElementById("value3").value;

let flag = false;

if(value1>=value2 && value2>=value3){

   flag = true;
    document.getElementById("result").innerHTML =flag;
   
   
    return; 

}
else{
    document.getElementById("result").innerHTML =flag;
    
    return     
}

}
function or(){

    let value1 = document.getElementById("value1").value;
    let value2 = document.getElementById("value2").value;
    let value3 = document.getElementById("value3").value;
    
    let flag = false;

    if((value1>=value2 )|| (value2 >= value3)){
    
       flag = true;
        document.getElementById("result").innerHTML =flag;       
        return; 
    
    }
    else{
        document.getElementById("result").innerHTML =flag;        
        return;    
    }
    
    }