// Variáveis globais
let contador = 1;

//Dados do formulário
function registrarDados(event) {
  event.preventDefault();

  // Obter os valores dos campos do formulário
  const name = document.getElementById('name').value;
  const cpf = document.getElementById('cpf').value;
  const email = document.getElementById('email').value;
  const fone = document.getElementById('fone').value;

  // Verifica campo vazio
  if (name === '' || cpf === '' || email === '' || fone === '') {
    alert('Existem campos do formulário que precisam ser preenchidos.');
    return;
  }

  // Criar uma nova linha na tabela
  const table = document.getElementById('table');
  const novaLinha = table.insertRow();

  // Adicionar as células à nova linha
  const colunaId = novaLinha.insertCell();
  const colunaNome = novaLinha.insertCell();
  const colunaCpf = novaLinha.insertCell();
  const colunaEmail = novaLinha.insertCell();
  const colunaTelefone = novaLinha.insertCell();
  const colunaAcoes = novaLinha.insertCell();

  // Definir os valores das células
  colunaId.textContent = contador;
  colunaNome.textContent = name;
  colunaCpf.textContent = cpf;
  colunaEmail.textContent = email;
  colunaTelefone.textContent = fone;
  colunaAcoes.innerHTML = '<button class="btn btn-warning" onclick="selecionarLinha(this)">Selecionar</button>';

    // Criar o botão "Excluir Linha" e adicioná-lo à coluna de ações
    const btnClear = document.createElement('button');
    btnClear.className = 'btn btn-danger';
    btnClear.textContent = 'Excluir';
    btnClear.addEventListener('click', function() {
        table.deleteRow(novaLinha.rowIndex);
    });
    colunaAcoes.appendChild(btnClear);
    
  // Incrementar o contador
  contador++;

  // Limpar os campos do formulário
  document.getElementById('name').value = '';
  document.getElementById('cpf').value = '';
  document.getElementById('email').value = '';
  document.getElementById('fone').value = '';
}

// Função para mostrar a tabela
function mostrarTabela(event) {
  event.preventDefault();

  const table = document.getElementById('table');
  table.style.display = 'table';
}

// Selecionar linha
function selecionarLinha(botao) {
  const linha = botao.parentNode.parentNode;
  linha.classList.toggle('selecionado');
}



// Corrigir Dados
function corrigirDados(event) {
  event.preventDefault();

  // Verifica se a linha está selecionada
  const table = document.getElementById('table');
  const linhas = table.getElementsByTagName('tr');

  let linhaSelecionada = null;

  for (let i = 0; i < linhas.length; i++) {
    if (linhas[i].classList.contains('selecionado')) {
      linhaSelecionada = linhas[i];
      break;
    }
  }

  if (linhaSelecionada) {
    // Obter os valores dos campos de correção
    const correcaoNome = document.getElementById('correctName').value;
    const CorrecaoCpf = document.getElementById('correctCpf').value;
    const CorrecaoEmail = document.getElementById('emailCorrect').value;
    const correcaoTelefone = document.getElementById('phoneCorrect').value;

    // Atualizar os valores da linha selecionada se os campos de correção não estiverem vazios
    if (correcaoNome !== '') {
      linhaSelecionada.cells[1].textContent = correcaoNome;
    }
    if (CorrecaoCpf !== '') {
      linhaSelecionada.cells[2].textContent = CorrecaoCpf;
    }
    if (CorrecaoEmail !== '') {
      linhaSelecionada.cells[3].textContent = CorrecaoEmail;
    }
    if (correcaoTelefone !== '') {
      linhaSelecionada.cells[4].textContent = correcaoTelefone;
    }

    // Limpar campos
    document.getElementById('correctName').value = '';
    document.getElementById('correctCpf').value = '';
    document.getElementById('emailCorrect').value = '';
    document.getElementById('phoneCorrect').value = '';

    // Remover a seleção da linha
    linhaSelecionada.classList.remove('selecionado');
  } else {
    alert('Selecione uma linha para correção.');
  }
}



// Excluir linha
function excluirLinha(event) {
  event.preventDefault();

  // Verificar se alguma linha está selecionada
  const tabela = document.getElementById('tabela');
  const linhas = tabela.getElementsByTagName('tr');

  let linhaSelecionada = null;

  for (let i = 0; i < linhas.length; i++) {
    if (linhas[i].classList.contains('selecionado')) {
      linhaSelecionada = linhas[i];
      break;
    }
  }

  if (linhaSelecionada) {
    tabela.deleteRow(linhaSelecionada.rowIndex);
  } else {
    alert('Selecione uma linha para excluir os dados.');
  }
}

// Eventos
document.getElementById('btnRegistrar').addEventListener('click', registrarDados);
document.getElementById('btnMostrarTabela').addEventListener('click', mostrarTabela);
document.getElementById('btnCorrigir').addEventListener('click', corrigirDados);
document.getElementById('btnExcluirLinha').addEventListener('click', excluirLinha);
