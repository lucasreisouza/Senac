/*  1) Estrutura do projeto
      Criem uma pasta chamada painel-frases.
      Dentro dela, criem: 
        index.html
        pasta 1 com o nome css > dentro da pasta Style.css
        pasta 2 com nome js > dentro da pasta Script.js

2) HTML
    Monte uma estrutura básica:
        Uma tag header com:
            <h1>"Frases Motivacionais"</h1>
        Uma tag main com:
            Uma section e dentro dela:
                Um parágrafo onde a frase será exibida <p id="frase">
                Um botão com o texto Gerar nova frase
        Um rodapé (footer) simples com o nome de vocês e a data do dia

    Dica:
    Usem tags semânticas e organizem o conteúdo dentro de uma <section> centralizada.

3) CSS
    Deixem a página visualmente agradável e responsiva:
        Findo com uma cor suave (pode ser gradiente)
        Centralizem com o conteúdo na tela 
        Apliquem bordas arredondadas e sombra leve no painel
        Deixem o texto da frase em destaque
        Quando tiver interação com o botão (hover), mode a cor dele 

    Dica:
    Usem classes e IDs para estilizar.
    evitem usar style direto no html. 

4) JavaScript
    No arquivo script.js:
    Criem um array com pelomenos 6 frases motivacionais (cada frese é um texto dentro de aspas).
    Exemplo:
        const frase = [
            "Acredite no seu potencial!",
            "Você é capaz de ir além". 
        ];

    Usem document.querySelector para pegar o botão e o paragrafo da frase. 
    Criem uma fução camada gerarFrase() que:
        Escolhe uma frase aleatória do array (Math.ramdom() e Math.floor() vão ajudar);
        Substitui o texto do parágrafo (innerText) pela frase escolhida.
        Adicionem um event listener ao botão (addEventListener("click", gerarFrase)). 

    Dica:
    Podem testar no console.log() antes de aplicar no HTML. 

5) Publicação no GitHub 
    Abram o GitHub Desktop.
    Criem um novo repositório do projeto para dentro da pasta do repositório. 

    Façam:
        Comit com mensagem: Adiciona projeto Painel de Frases motivacionais
        Push origin 

*/

const frases = [
    "🌟 Acredite no seu potencial e vá além do que esperam de você",
    "💪 Cada desafio é uma chance de crescer.",
    "🔥 Não espere por oportunidades, crie-as.",
    "🌈 O impossível é apenas o possível que ainda não foi tentado.",
    "🌻 Você é mais forte do que imagina.",
    "🚀 Sonhe grande, comece pequeno, mas comece hoje.",
    "💫 Quem nunca desiste, sempre chega lá.",
    "🌞 Faça o seu melhor e o resto vem naturalmente.",
    "🏆 O sucesso é feito de persistência, não de sorte.",
    "✨ Cada novo dia é uma nova chance de recomeçar."
];
const paragrafo = document.querySelector('#frase');
const botao = document.querySelector('button');

function gerarFrase() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    const fraseEscolhida = frases[indiceAleatorio];
    paragrafo.innerHTML = fraseEscolhida;
}

botao.addEventListener("click", gerarFrase);
