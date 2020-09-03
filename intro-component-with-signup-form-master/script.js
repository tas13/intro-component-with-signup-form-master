document.getElementById("claim").addEventListener("click", check)

function check() {
    var mail = document.getElementById("mail").value
    var result = mail.match(/^\w+@[a-z]+.[a-z]+$/gm);

    if(document.getElementById("firstname").value == ""){
        document.getElementById("first1").style.display = "inline-block"
        document.getElementById("first").style.display = "inline-block"
        document.getElementById("firstname").style.border = "0.15vw solid hsl(0, 100%, 74%)"   
    } else {
        document.getElementById("first1").style.display = "none"
        document.getElementById("first").style.display = "none"
        document.getElementById("firstname").style.border = "0.1vw solid hsl(246, 25%, 77%)"
    }
    if(document.getElementById("lastname").value == ""){
        document.getElementById("second").style.display = "inline-block"
        document.getElementById("last").style.display = "inline-block"
        document.getElementById("lastname").style.border = "0.15vw solid hsl(0, 100%, 74%)"   
    } else {
        document.getElementById("second").style.display = "none"
        document.getElementById("last").style.display = "none"
        document.getElementById("lastname").style.border = "0.1vw solid hsl(246, 25%, 77%)"   
    }
    if(document.getElementById("mail").value == "" || result == null){
        document.getElementById("third").style.display = "inline-block"
        document.getElementById("email").style.display = "inline-block"
        document.getElementById("mail").style.border = "0.15vw solid hsl(0, 100%, 74%)"   
    } else {
        document.getElementById("third").style.display = "none"
        document.getElementById("email").style.display = "none"
        document.getElementById("mail").style.border = "0.1vw solid hsl(246, 25%, 77%)" 
    }
    if(document.getElementById("pass").value == ""){
        document.getElementById("fourth").style.display = "inline-block"
        document.getElementById("password").style.display = "inline-block"
        document.getElementById("pass").style.border = "0.15vw solid hsl(0, 100%, 74%)"   
    } else {
        document.getElementById("fourth").style.display = "none"
        document.getElementById("password").style.display = "none"
        document.getElementById("pass").style.border = "0.1vw solid hsl(246, 25%, 77%)"
    }
}