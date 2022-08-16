function errorMessage() {
    var error = document.getElementById("error")
    if (isNaN(document.getElementById("number").value))
    {
         
        // Changing content and color of content
        error.textContent = "Please enter a valid number"
        error.style.color = "red"
    } else {
        error.textContent = ""
    }
}