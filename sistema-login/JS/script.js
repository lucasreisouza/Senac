const usuarios = [
    { nome: 'lucas', senha: '1234' },
    { nome: 'luis', senha: '4321' },
    { nome: 'felipe', senha: '2143' }
];

const nomeEntrada = prompt('Digite o nome do seu usuário:');
const senhaEntrada = prompt('DIgite sua senha:');

const nomeEncontrado = usuarios.find(usuarios => usuarios.nome.toLocaleLowerCase() === nomeEntrada.toLocaleLowerCase() && usuarios.senha === senhaEntrada);

const mensagem = document.getElementById('mensagem');

if (nomeEncontrado) {
    mensagem.textContent = `Bem vindo, ${nomeEntrada}!`;
} else {
    alert('Usuário ou senha incorretos')
}
