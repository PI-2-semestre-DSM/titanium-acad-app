function registrarUsuario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const nome = document.getElementById('registerName').value;
    const numero = document.getElementById('registerNumber').value;
    const senha = document.getElementById('registerPassword').value;

    // Armazenar o usuário no localStorage
    const usuario = {
        nome: nome,
        numero: numero,
        senha: senha
    };

    localStorage.setItem(`usuario_${numero}`, JSON.stringify(usuario));

    // Redireciona para uma página em branco após o registro
    window.location.href = 'pagina_inicial.html'; // Altere para o URL desejado

    // Limpar o formulário
    document.getElementById('registerForm').reset();
    
    // Fechar o modal após o registro
    $('#registerModal').modal('hide');
}


    
function validarLogin(event) {
    event.preventDefault(); // Impede o envio do formulário

    const numero = document.getElementById('exampleDropdownFormNumber').value;
    const senha = document.getElementById('exampleDropdownFormPassword1').value;

    // Recuperar o usuário do localStorage
    const usuario = JSON.parse(localStorage.getItem(`usuario_${numero}`));

    // Validar o login
    
    
    
    if (usuario && usuario.senha === senha) {
        window.location.href = 'pagina_inicial.php'; // Redireciona para a página em branco
    } else {
        alert('Numeração ou senha incorretos!');
    }


}
