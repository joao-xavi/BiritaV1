
function login(){
    var usersList = JSON.parse(localStorage.getItem("usuarios"))
    console.log(usersList)
    var email = document.getElementById("email").value
    var senha = document.getElementById("senha").value

    if (usersList != null){

        for(var i = 0; i < usersList.length; i++){
            if(usersList[i][0] == email && usersList[i][1] == senha){
                alert("Login realizado com sucesso")
                window.location.href = "index.html"
            }
        }
        alert("Login incorreto tente novamente")
    }else{
        alert("Login incorreto tente novamente")
    }

    var email = document.getElementById("email").value = ""
    var senha = document.getElementById("senha").value = ""
}

function cadastro(){
    var email = document.getElementById("email").value
    var nome = document.getElementById("nome").value
    var senha = document.getElementById("senha").value

    var senhaConfirm = document.getElementById("confirmSenha").value

    if(senha != senhaConfirm){
        alert("As senhas não coincidem")
        var senha = document.getElementById("senha").value = ""
        var senhaConfirm = document.getElementById("confirmSenha").value = ""
    }else{
        alert("Cadastro realizado com sucesso!")
        var usersList = JSON.parse(localStorage.getItem("usuarios"))
        var usuario = [ email, senha, nome ]
        if (usersList != null) {
            usersList.push(usuario)
            window.localStorage.setItem("usuarios", JSON.stringify(usersList));
        }else {
            var list = [usuario]
            window.localStorage.setItem("usuarios", JSON.stringify(list));
        }    
    }
}