//1)	Faça um Programa que leia um número e exiba o dia correspondente da semana. (1- Domingo, 2- Segunda etc.) se digitar outro valor deve aparecer “valor inválido”)

var diaSemana = Number(prompt("Digite o dia da semana entre 1 e 7"));

if (diaSemana == 1) {
    alert("Domingo");
} else if (diaSemana == 2) {
    alert("Segunda");
} else if (diaSemana == 3) {
    alert("Terça");
} else if (diaSemana == 4) {
    alert("Quarta");
} else if (diaSemana == 5) {
    alert("Quinta");
} else if (diaSemana == 6) {
    alert("Sexta");
} else if (diaSemana == 7) {
    alert("Sábado");
} else {
    alert("Valor inválido");
}


//2)	Faça um programa que pergunte o nome e o preço de três produtos e informe qual produto você deve comprar, sabendo que a decisão é sempre o mais barato.  

var Produto1 = prompt("Digite o nome do produto 1:");
var precoProduto1 = parseFloat(prompt("Digite o preço do produto 1:"));
var Produto2 = prompt("Digite o nome do produto 2:");
var precoProduto2 = parseFloat(prompt("Digite o preço do produto 2:"));
var Produto3 = prompt("Digite o nome do produto 3:");
var precoProduto3 = parseFloat(prompt("Digite o preço do produto 3:"));

if (precoProduto1 < precoProduto2 && precoProduto1 < precoProduto3) {
    alert("Você deve comprar o Produto: " + Produto1);
} else if (precoProduto2 < precoProduto1 && precoProduto2 < precoProduto3) {
    alert("Você deve comprar o Produto: " + Produto2);
} else {
    alert("Você deve comprar o Produto: " + Produto3);
}

//3 )	O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa. Este índice é obtido pelo peso (em kg) dividido pelo quadrado da altura (em metros). A tabela a seguir apresenta as faixas deste índice:
//IMC	Avaliação
//<20	Abaixo do normal
//Entre 20 e 25 	Normal
//> 25 e 30	Sobrepeso
//> 30 e 35	Obesidade leve
//> 35 e 40	Obesidade moderada
//> 40	Obesidade mórbida
//Faça um programa que solicita o peso e a altura de uma pessoa, calcule o IMC, apresente o seu valor e a avaliação.

var peso = parseFloat(prompt("Digite seu peso em KG"));
var altura = parseFloat(prompt("Digite sua altura em Metros"));
var IMC = peso / (altura * altura);

if (IMC < 20) {
    alert("O seu IMC (índice de massa corpórea) é de " + IMC + " então você você está Abaixo do Normal");
} else if (IMC >= 20 && IMC <= 25 ) {
    alert("O seu IMC (índice de massa corpórea) é de " + IMC + " então você está Normal");
} else if (IMC > 25 && IMC <= 30 ) {
    alert("O seu IMC (índice de massa corpórea) é de " + IMC + " então você está com Sobrepeso");
} else if (IMC > 30 && IMC <= 35 ) {
    alert("O seu IMC (índice de massa corpórea) é de " + IMC + " então você está com Obesidade leve");
} else if (IMC > 35 && IMC <= 40 ) {
    alert("O seu IMC (índice de massa corpórea) é de " + IMC + " então você está com Obesidade Moderada");
} else if (IMC > 40) {
    alert("O seu IMC (índice de massa corpórea) é de " + IMC + " então você está com Obesidade Mórbida");
} else {
    alert("Valor inválido");
}
