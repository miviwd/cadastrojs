function Função() {
    var name = document.getElementsById ("Usuário").value
    var password = document.getElementsById ("Senha").value
    if( name === ""){
    alert ("Ops, tente novamente colocando o seu nome completo!")

    } 

    if ( password === ""){
        alert ("Ops, aqui está vazio!")
    }

    console.log(name)
    console.log(password)
}

