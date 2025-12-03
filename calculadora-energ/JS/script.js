const kwh = Number(prompt('Digite a quantidade de KWh consumidos:'));
const cliente = prompt('Digite o tipo de cliente (Residencial, Comercial ou Industrial):');
let valorKwh = 0
if (cliente.toLowerCase() === 'residencial') {
    valorKwh = 0.60;
} else if (cliente.toLowerCase() === 'comercial') {
    valorKwh = 0.75;
} else if (cliente.toLowerCase() === 'industrial') {
    valorKwh = 0.90;
} else {
    alert('Cliente não cadastrado!!');
}

const preco = valorKwh * kwh;
let acrescimo = 0;

if (kwh > 500) {
    acrescimo = kwh * 0.15;
}

const precoComAdicional = preco + acrescimo;

if (acrescimo > 0) {
    document.getElementById("resultado").innerHTML += `<p><b> Tipo de Cliente:</b> ${cliente}</p> 
                            <p><b>Consumo:</b> ${kwh} </p>
                            <p><b>Valor base:</b> ${preco}</p>
                            <p><b>Acréscimo:</b>${acrescimo}</p>
                            <p><b>Valor Final:</b> ${precoComAdicional} </p>`;
} else {
    document.getElementById("resultado").innerHTML += `<p><b> Tipo de Cliente:</b> ${cliente}</p> 
                            <p><b>Consumo:</b> ${kwh} </p>
                            <p><b>Valor Final:</b> ${preco} </p>`;
}