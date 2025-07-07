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
