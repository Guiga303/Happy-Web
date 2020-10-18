let inputs = document.querySelectorAll('input')
let login = document.getElementById('login-button')
let register = document.getElementById('register-button')

// ir para tela de registro
register.addEventListener('click', e => {
    e.preventDefault();
    
    
})

// evento que dispara as validações
login.addEventListener('click', e => {
    e.preventDefault();
    
    if(inputs[0].value == "") {
        alert('Por favor insira seu email')
    }

    if(inputs[1].value == "") {
        alert('Por favor insira sua senha')
    }
})