function checkPswd() {
    var confirmPassword = "3144life";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
         window.location="contact.html";
    }
    else{
        alert("Incorrect password.");
    }
}