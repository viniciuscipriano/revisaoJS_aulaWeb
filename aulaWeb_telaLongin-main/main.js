function botaoLogar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const correta_senha = "12345";
    const correto_email = "joao123@gmail.com";
    
    if (email === correto_email && senha === correta_senha) {
        window.location.replace("logado.html");
    } else{
        alert("Credenciais inválidas. Verifique seu email e senha e tente novamente.");
    }

    return false;
}
