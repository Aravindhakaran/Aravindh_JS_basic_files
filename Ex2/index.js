// function calc(){
//     var a = parseInt(document.querySelector("#demo").value);
//     var b = parseInt(document.querySelector("#remo").value);
//     var op = document.querySelector("#cemo").value;
//     var calculate;

// if(op == "add"){
//     calculate = a + b;
// }
// else if(op == "min"){
//     calculate = a - b;
// }
// else if(op == "mul"){
//     calculate = a * b;
// }
// else if(op == "div"){
//     calculate = a / b;
// }

// document.querySelector("#result").innerHTML = calculate;
// }


// let person = {
//     name : "Aravindhan",
//     age : 30,
//     gender : "male",
//     address : "234, east street neduvai",
//     sibling:{
//     brother : "akaran",
//     sister : "karthika"
// }
// }
// person.age = 60;
// console.log(person.age);



// let favFoods = ["friedrice", "idly", "vadai","dosai"]
// favFoods[6]= "kitchadi";
// favFoods[7]= 27;
// console.log(favFoods);

// const fruits = ["Apple", "Orange", "Mango", "Banana"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits.pop(); 
// document.getElementById("demo2").innerHTML = fruits;

// const fruits = ["Apple", "Orange", "Mango", "Banana"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits.push("kiwi");
// document.getElementById("demo2").innerHTML = fruits;

// const fruits = ["Apple", "Orange", "Mango", "Banana"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits.shift();
// document.getElementById("demo2").innerHTML = fruits;

// const fruits = ["Apple", "Orange", "Mango", "Banana"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits.unshift("melon");
// document.getElementById("demo2").innerHTML = fruits;

// const fruits = ["Apple", "Orange", "Mango", "Banana"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits[0] = "melon";
// document.getElementById("demo2").innerHTML = fruits;

// const mygirls = ["karthika","kannagi","selvi"];
// const myboys = ["aravindh","akaran","nataraj"];
// const myfamily = mygirls.concat(myboys);
// document.getElementById("demo1").innerHTML = myfamily;

// const fruits = ["Apple", "Orange", "Mango", "Banana"];
// document.getElementById("demo1").innerHTML =  fruits;

// fruits.sort();
// document.getElementById("demo2").innerHTML =  fruits;

// const points = [1, 2, 5, 10, 34, 56, 100];
// points.sort(function(a, b){return a-b});
// document.getElementById("demo1").innerHTML = points[6];


// const points = [1, 3, 9, 24, 67];
// document.getElementById("demo1").innerHTML = myArrayMin(points)

// function myArrayMin(arr){
//     return Math.min.apply(null, arr);
// }

// if (new Date().getHours() < 18){
//     document.getElementById("demo").innerHTML = "have a good day";
// }

// const hour = new Date().getHours();
// let greedings;

// if(hour < 10){
//     greedings = "Good day";
// }else if(hour<20){
//     greedings = "Good afternoon";
// }else{
//     greedings = "good night";
// }

// document.getElementById("demo").innerHTML = greedings;


// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day= "Sunday";
//         break;
//         case 1:
//             day="Mon(day";
//         break;
//         case 2:
//             day = "Tuesday";
//             break;
//             case 3:
//             day = "Wednesday";
//             break;
//             case 4:
//             day = "Thursday";
//             break;
            
//             case 6:
//             day = "Saturday";
//             break;

//             default:
//             day = "no date available";
       

// }
// document.getElementById("demo").innerHTML="Today is " + day;

// const cars = ["tata", "nano", "kiwi", "maruti", "indiga",];
// let text="";
// for(let i = 0; i < cars.length; i++){
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// let text="";

// for(let i = 0; i <= 10; i++){
//     text += "the number is"+ i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


function calc(){
    let a = parseInt(document.querySelector("#value1").value);
    let b = parseInt(document.querySelector("#value2").value);
    let c = document.querySelector("#operation").value;
    let calculate;

    if(c == "add"){
       calculate = a + b;
    }else if(c=="min"){
        calculate = a - b;
    }else if(c=="mul"){
        calculate = a * b;
    }else if(c=="div"){
        calculate = a / b;
    }
    document.querySelector("#karthika").innerHTML=calculate;
}













































