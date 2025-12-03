const nome = prompt('Digite seu nome completo:');
const saldo = Number(prompt('Digite seu saldo incial:'));
const saque = Number(prompt('Qual o valor que você deseja sacar?'));
let saldoFinal = saldo - saque;

if (saque > saldo){
    alert(`SALDO INSUFICIENTE!!! SEU SALDO É ${saldo}.`);
} else {
    alert(`Saque realizado com sucesso. Seu saldo é de ${saldoFinal}.`);
}

document.getElementById("status").innerHTML += 
`<p><b> Cliente:</b> <span> ${nome}</span></p> 
 <p><b> Saldo Incial:</b> <span>${saldo}</span> </p> 
 <p><b> Saque:</b> <span>${saque}</span> </p> 
 <p><b> Novo Saldo:</b> <span>${saldoFinal}</span> </p>`