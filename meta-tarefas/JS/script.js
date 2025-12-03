/*
Painel de Controle de Metas/Tarefas

Vocês vão criar uma página interativa para registrar metas(tarefas) e marcar quando forem concluídas.
Ao final, o projeto deve ser publicado no GitHub.
Utilizem tudo o que já aprendemos em aula com os outros exercícios e o trabalho de vocês.

1) Estrutura do projeto
    Criem uma pasta chamada painel-metas.
        Dentro dela, criem:
            index.html
            Pasta css com style.css
            Pasta js com script.js

2) HTML
    A página deve conter:
        Header:
            Um título principal: “Painel de Metas Diárias”

        Main:
            Uma section central com um pequeno formulário contendo:
                Um input de texto para o nome(título) da meta
                Um textarea para a descrição da meta
                Um select com prioridade (Baixa, Média, Alta)
                Um input do tipo data para selecionar a data que pretente realizar aquela meta
                Um botão para adicionar meta

                Uma div vazia com a classe erro

            Criem uma section com id="lista" e dentro dela uma tag <ul> com id="lista-metas"
            Cada meta deve exibir:
                Texto(título) da meta
                Descrição da meta
                Prioridade
                E a Data escolhida
                Um botão para marcar como concluída (Quando de fato for concluída)
                Um botão para remover aquela meta

        Footer:
            Nome do aluno e data
        Dica:
            Usem tags semânticas e organizem tudo' dentro de seções bem definidas.

3) CSS
    A página deve ser visualmente organizada e responsiva:
        Fundo claro e painel centralizado
        A lista de metas deve ter bordas, sombra e espaçamento adequado
        Cada prioridade deve ter uma cor diferente usando classes:
            Baixa, Media, Alta
        O item marcado como concluído deve mudar completamente de aparência
            Pode ficar com opacidade menor
            Ou ficar riscado
            Use classList.add e classList.remove para controlar isso via CSS
        Os botões devem ter efeito de hover

4) JavaScript
    No arquivo script.js, vocês devem:
        1. Capturar os elementos do formulário usando document.querySelector.
        2. Criar uma função adicionarMeta():
            Dentro da função vocês devem
            Validar se o input, o text area e a prioridade não estão vazios
                Se os campos estiverem vazios, retorna um erro para o usuário com a mensagem:
                    "Digite um título válido" ou
                    "Digite uma descrição válida" ou
                    "Selecione uma prioridade válida" ou
                    "Selecione uma data válida"
                A data não pode ser anterior ao dia atual.
                Cria um elemento <li> para cada meta adicionada contendo:
                    O texto da meta
                    A descrição da meta
                    A prioridade
                    A data escolhida
                    Botão “Concluir” e Botão “Remover”
                    Aplica uma classe correspondente à prioridade
                    Adiciona a <li> dentro da lista de metas
            2.1. Criar interação com os botões dentro de cada meta:
                Botão “Concluir” deve adicionar uma classe que muda o estilo do item
                Botão “Remover” deve apagar o item da lista
            2.2. Limpar o formulário após adicionar a meta.
        3. Adicionar eventos escutadores (addEventListener) nos botões e inputs.

5) Regras adicionais
    Se o usuário tentar adicionar uma meta vazia, mostrar um erro na tela.
    Ao marcar como concluída, o botão deve mudar o texto para “Desfazer” e voltar ao normal se clicar novamente.
    Usem apenas manipulação de classes. Sem style inline ou style dentro do HTML, vamos utilizar apenas CSS e JS externos.
    Criem pelo menos uma pequena animação de transição para quando as metas entram ou saem da lista.

6) Publicação no GitHub
    No Explorador de arquivos na pasta Documents(Documentos), criem uma pasta chamada GitHub
    Abram o GitHub Desktop.
    Criem um repositório chamado Senac dentro da pasta GitHub
    Criem uma pasta dentro da pasta Senac chamada painel-metas.
    Coloquem os arquivos dentro dele e façam:
        Commit com mensagem:
            Adiciona projeto Painel de Metas
            Push origin
    OBSERVAÇÃO: TODOS AS ATIVIDADES AGORA SERÃO REALIZADAS DENTRO DA PASTA SENAC QUE FOI CRIADA
*/

const form = document.querySelector('#formulario');
const campoTitulo = form.querySelector('#titulo');
const campoDescricao = form.querySelector('#descricao');
const campoPrioridade = form.querySelector('#prioridade'); 
const campoData = form.querySelector('#data');
const btnAdicionar = form.querySelector('#btn-adicionar');
const erro = document.querySelector('#erro');
const listaMetas = document.querySelector('#lista-metas');

function adicionarMeta(e){
    e.preventDefault();
    erro.innerText = "";

    const titulo = campoTitulo.value.trim();
    const descricao = campoDescricao.value.trim();
    const prioridade = campoPrioridade.value;
    const data = campoData.value;
    const hoje = new Date().toISOString().split('T')[0];

    if(!titulo || !descricao || !prioridade || !data || data < hoje){
        erro.innerText = 'Preencha todos os campos corretamente.';
        return;
    }

    const li = document.createElement('li');
    li.classList.add(prioridade);
    li.innerHTML = `
                <div class="item-lista">
                    <h3>${titulo}</h3>
                    <p>${descricao}</p>
                    <p><b>Prioridade: </b>${prioridade}</p>
                    <p><b>Data: </b>${data}</p>
                </div>
    `;

    const btnConcluir = document.createElement('button');
    btnConcluir.innerText = '✓';
    btnConcluir.classList.add('btn', 'btn-concluir');
    btnConcluir.addEventListener('click', function(){
        if(li.classList.contains('concluida')){
            li.classList.remove('concluida');
            btnConcluir.innerText = '✓';
        } else {
            li.classList.add('concluida');
            btnConcluir.innerText = '↵';
        }
    });
    const btnRemover = document.createElement('button');
    btnRemover.innerText = '×';
    btnRemover.classList.add('btn', 'btn-remover');
    btnRemover.addEventListener('click', function(){
        li.remove();
    });
    li.appendChild(btnConcluir);
    li.appendChild(btnRemover);

    listaMetas.appendChild(li);
    
    form.reset();
}

btnAdicionar.addEventListener('click', adicionarMeta);