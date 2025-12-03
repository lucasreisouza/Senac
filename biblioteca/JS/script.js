const livros = [];
const form = document.querySelector('#formulario');
const lista = document.querySelector('#lista');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const titulo = document.querySelector('#titulo').value;
    const autor = document.querySelector('#autor').value;
    const ano = document.querySelector('#ano').value;
    const livro = { titulo, autor, ano };
    livros.push(livro);
    mostrarLivro();
    form.reset();
});

function criaP() {
    const p = document.createElement('p');
    return p;
}

function mostrarLivro() {
    lista.innerHTML = "";
    // contador === indice === i
    for (let indice = 0; indice < livros.length; indice++) {
        const livro = livros[indice];     // se   else
        const card = document.createElement('div');
        card.classList.add('card');
        const p = criaP();
        if (livro.ano < 2000) {
            card.classList.add('classico');
            criaP();
            p.classList.add('classic');
            p.innerHTML = 'Clássico';
        } else if (livro.ano >= 2000) {
            card.classList.add('moderno');
            criaP();
            p.classList.add('moderno');
            p.innerHTML = 'Moderno';
        }
        card.appendChild(p);
        card.innerHTML += `
            <h3>Titulo: 
            ${livro.titulo} 
            </h3>
            <hr>
            <p>Autor:
            ${livro.autor}
            </p>
        <p>Ano:${livro.ano}</p>`;
        lista.appendChild(card);
    }
}