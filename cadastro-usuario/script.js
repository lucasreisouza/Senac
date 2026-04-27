// ===== SELEÇÃO DOS ELEMENTOS =====
const formulario     = document.getElementById('formCadastro');
const inputNome      = document.getElementById('inputNome');
const inputIdade     = document.getElementById('inputIdade');
const btnLimpar      = document.getElementById('btnLimpar');
const areaResultado  = document.getElementById('areaResultado');
const listaUsuarios  = document.getElementById('listaUsuarios');
const tituloLista    = document.getElementById('tituloLista');


// ===== FUNÇÃO: MOSTRAR MENSAGEM DE RESULTADO =====
function mostrarMensagem(texto, tipo) {
  areaResultado.textContent = texto;
  areaResultado.className   = 'visivel ' + tipo;
}

function limparMensagem() {
  areaResultado.textContent = '';
  areaResultado.className   = '';
}


// ===== EVENTO: SUBMIT DO FORMULÁRIO =====
formulario.addEventListener('submit', function(event) {

  // Impede o recarregamento da página
  event.preventDefault();

  // Captura os valores dos campos
  const nome  = inputNome.value.trim();
  const idade = inputIdade.value.trim();


  // ----- VALIDAÇÕES -----

  // 1. Campos vazios
  if (nome === '' || idade === '') {
    mostrarMensagem('⚠️ Preencha todos os campos.', 'erro');
    return;
  }

  // Converte idade para número
  const idadeNum = Number(idade);

  // 2. Idade inválida (negativa)
  if (idadeNum < 0) {
    mostrarMensagem('⚠️ A idade não pode ser negativa.', 'erro');
    return;
  }

  // 3. Idade acima do limite
  if (idadeNum > 120) {
    mostrarMensagem('⚠️ A idade não pode ser maior que 120.', 'erro');
    return;
  }


  // ----- LÓGICA: MENOR OU MAIOR DE IDADE -----

  let tipo;
  let classeTipo;
  let classeItem;
  let classeIdade;

  if (idadeNum < 18) {
    tipo       = 'Menor de idade';
    classeTipo = 'menor';
    classeItem = 'item-menor';
    classeIdade = 'idade-menor';
    mostrarMensagem(`✔ ${nome} adicionado(a) como menor de idade.`, 'menor');
  } else {
    tipo       = 'Maior de idade';
    classeTipo = 'maior';
    classeItem = 'item-maior';
    classeIdade = 'idade-maior';
    mostrarMensagem(`✔ ${nome} adicionado(a) como maior de idade.`, 'maior');
  }


  // ----- ADICIONAR NA LISTA -----

  // Cria o elemento <li>
  const itemLista = document.createElement('li');
  itemLista.className = 'item-usuario ' + classeItem;

  // Monta o HTML interno do item
  itemLista.innerHTML = `
    <div class="item-info">
      <span class="item-nome">${nome}</span>
      <span class="item-idade">${idadeNum} anos</span>
    </div>
    <span class="item-idade ${classeIdade}">${tipo}</span>
  `;

  // Adiciona o item na lista (sem apagar os anteriores)
  listaUsuarios.appendChild(itemLista);

  // Exibe o título da lista se ainda estava oculto
  tituloLista.classList.remove('oculto');


  // ----- LIMPA OS CAMPOS DO FORMULÁRIO -----
  formulario.reset();
  inputNome.focus();
});


// ===== EVENTO: BOTÃO LIMPAR =====
btnLimpar.addEventListener('click', function() {
  // Apaga todos os itens da lista
  listaUsuarios.innerHTML = '';

  // Oculta o título da lista
  tituloLista.classList.add('oculto');

  // Limpa a mensagem de resultado
  limparMensagem();

  // Reseta os campos do formulário
  formulario.reset();
});
