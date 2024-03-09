var op = parseInt(prompt("Digite um número inteiro ou 0 (zero) para sair"));

var qtdeNumerosDigitados = 0;

while (op != 0) {
    console.log("Vc digitou " + op);
    qtdeNumerosDigitados++;

    var op = parseInt(prompt("Digite um número inteiro ou 0 (zero) para sair"));
}

console.log("Qtde de números digitados: " + qtdeNumerosDigitados);

