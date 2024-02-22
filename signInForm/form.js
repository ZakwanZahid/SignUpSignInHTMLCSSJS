let form1 = document.getElementById("f1");
form1.addEventListener("submit", function (event){
    alert("hehe");
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === "" || password === "")
    {        
        alert("Sorry, Invalid Username Or Passwords")
    }
});