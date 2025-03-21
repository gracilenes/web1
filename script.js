document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username= document.getElementById("username"). value;
    const password= document.getElementById("password"). value;
    const message= document.getElementById("message");

    const userCorrect = "admin";
    const passCorrect = "12345";

    if (username === userCorrect && password === passCorrect) {
        message.style.color = "white"
        message.textContent = "Login bem-sucedido!";
        setTimeout(() => {
            window.location.href = "dashboard.html"
        } , 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Usuário ou Senha Incorretos!"
    }

})