// Lista de Exercícios – IF

// 1)	Faça um programa que o usuário informe o salário recebido e o total gasto. Deverá ser exibido na tela “Gastos dentro do orçamento” caso o valor gasto não ultrapasse o valor do salário e “Orçamento estourado” se o valor gasto ultrapassar o valor do salário.

var salariorecebido = parseFloat(prompt("Qual foi o salário recebido?"));
var totalgasto = parseFloat(prompt("Qual foi o total gasto?"));

if (totalgasto <= salariorecebido) {
    alert("Gastos dentro do orçamento");
} else {
    alert("Orçamento estourado");
}

// 2)	Faça um programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-vespertino ou N-noturno. Imprima a mensagem “Bom dia!” ou  “Boa Noite” ou “Valor inválido”, conforme o caso. 

var turno = prompt("Em que turno você estuda? M-matutino ou V-vespertino ou N-noturno");

if (turno.toUpperCase() == "M") {
    alert("Bom dia!");
} else if (turno.toUpperCase() == "V") {
    alert("Boa tarde!");
} else if (turno.toUpperCase() == "N") {
    alert("Boa noite!");
} else {
    alert("Valor inválido");
}

alert(turno);

// 3)	As maçãs custam R$ 0,30 cada se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

var macasCompradas = parseInt(prompt("Quantas maçãs você comprou?"));
var precoMacas = 0;

if (macasCompradas < 12) {
    precoMacas = 0.30;
} else if (macasCompradas >= 12) {
    precoMacas = 0.25;
}

var valorTotal = (macasCompradas * precoMacas)
alert("O preço total é de: " + valorTotal + " Reais");

// 4)	Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes Fórmulas:
// •	Para homens: (72.7 * Altura) – 58 
// •	Para mulheres: (62.1 * Altura) – 44.7

var sexo = parseInt(prompt("Digite seu sexo: 1: feminino 2: masculino"));
var altura = parseFloat(prompt("Digite sua altura"));
var pesoIdeal = 0;

if (sexo == 1) {
    pesoIdeal = (62.1 * altura) - 44.7;
    alert("O seu peso ideal é de: " + pesoIdeal + "KG"); 
} else if (sexo == 2) {
    pesoIdeal = (72.7 * altura) - 58;   
    alert("O seu peso ideal é de: " + pesoIdeal + "KG"); 
} else {
    alert("Sexo inválido")
}

// 5)	Um posto está vendendo combustíveis com a seguinte tabela de descontos:   
// Álcool:
//     	Até 20 litros: desconto de 3% por litro
//  	Acima de 20 litros: Desconto de 5% por litro 99.
// Gasolina:
// Até 20 litros: desconto de 4% por litro
// Acima de 20 litros, desconto de 6% por litro
// Escreva um algoritmo que leia o número de litros vendidos, o valor do litro de combustível e o tipo de combustível (codificado da seguinte forma: A-álcool. G-gasolina), calcule e imprima o valor a ser pago pelo cliente.  

var tipoCombustivel = prompt("Digite o tipo de combustível que deseja como A-álcool e G-gasolina");
var litrosVendidos = parseFloat(prompt("Quantos litros foram vendidos?"));
var precoLitro = parseFloat(prompt("Digite o proço do combustível"));

var valoTotalSemDesconto = precoLitro * litrosVendidos;
var valorTotalComDesconto = 0;

if (tipoCombustivel == "A") {
    
    if (litrosVendidos <= 20) {
        valorTotalComDesconto = valoTotalSemDesconto - (valoTotalSemDesconto * 0.03);
    } else {
        valorTotalComDesconto = valoTotalSemDesconto - (valoTotalSemDesconto * 0.05);
    }

} else if (tipoCombustivel == "G") {
    if (litrosVendidos >= 20) {
        valorTotalComDesconto = valoTotalSemDesconto - (valoTotalSemDesconto * 0.04);
    } else {
        valorTotalComDesconto = valoTotalSemDesconto - (valoTotalSemDesconto * 0.06);
    }

} 

alert ("O valor total é de " + valorTotalComDesconto + " reais");

// 6)	Faça um algoritmo que leia do usuário, os nomes de dois times e o placar de um jogo de futebol (os gols de cada time) e informa se o resultado foi um empate, se a vitória foi do primeiro time ou do segundo time.

var timeA = prompt("Digite o primeiro time");
var timeB = prompt("Digite o segundo time");
var golTimeA = parseInt(prompt("Quantos gols fez o primeiro time?"));
var golTimeB = parseInt(prompt("Quantos gols fez o segundo time?"));

if (golTimeA > golTimeB) {
    alert("Vitória do time " + timeA);
} else if (golTimeB > golTimeA) {
    alert("Vitória do time " + timeB);
} else {
    alert("Empate")
}


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


var salarioInicial = parseFloat(prompt("Qual foi o salário inicial?"));
var salarioFinal = 0;
var percentualAumento = 0;
var valorAumento = 0;

if (salarioInicial <= 2800) {
    percentualAumento = 0.20;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
} else if (salarioInicial > 2800 && salarioInicial <= 7000) {
    percentualAumento = 0.15;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
} else if (salarioInicial > 7000 && salarioInicial <= 15000) {
    percentualAumento = 0.10;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
} else if (salarioInicial > 15000) {
    percentualAumento = 0.05;
    valorAumento = salarioInicial * percentualAumento;
    salarioFinal = salarioInicial + valorAumento;
}

alert("Sálario antes do reajuste R$" + salarioInicial + ",00");
alert("Percentual de aumento aplicado " + percentualAumento * 100 + "%");
alert("O valor de aumento é de R$" + valorAumento + ",00");
alert("Sálario final é de R$" + salarioFinal + ",00");

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
// ( – ) INSS ( 10% )                : R$     110,00
// ( - ) Sindicato (3%)              : R$     xx.xx

// FGTS ( 11%)                       : R$     121,00



// Total de descontos                 : R$     165,00
// Salário Líquido                   : R$     935,00    

var hora = parseFloat(prompt("Qual é o valor da sua hora?"));
var horasTrabalhadas = parseFloat(prompt("Qual é a quantidade de horas trabalhadas no mês?"));

var salarioBruto =  hora * horasTrabalhadas;

var descontoIR = 0;

var descontoINSS = salarioBruto * 0.10;
var descontoSindicato = salarioBruto * 0.03 ;
var descontoFGTS = salarioBruto * 0.11;


if (salarioBruto <= 900) {
    descontoIR = 0;
} else if (salarioBruto > 900  && salarioBruto <= 1500) {
    descontoIR = salarioBruto * 0.05;
} else if (salarioBruto > 1500 && salarioBruto <= 2500) {
    descontoIR = salarioBruto * 0.10;
} else {
    descontoIR = salarioBruto * 0.20;
}

var totaldescontos = descontoIR + descontoINSS + descontoSindicato;
var salarioliquido = salarioBruto - totaldescontos;

alert("Salário Bruto é de R$" + salarioBruto + ",00");
alert("IR R$" + descontoIR + ",00");
alert("INSS ( 10% ) R$" + descontoINSS + ",00");
alert("Sindicato ( 3% ) R$" + descontoSindicato + ",00");
alert("FGTS ( 11% ) R$" + descontoFGTS + ",00")
alert("Total de descontos R$" + totaldescontos + ",00");
alert("Salário Líquido R$" + salarioliquido + ",00" );