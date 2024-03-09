var custo = parseInt( prompt("Digite o custo de fábrica:") );
var porcentagem = 28 / 100;
var imposto = 45 / 100;
var valorfinal = custo + (custo * porcentagem) + (custo * imposto);

console.log("Custo ao consumidor: " + valorfinal);

//correção
var custoFabrica = parseFloat(prompt("Digite o custo de fábrica"));
var valorImposto = custoFabrica * (45/100);
var perDistribuidor = custoFabrica * (28/100);

var valorFinal = custoFabrica + valorImposto + perDistribuidor;

alert("Valor final: " + valorFinal);