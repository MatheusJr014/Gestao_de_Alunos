function login() {
    let descricao = document.getElementById('txtDescricao')
    let curso = document.getElementById('txtCurso')
    let erro = !validar(descricao) || !validar(curso)

    document.getElementById('errorDescricao').hidden = validar(descricao)
    document.getElementById('errorCurso').hidden = validar(curso)
   if(!erro){
    redireciona('index.html');
   }
}

function redireciona(url){
    window.location.href = url; 
}

function validar(field){
    if  (field.value == ""){
        return false 
    }
    return true 
}