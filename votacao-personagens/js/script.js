/*
Sistema de Votação de Personagens

Vocês vão criar uma página interativa onde os usuários poderão votar em um "personagem" favorito e visualizar o ranking atualizado das votações.
Ao final, o projeto deve ser publicado no GitHub.
Utilizem tudo o que já aprendemos em aula com os outros exercícios e o trabalho de vocês.

1) Estrutura do projeto
    Criem uma pasta chamada votacao-personagens.
        Dentro dela, criem:
            index.html
            Pasta css com style.css
            Pasta js com script.js
2) HTML
    A página deve conter:
        Header:
            Um título principal: "Sistema de Votação de Personagens"
        Main:
            Uma section central contendo:
                Um elemento <select> com pelo menos quatro personagens diferentes
                Um botão "Votar"
                Uma div vazia com a classe erro, onde serão exibidas mensagens de erro
            Abaixo do formulário, criem uma section com id="ranking" e dentro dela uma tag <ul> com id="lista-ranking"
            Cada item da lista deve exibir:
                Nome do "personagem" e a quantidade de votos atualizada automaticamente
        Footer:
            Nome do aluno e data
        Dica:
            Usem tags semânticas e organizem tudo dentro de seções bem definidas.
3) CSS
    A página deve ser visualmente organizada e responsiva:
        Fundo claro e conteúdo centralizado
        A lista de ranking deve possuir bordas, sombra e espaçamento adequado
        O "personagem" com maior quantidade de votos deve receber destaque visual usando uma classe especial (cor de fundo diferente, negrito ou borda)
        Os botões e selects devem ter efeito de hover
        Utilize classes para destacar o item líder do ranking

4) JavaScript
    No arquivo script.js, vocês devem:
        1. Capturar os elementos do HTML usando document.querySelector
        2. Criar um objeto com o nome de cada "personagem" e o valor 0 representando os votos iniciais
        3. Criar uma função votar():
            Validar se o usuário realmente selecionou um "personagem"
            Caso não selecione, exibir mensagem de erro na div erro e interromper a função
            Se estiver tudo correto:
                Somar +1 voto ao "personagem" escolhido
                Atualizar automaticamente a lista do ranking na tela
            Exibir o ranking sempre do maior número de votos para o menor
            O "personagem" com maior número de votos deve receber a classe de destaque ("lider")

        4. Atualizar a lista visualmente toda vez que um voto for realizado
        5. Adicionar evento de clique ao botão "Votar" com addEventListener

5) Regras adicionais
    Não é permitido votar sem selecionar um "personagem"
    A div de erro deve ser limpa quando o usuário fizer uma seleção válida
    O ranking deve reorganizar automaticamente sempre que o voto for realizado
    Não pode usar style inline ou style dentro do HTML, apenas CSS e JS externos
    A classe de destaque do líder deve aparecer apenas no "personagem" com o maior número de votos

6) Publicação no GitHub
    Se ainda não tiverem criado o repositório Senac no GitHub, vocês devem seguir o seguinte passo:

        No Explorador de arquivos, dentro da pasta Documentos, criem uma pasta chamada GitHub
        Abram o GitHub Desktop
        Criem um repositório chamado Senac dentro da pasta GitHub
        Após criarem o repositório ou para quem já tiver criado anteriormente 
            Criem uma pasta dentro da pasta Senac chamada votacao-personagens
            Coloquem o projeto dentro dessa pasta e façam:
                Commit com mensagem:
                    Adiciona projeto Sistema de Votação de Personagens
                Push origin

    OBSERVAÇÃO: TODOS OS PROJETOS SERÃO ENTREGUES EXCLUSIVAMENTE DENTRO DA PASTA SENAC
*/


const selectPersonagem = document.querySelector("#personagem");
const btnVotar = document.querySelector("#btn-votar");
const divErro = document.querySelector(".erro");
const listaRanking = document.querySelector("#lista-ranking");

// Objeto com personagens e votos
let votos = {
    "Relâmpago McQueen": 0,
    "Storm": 0,
    "Francesco": 0,
    "Cruz": 0
};

// Função para atualizar ranking
function atualizarRanking() {
    listaRanking.innerHTML = "";

    const rankingOrdenado = Object.entries(votos).sort((a, b) => b[1] - a[1]);

    rankingOrdenado.forEach(([personagem, qtdVotos], index) => {
        const li = document.createElement("li");
        li.textContent = `${personagem} - ${qtdVotos} votos`;

        if (index === 0) {
            li.classList.add("lider");
        }

        listaRanking.appendChild(li);
    });
}

// Função votar
function votar() {
    const escolhido = selectPersonagem.value;

    if (escolhido === "") {
        divErro.textContent = "Por favor, selecione um personagem!";
        return;
    }

    divErro.textContent = "";
    votos[escolhido] += 1;
    atualizarRanking();
}

btnVotar.addEventListener("click", votar);

atualizarRanking();
