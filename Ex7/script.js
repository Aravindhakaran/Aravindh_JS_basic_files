function addname(){
    console.log("add function triggered");

    const name = document.getElementById("inputName").value;
    console.log(name);

    const nameList = document.getElementById("nameList");
    console.log(nameList);

    const listitems = document.createElement("li");
    
    listitems.textContent = name;

    console.log(listitems);
    nameList?.append(listitems);
   
    document.getElementById("inputName").value = "";

}
   

  
