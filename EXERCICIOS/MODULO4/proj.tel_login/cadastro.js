/* variaveis*/
let formulario = document.getElementById('formulario')
let campos = document.getElementsByClassName('form')
let emailtrue = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

/* listeners */
document.getElementById('btn').addEventListener('click', cadastrar)

function cadastrar(){
    if(campos[3].value != campos[2].value){
        alert('Senhas não são iguais!')
    }
}