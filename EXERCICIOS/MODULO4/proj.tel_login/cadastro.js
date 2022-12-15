document.getElementById('btn').disabled=true;
//linha
let formulario = document.getElementById('formulario')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let celular = document.getElementById('cel')
let senha = document.getElementById('sen')
let csenha = document.getElementById('csen')
//linha

function alertasenha(){
    if(senha.value===csenha.value){
        return true
    } else{
        alert('Senhas não são iguais!')
    }
    
}
