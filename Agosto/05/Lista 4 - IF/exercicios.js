// Lista de Exercícios – IF

// 1)	Faça um programa que o usuário informe o salário recebido e o total gasto. Deverá ser exibido na tela “Gastos dentro do orçamento” caso o valor gasto não ultrapasse o valor do salário e “Orçamento estourado” se o valor gasto ultrapassar o valor do salário.

var salariorecebido = parseFloat(prompt("Qual foi o salário recebido?"));
var totalgasto = parseFloat(prompt("Qual foi o total gasto?"));

if (salariorecebido > totalgasto) {
    alert("Gastos dentro do orçamento");
} else if (totalgasto > salariorecebido) {
    alert("Orçamento estourado");
}

// 2)	Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso. 

var turno = prompt("Em que turno você estuda? M-matutino ou V-vespertino ou N-noturno");

if (turno == "M") {
    alert("Bom dia!");
} else if (turno == "V") {
    alert("Boa tarde!");
} else if (turno == "N") {
    alert("Boa noite!");
}

// 3)	As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

var macascompradas = parseInt(prompt("Quantas maçãs você comprou?"));
var precomacas = 0;

if (macascompradas < 12) {
    precomacas = 0.30;
} else if (macascompradas >= 12) {
    precomacas = 0.25;
}
alert("O preço total é de: " + macascompradas * precomacas + " Reais");

// 4)	Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes Fórmulas:
// •	Para homens: (72.7 * Altura) – 58 
// •	Para mulheres: (62.1 * Altura) – 44.7

var sexo = parseInt(prompt("Digite seu sexo: 1: feminino 2: masculino"));
var altura = parseFloat(prompt("Digite sua altura"));
var pesoideal = 0;

if (sexo == 1) {
    pesoideal = (62.1 * altura) - 44.7;
} else if (sexo == 2) {
    pesoideal = (72.7 * altura) - 58;    
}

alert("O seu peso ideal é de: " + pesoideal + "KG");

// 5)	Um posto está vendendo combustíveis com a seguinte tabela de descontos:   
// Álcool:
//     	Até 20 litros: desconto de 3% por litro
//  	Acima de 20 litros: Desconto de 5% por litro 99.
// Gasolina:
// Até 20 litros: desconto de 4% por litro
// Acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos, o valor do litro de combustível e o tipo de combustível (codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente.  

var combustiveis = prompt("Digite o tipo de combustível que deseja como A-álcool e G-gasolina");
var litrosvendidos = parent(prompt("Qauntos litros foram vendidos?"));
var precolitro = 0;

if (combustiveis == "A" && litrosvendidos <= 20) {
    precolitro = litrosvendidos * 0.3;
} else (combustiveis == "A" && litrosvendidos > 20) {
    precolitro = litrosvendidos * 0.5;
}

// 6)	Faça um algoritmo que leia do usuário, os nomes de dois times e o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.


// 7)	As organizações CSM resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes.  
// Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual;
// •	b. Salários até R$ 2800,00 (incluindo): aumento de 20%;
// •	c. Salários entre R$ 2800,00 e R$7000,00: aumento de 15%;
// •	d. Salários entre R$ 7000,00 e R$ 15000,00: aumento de 10%;
// •	e. Salários de R$ 15000,00 em diante: aumento de 5%
// Após o aumento ser realizado; informe na tela;
// •	O salário antes do reajuste;
// •	O percentual de aumento aplicado;
// •	O valor do aumento;
// •	O novo salário, após o aumento.  

// 8)	Faça um programa para o cálculo de uma folha de pagamento, sabendo que os descontos são do imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do salário bruto, mas não é descontado (é a empresa que deposita.)
// O salário líquido corresponde ao salário bruto menos os descontos O programa deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// a. Desconto do IR;
// b. Salário Bruto ate R$900,00 (inclusive) – Isento;
// c. Salário Bruto de R$ 1500, 00 (inclusive) – desconto de 5%;
// d. Salario bruto até R$ 2500,00 (Inclusive) – desconto de 10%;
// e. Salário bruto acima de 2500 – Desconto de 20%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo, no exemplo valor da hora é 5 e a quantidade de horas é 220.  
// Salário bruto (5 * 220)           : R$   1100,00
// ( – ) IR (5%)                     : R$     55,00
// ( – ) INSS ( 10% )                 : R$     110,00
// FGTS ( 11%)                       : R$     121,00
// Total de descontos                 : R$     165,00
// Salário Líquido                   : R$     935,00    
