function cadastrar(){
    let senha = document.getElementById('sen')
    let csen = document.getElementById('csen')
    if(senha.value===csen.value){
        alert('td certo')
    }else{
     alert('Senhas não são iguais!')
    }
}