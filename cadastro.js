function cadastro(){
    var nome= document.getElementById ("Nome").value;
    var sobrenome= document.getElementById ("Sobrenome").value;
    var email= document.getElementById ("Email").value;
    var senha= document.getElementById ("Senha").value;
    if (nome === ""){
        alert ("Ops, tente novamente");
    }
    if (sobrenome === ""){
        alert ("Ops, tente novamente");
    }
    if (email === ""){
        alert ("Ops, tente novamente");
    }
    if (senha === "" || senha.length <8){
        alert ("Ops, tente uma senha maior!");
    }

} 