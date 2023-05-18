function AbrirSite(localDoSite) {
    window.location.href = localDoSite;
}

const Nois = [
    { nome: 'Leléo', senha: '100423'}, 
    { nome: 'Amorzinho', senha: '752895'}
];

function validarLogin() {
    const senha = document.getElementById('senhaDigitada');

    const CadastroEncontrado = Nois.find(nois => nois.senha == senha.value);
    
    if (CadastroEncontrado) {
        alert(`Bem vindo ${CadastroEncontrado.nome} seu site Amorr <3`);
        AbrirSite('vc.html');
    }
    else {
        alert('Cadastro NÃO encontrado!!');
    }
}

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    const tipoUsuario = document.getElementById('tipo-usuario').value; // Recebendo o valor do input 
    
    // Validando Alunos, Etecs, Professores, Responsáveis, Supervisores.
    if (tipoUsuario === 'vc' || tipoUsuario === 'eu') { 
        validarLogin();
    } 
});