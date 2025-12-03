document.getElementById('formDesconto').addEventListener('submit', function(event) {
            event.preventDefault();

            const produto = document.getElementById('produto').value;
            const preco = parseFloat(document.getElementById('preco').value);
            const tipoCliente = document.getElementById('tipoCliente').value;

            let desconto = 0;

            if (tipoCliente === 'Estudante') {
                desconto = preco * 0.10;
            } else if (tipoCliente === 'Assinante') {
                desconto = preco * 0.20;
            }

            const precoFinal = preco - desconto;

            document.getElementById('resultado').innerHTML = `
                <h2>Resultado</h2>
                <p><strong>Produto:</strong> ${produto}</p>
                <p><strong>Cliente:</strong> ${tipoCliente}</p>
                <p><strong>Preço original:</strong> R$${preco.toFixed(2)}</p>
                <p><strong>Desconto aplicado:</strong> R$${desconto.toFixed(2)}</p>
                <p><strong>Preço final:</strong> R$${precoFinal.toFixed(2)}</p>
            `;
               });