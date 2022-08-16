//form targetting
 
let form = document.getElementById("form")

let error = []
form.addEventListener("submit",function(e){
e.preventdefault(); //to prevent auto submission of a form

let username = document.getElementById("username");
let pass = document.getElementById("password");

if(username.valid == ""){
error.push("please enter the username");
}
if(password.valid == ""){
    error.push("please enter the password");
    }

    let message = document.getElementById("message");
    message.innerText = error;
})
