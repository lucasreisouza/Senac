
document.getElementById('formCaixa').addEventListener('submit', function(event) {
    event.preventDefault();

    const nomes = document.querySelectorAll('.nome');
    const categorias = document.querySelectorAll('.categoria');
    const precos = document.querySelectorAll('.preco');
    const quantidades = document.querySelectorAll('.quantidade');

    let produtos = [];
    let totalSemDesconto = 0;
    let temAlimento = false;

    for (let i = 0; i < 3; i++) {
        const nome = nomes[i].value;
        const categoria = categorias[i].value;
        const preco = parseFloat(precos[i].value);
        const quantidade = parseInt(quantidades[i].value);
        const subtotal = preco * quantidade;

        produtos.push({ nome, categoria, quantidade, subtotal });
        totalSemDesconto += subtotal;

        if (categoria === 'Alimento') {
            temAlimento = true;
        }
    }

    let desconto = 0;

    if (temAlimento) {
        desconto += totalSemDesconto * 0.05; // 5%
    }

    if (totalSemDesconto > 500) {
        desconto += totalSemDesconto * 0.10; // 10%
    }

    const totalComDesconto = totalSemDesconto - desconto;

    let resultadoHTML = `<h2>Resumo da Compra</h2>`;
    produtos.forEach(p => {
        resultadoHTML += `
            <p><strong>${p.nome}</strong> - ${p.categoria} | Qtd: ${p.quantidade} | Subtotal: R$${p.subtotal.toFixed(2)}</p>
        `;
    });

    resultadoHTML += `
        <hr>
        <p><strong>Total sem desconto:</strong> R$${totalSemDesconto.toFixed(2)}</p>
        <p><strong>Desconto aplicado:</strong> R$${desconto.toFixed(2)}</p>
        <p><strong>Total com desconto:</strong> R$${totalComDesconto.toFixed(2)}</p>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});
