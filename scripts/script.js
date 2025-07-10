// calculadora

// função para limpar os valores dos campos de entrada e resultado
function limparValores() {
  document.getElementById("n1").value = "0";
  document.getElementById("n2").value = "0";
  document.getElementById("resultado").value = "0";
}

// função para calcular o fatorial de um número
// se o número for negativo, retorna uma mensagem de erro
function fatorial(n) {
  if (n < 0) return "Não existe!";
  if (n === 0 || n === 1) return 1;
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// função para calcular a operação selecionada
// recebe a operação como parâmetro e realiza o cálculo com os números fornecidos
function calcular(operacao) {
  const n1 = parseFloat(document.getElementById("n1").value);
  const n2 = parseFloat(document.getElementById("n2").value);
  let resultado = "";
  // Validação: só aceita números
  if (isNaN(n1) || isNaN(n2)) {
    resultado = "Digite apenas números!";
  } else {
    switch (operacao) {
      case "soma":
        resultado = n1 + n2;
        break;
      case "subtrair":
        resultado = n1 - n2;
        break;
      case "multiplicar":
        resultado = n1 * n2;
        break;
      case "dividir":
        resultado = n2 !== 0 ? n1 / n2 : "Divisão por zero!";
        break;
      case "radical":
        resultado = n1 >= 0 ? Math.sqrt(n1) : "Raiz de número negativo!";
        break;
      case "porcento":
        resultado = (n1 * n2) / 100;
        break;
      case "potencia":
        resultado = Math.pow(n1, n2);
        break;
      case 'fatorar':
        if (n1 < 0 || n2 < 0) {
          resultado = 'Fatoração de número negativo não é suportada!';
        } else {
          resultado = `${n1}! = ${fatorial(n1)} | ${n2}! = ${fatorial(n2)}`;
        }
        break;
    }
  }
  document.getElementById("resultado").value = resultado;
}


// dinamismo da tabela de jogos botão para trocar a cor
// Aguarda o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão responsável por trocar a cor da tabela
    const btnCor = document.getElementById('btn-trocar-cor');
    // Seleciona a tabela de jogos pelo ID
    const tabela = document.getElementById('tabela-jogos');
    // Variável de controle para saber se a cor alternada está ativa
    let corAlternada = false;
    // Adiciona um ouvinte de evento de clique ao botão
    btnCor.addEventListener('click', function() {
        // Inverte o valor de corAlternada (true/false)
        corAlternada = !corAlternada;
        // Se corAlternada for true, adiciona a classe que muda a cor da tabela
        if (corAlternada) {
            tabela.classList.add('tabela-alternada');
        } else {
            // Se for false, remove a classe e volta à cor original
            tabela.classList.remove('tabela-alternada');
        }
    });
});

// Dinamismo de rank dos jogos
// Função para ordenar a lista de jogos em ordem crescente ou decrescente
function ordenarLista(ordem) {
    // Seleciona a lista de jogos pelo ID
    const lista = document.getElementById('lista-jogos');
    // Cria um array com todos os itens <li> da lista
    let itens = Array.from(lista.getElementsByTagName('li'));
    // Ordena os itens de acordo com o texto e a ordem escolhida
    itens.sort((a, b) => {
        // Se o texto de 'a' for menor que o de 'b'
        if (a.textContent < b.textContent) return ordem === 'asc' ? -1 : 1;
        // Se o texto de 'a' for maior que o de 'b'
        if (a.textContent > b.textContent) return ordem === 'asc' ? 1 : -1;
        // Se forem iguais, mantém a posição
        return 0;
    });
    // Limpa todos os itens atuais da lista
    lista.innerHTML = '';
    // Adiciona os itens já ordenados de volta à lista
    itens.forEach(li => lista.appendChild(li));
    // Altera a cor de fundo e do texto da lista conforme a ordem escolhida
    if (ordem === 'asc') {
        lista.style.background = '#e9f7fe'; // Azul claro para crescente
        lista.style.color = '#2c3e50';      // Texto escuro
    } else {
        lista.style.background = '#ffe0b2'; // Amarelo claro para decrescente
        lista.style.color = '#b35400';      // Texto marrom
    }
}

// Função para validar o formulário de contato
function validarFormulario() {
    // Pegando valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const contato = document.getElementById('contato').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim();
    const termos = document.getElementById('termos').checked;

    // Validação de campos vazios
    if (!nome) {
        alert('Por favor, preencha o campo Nome.');
        return false;
    }
    if (!sobrenome) {
        alert('Por favor, preencha o campo Sobrenome.');
        return false;
    }
    if (!email) {
        alert('Por favor, preencha o campo E-mail.');
        return false;
    }
    if (!contato) {
        alert('Por favor, preencha o campo Contato.');
        return false;
    }
    if (!comentarios) {
        alert('Por favor, preencha o campo Comentários.');
        return false;
    }
    if (!termos) {
        alert('Você deve concordar com os termos.');
        return false;
    }

    // Se tudo estiver preenchido
    alert('Cadastro realizado com Sucesso.');
    return true;
}