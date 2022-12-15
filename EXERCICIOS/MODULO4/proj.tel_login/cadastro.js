/* variaveis*/

let formulario = document.getElementById('formulario')
let campos = document.getElementsByClassName('form')

/* listeners */
/* document.getElementById('emai;').addEventListener('mouseout', ) */
/* document.getElementById('cel').addEventListener('mouseout', ) */
document.getElementById('csen').addEventListener('mouseout', verisenha)


function verisenha(){
    if(campos[3].value!=campos[2].value){
        document.getElementById('btn').disabled=true
        alert('Senhas não são iguais!')
    } else{
        document.getElementById('btn').disabled=false
    }
}
