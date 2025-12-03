const form = document.querySelector('#form-parcelas');
const resultado = document.querySelector(`#resultado`);
form.addEventListener(`submit`, function(e){
    e.preventDefault();
    const valorTotal =  Number(form.querySelector('#valor').value);
    const qtdParcelas =  Number(document.querySelector('#qtd').value);

    if(qtdParcelas < 1 || qtdParcelas > 12) {
        resultado.innerHTML = 'A quantidade deve ser entre 1 e 12';
        return;
    }
    const valorParcelado = valorTotal / qtdParcelas;
    resultado.innerHTML = '';
    const hoje = new Date();
    for(let i = 1; i < qtdParcelas; i++){
        const vencimento = new Date(hoje);
        vencimento.setMonth(vencimento.getMonth() + (i - 1));
        const diaSemana = vencimento.getDay();
        let status = '';
        if(diaSemana === 0 || diaSemana === 6){
            status = '(vencimento adiado)';
        }
        const dia = String(vencimento.getDate()).padStart(2, '0');
        const mes = String(vencimento.getMonth() + 1).padStart(2, '0');
        const ano = vencimento.getFullYear();
        resultado.innerHTML += `
            <p>
            ${i}ª Parcela - R$${valorParcelado.toFixed(2)} - 
            vencimento: ${dia}/${mes}/${ano}<br>${status}
            </p>
        `}
});
    