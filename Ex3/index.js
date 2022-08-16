// // switch(condition){
// //     case 1 : console.log("1");
// //     case 2 : console.log("2");
// //     default: console.log("default behaviour");
// // }

// // // let grade = "S";

// // // switch(grade){
// // //     case "S":
// // //     console.log("A grade");
// // //     break;
// // //     case "A":
// // //         console.log("B grade");
// // //         break;
// // //         case "E":
// // //             console.log("Pass grade");
// // //             break;
// // //             case "U":
// // //                 console.log("Fail grade");
// // //                 break;
// // //                 Default:
// // //                     console.log("Default grade");

// // //                 console.log(grade);

// //     }

// // let isRaining = false;
// // let isCloudy  = false;

// // if(isRaining || isCloudy){
// //     console.log("dont forget to take umbrella");
// // }else{
// //     console.log("sky is normal");
// // }

// //if hour is between 12am to 1pm- good mrng
// //else if hour 1pm to 5pm-gd aft
// //else hr 5pm to 12am - good eve


// // let hour = new Date().getHours();

// // if(hour>=0 && hour<=13){
// //     console.log("good morning");

// // }else if(hour>=13 && hour<=17){
// //     console.log("good afternoon");
// // }else{
// //     console.log("good eve");
// // }

// // for(initialExpression; CSSCondition; step)
// // console.log("Number #1");
 
// // for(i = 1; i < 10; i++ ){

// //     if(i % 2 !==0){
// //     console.log("odd number #"+ i);
// // }
// // }

// // const person = {
// //     name : "aravind",
// //     age : 30,
// //     sex : "male"
// // };
// // for(let key in person){
// //     console.log(key + ": ", person[key]);
// // }

// // let colors = ["red", "orange", "yellow"];


// // for(let key in colors){
// //     console.log(key + ": " + colors[key]);
// // }

// let first_name = "aravindhan";
// let last_name = "karthika";
// let c = first_name + " "+last_name;
// console.log("concatenation: " +c);


// //concate:
// c = first_name.concat(" ",last_name);
// console.log("concat: " + c);

// //append
// c="aravindhan";
// c+="karthika";
// console.log("append :  "+c)

// //escaping
// c= "she can\'t run"
// console.log(c)

// //lenth

// c=first_name.length;
// console.log("length: "+c)

// //upper and lower

// c=first_name.toUpperCase();
// console.log("Uppercase: "+c)

// //index of

// c=first_name.indexOf("v");
// console.log("indexof v : "+ c);

// //substr

// c=first_name.substr(0,3);

// console.log("substr : "+ c);

// //substring

// let text="0123456789";
// c=text.substring(0,5);
// console.log("substring : "+ c);

// c=text.substring(4);
// console.log("substring : "+ c);


// c=text.substring(20,30);
// console.log("substring : "+ c);

// //slice

// c=text.slice(2,4);
// console.log("slice: "+ c);

// c=text.slice(6,4);
// console.log("slice: "+ c);

// c=text.slice(-3);
// console.log("slice: "+ c);

// //slit in js

// let a = "Aravindhan karthika akaran";
// c=a.split(" ");
// console.log("split: "+ c);
// console.table(c);

// //replace js

// a="i am from thanjai";
// console.log("before replace: "+a);
// c=a.replace("thanjai","orathanadu");
// console.log("after replace: "+ c);

// //includes

// const pets = ["cat", "rat", "rat"];
// console.log(pets.includes("cat"));
// console.log(pets.includes("pat"));

// //trim js
// //trim use to neglate unwanted white space

// a=" aravindh ";
// console.log("before trim: "+ a.length);
// a=a.trim();
// console.log("after trim: "+ a.length);

// //padstart and pad end;;

// a="5";
// a=a.padStart(4,0);
// console.log(a);

// a="5";
// a=a.padEnd(4,0);
// console.log(a);

/*----------------------------------------------------------------*/

// //ARRAY
// let a = [10, 20, 30, 40, 50];
// console.log(a);
// console.table(a);

// //foreach array

// const number=[1,2,3,4,5,6,7,8,9,10];
// //value,index,array
// number.forEach((value)=>{
//     console.log(value);
// })

// number.forEach((value,index)=>{
//     console.log(index+" "+value);
// })

// map() array;(squre)

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// //value,index,array
// let sqrt = numbers.map((value)=>{
//     return Math.sqrt(value).toFixed(2);

// }
// // );
// // console.table(sqrt);

// //slice
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// //slice(start,end)
// console.log(numbers);
// console.log("slice:"+ numbers.slice());
// console.log("slice(2):"+ numbers.slice(2));
// console.log("slice(2,5):"+ numbers.slice(2,5));

//splice()
//removed_elemetn=splice(start,length,new elements)
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log("before splice: " +numbers);

// let removed_elements=numbers.splice(2);
// console.log("removed Items: " +removed_elements);
// console.log("after splice: " +numbers);



// const numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log("before splice: " +numbers);
// removed_elements=numbers.splice(2,2);
// console.log("removed Items: " +removed_elements);
// console.log("after splice: " +numbers);


//concate js

// const a=[10,20,30];
// const b=[40,50,60];
// const c=[70,80,90];

// let d=a.concat(b);
// console.log(d);

//  d=a.concat(b,c);
// console.log(d);


// d=a.concat(b,c,25,55,["a","b","c"]);
// console.log(d);

// console.table(d);




//sort()

// const names = ["aravindh","karthika","akaran","karnan"];
// console.log("before sort: "+names);

// names.sort();
// console.log("after sort: "+names);

// const numbers=[12,21,37,48,53,61,70,80,92,101];
// console.log("before sort: "+numbers);
// names.sort();
// console.log("after sort: "+numbers);
// //-----------ok--------------

// numbers.sort((a,b)=>{
//     return a-b;
// })
// console.log("compare sort: "+ numbers)

// numbers.sort((a,b)=>{
//     return b-a;
// })
// console.log("compare sort: "+ numbers)

//fill method

//fill(value,start,end)

// let numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log("before fill:"+numbers);

// numbers.fill(20);
// console.log("after fill: " +numbers);






























































     
