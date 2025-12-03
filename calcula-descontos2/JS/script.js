/* Vocês devem criar uma página web que calcule o valor fianl de um produto com base na forma de pagamento escolhida.

1) Estrutura do projeto
    Crie uma pasta chamada calculadora-descontos.
    Dentro de, criem:
        index.html
        pasta "css" > style.css
        pasta "js" > script.js

2) HTML - Monte uma estrutura básica:
    Um título principal com o nome "Calculadora de Descontos"
    Um campo de input para digitar o valor do produto
    Um campo select com as opções:
        À vista (dinheiro ou pix) - 10% de desconto
        Cartão de crédito - acréscimo de 5%
        Parcelado em 2x - sem dsconto
        Parcelado em 3x ou mais - acréscimo de 10%
    Um botão "calcular valor final"
    Uma div <div id="resultado"></div> para mostrar o resultado

3) CSS
    Deixem a página organizada e responsiva:
        Estilize da sua forma, seja criativo!
        Texto de resultado com cores diferentes dependendo do tipo:
            Verde para desconto
            Vermelho para acréscimo
            Laranja para sem desconto

4) JavaScript
    No arquivo script.js:
        Capture os elementos HTML com document.querySelector.
        Crie uma função chamada calculadoraValorFinal().
        Dentro dela:
            Pegue o valor digitado no input e a opção escolhida no select.
            Verifique:
                - Se for "À vista" -> aplique 10% de desconto (preco * 0.9)
                - Se for "Cartão de crédito" -> aplique 5% de acrécimo (preco * 1.05)
                - Se for "2x" -> valor sem alteração
                - Se for "3x ou mais" -> aplique 10% de acréscimo (preco * 1.10)
            Exiba o resultado formatado no div
        Adicione um event listener no botão para chamar a função ao clicar. */

const campoPreco = document.querySelector('#preco');
const opcoesPagamento = document.querySelector('#pagamento');
const btn = document.querySelector('#btn');
const resultado = document.querySelector('#resultado');

function calcularValorFinal(){
    const preco = parseFloat(campoPreco.value);
    const pagamento = opcoesPagamento.value;

    if(isNaN(preco) || preco <= 0 || pagamento === ""){
        resultado.innerHTML = '<p class="acrescimo">Por favor, preencha todos os campo corretamente.</p>';
        return;
    }

    let valorFinal = preco;
    let mensagem = "";
    let classe = "";
    let valorParcelado;

    if(pagamento === 'avista'){
        valorFinal = preco * 0.9;
        mensagem = "Você recebeu um desconto de 10%";
        classe = 'desconto';
    } else if(pagamento === 'credito'){
        valorFinal = preco;
        mensagem = "Compra realizada no crédito, não aplica desconto.";
        classe = 'semDesconto';
    } else if(pagamento === '2x'){
        valorFinal = preco * 1.05;
        valorParcelado = valorFinal / 2;
        mensagem = `Compra realizada em 2x, acrescimo de 5%.
        Valor de cada parcela: ${valorParcelado.toFixed(2).replace('.', ',')}`;
        classe = 'acrescimo';
    } else if(pagamento === '3x'){
        valorFinal = preco * 1.10;
        valorParcelado = valorFinal / 3;
        mensagem = `Compra realizada em 3x, acrescimo de 10%
        Valor de cada parcela: ${valorParcelado.toFixed(2).replace('.', ',')}`;
        classe = 'acrescimo';
    }

    resultado.innerHTML = `<p class="${classe}">${mensagem}</p>
    <p>Valor final: <b>R$ ${valorFinal.toFixed(2).replace('.', ',')}</b></p>
    `;

}

btn.addEventListener('click', calcularValorFinal);
