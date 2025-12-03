const reservas = []
const form = document.querySelector(`#formulario`);
const lista = document.querySelector(`#lista`);
form.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const nome = document.querySelector('#nome').value;
    const data = document.querySelector('#data').value;
    const destino = document.querySelector('#destino').value;
    const reserva = { nome, data, destino };
    reservas.push(reserva);
    mostrarReservas();
    form.reset();
});

function mostrarReservas() {
    lista.innerHTML = ``;
    const hoje = new Date().toISOString().split(`T`)[0];
    for (let indice = 0; indice < reservas.length; indice++) {
        const reserva = reservas[indice];
        let msg = ``;
        if (reserva.data === hoje) {
            msg = `A viagem é hoje`;
        } else if (reserva.data < hoje) {
            msg = `Data inválida!`;
        } else {
            msg = `Viagem confirmada`;
        }
        const formataData = hoje.split(`-`).reverse().join(`/`);
        lista.innerHTML += `
        <div class="card" style="margin-top: 10px">
            <h3><b> ${reserva.nome} </b></h3>
            <p> ${reserva.data} </p>
            <p> Destino: <span>${reserva.destino} - ${msg}</span></p>
        </div>
        `;
    }
};