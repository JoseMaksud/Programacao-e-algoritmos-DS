// Lista 6 - While

// 1)	Faça um programa que leia um conjunto não determinado de valores e mostre o valor lido, seu dobro, seu quadrado e seu cubo.  Finalize a entrada de dados com um valor negativo ou zero.

var op = parseInt(prompt("Digite um número inteiro ou 0 (zero) para sair"));
var dobro = 0;
var quadrado = 0;
var cubo = 0;

while (op != 0) {
    console.log("Você digitou " + op);
    dobro = op * 2;
    quadrado = op ** 2;
    cubo = op ** 3;
    console.log("Dobro do número: " + dobro);
    console.log("Quadrado do número: " + quadrado);
    console.log("Cubo do número: " + cubo);
    var op = parseInt(prompt("Digite um número inteiro ou 0 (zero) para sair"));
}


// 2)	Faça um programa que receba uma senha formada de quatro números inteiros, verifique se a senha está correta e, caso não esteja, solicite novamente a senha. Se a senha entrada for a correta, deverá ser apresentada a mensagem “Senha Correta”, caso contrário, “Senha Incorreta”.

var senhaCorreta = 2326;
var senhaDigitar = parseInt(prompt("Digite sua senha: "));

while(senhaDigitar != senhaCorreta) {
    console.log("Senha Incorreta");
    var senhaDigitar = parseInt(prompt("Digite sua senha: "));
}
console.log("Senha correta");


// 3)	Faça um programa que leia números inteiros maiores que zero. Quando for entrado o número zero, o programa deverá apresentar quantos números foram entrados e a média destes.

var op = parseInt(prompt("Digite um número inteiro maior que 0  e  0 (zero) para sair"));
var media = 0;
var soma = 0;

var qtdeNumerosDigitados = 0;

while (op != 0) {
    console.log("Você digitou " + op);
    qtdeNumerosDigitados++;
    soma += op;
    var op = parseInt(prompt("Digite um número inteiro maior que 0  e  0 (zero) para sair"));
}

console.log("Quantidade de números digitados: " + qtdeNumerosDigitados);
console.log("Soma de números digitados: " + soma);
media = soma / qtdeNumerosDigitados;
console.log("Média destes números: " + media);

// 4)	O cardápio de uma casa de lanches é dado pela tabela abaixo:

// Código | Produto         | Preço Unitário(R$)
//  100   | Cachorro Quente |      R$ 1,70
//  101   | Bauru Simples   |      R$ 2,30
//  102   | Bauru com ovo   |      R$ 2,60
//  103   | Hamburguer      |      R$ 2,40
//  104   | Cheeseburguer   |      R$ 2,50
//  105   | Refrigerante    |      R$ 1,00

// Escreva um algoritmo que leia os códigos dos itens adquiridos pelo consumidor e a quantidade, calculando e mostrando o valor a pagar.Não será necessário exibir o produto e o valor, somente o valor final. Para FINALIZAR o pedido, o usuário deverá digitar 0 (ZERO).
var instrucao = "Código | Produto         | Preço Unitário(R$)\n  100   | Cachorro Quente |      R$ 1,70\n  101   | Bauru Simples   |      $ 2,30\n  102   | Bauru com ovo   |      R$ 2,60\n  103   | Hamburguer      |      R$ 2,40\n  104   | Cheeseburguer   |      R$ 2,50\n  105   | Refrigerante    |      R$ 1,00\n Digite o código do produto ou 0 (zero) para sair";

var op = parseInt(prompt(instrucao));
var qtdeProdutos = parseInt(prompt("Digite a quantidade do produto"));
var valorFinal = 0;

while (op != 0) {
    console.log("Você digitou " + op);
    if (op == 100) {
        valorFinal += qtdeProdutos * 1.70;
    } else if (op == 101) {
        valorFinal += qtdeProdutos * 2.30;
    } else if (op == 102) {
        valorFinal += qtdeProdutos * 2.60;
    } else if (op == 103) {
        valorFinal += qtdeProdutos * 2.40;
    } else if (op == 104) {
        valorFinal += qtdeProdutos * 2.50;
    } else if (op == 105) {
        valorFinal += qtdeProdutos * 1.00;
    } else {
        console.log("Código incorreto");
    }
    op = parseInt(prompt(instrucao));
    if(op != 0) {
        qtdeProdutos = parseInt(prompt("Digite a quantidade do produto"));
    }
}
console.log("Valor final: R$" + valorFinal);


// 5)	Faça um programa que simule a urna eletrônica. A tela a ser apresentada deverá ser da seguinte forma:
// Digite o número do candidato ou 0 (zero) para sair
// 1. Candidato Claudia Rodrigues
// 2. Candidato Carlos Luz
// 3. Candidato Neves Rocha
// 4. Nulo
//5. Branco
// O programa deverá ler os votos dos eleitores e, quando for entrado o número 0, apresentar as seguintes informações:
// a) O número de votos de cada candidato;
// b) A porcentagem de votos nulos;
// c) A porcentagem de votos brancos;
// d) O candidato vencedor.

var instrucao = "Digite quem deseja votar e 0 (zero) para sair\n 1. Candidato Claudia Rodrigues \n 2. Candidato Carlos Luz \n 3. Candidato Neves Rocha \n 4. Nulo \n 5. Branco";

var voto = parseInt(prompt(instrucao));
var qtdeVotosCandidato1 = 0
var qtdeVotosCandidato2 = 0
var qtdeVotosCandidato3 = 0
var qtdeVotosNulo = 0
var qtdeVotosBranco = 0

while (voto != 0) {
    console.log("Você digitou " + voto);
    if (voto == 1) {
        qtdeVotosCandidato1++;
    } else if (voto == 2) {
        qtdeVotosCandidato2++;
    } else if (voto == 3) {
        qtdeVotosCandidato3++;
    } else if (voto == 4) {
        qtdeVotosNulo++;
    } else if (voto == 5) {
        qtdeVotosTotais++;
    } else {
        console.log("Voto inválido");
    }

    var op = parseInt(prompt("Digite um número inteiro ou 0 (zero) para sair"));
}
var qtdeVotosTotais = qtdeVotosCandidato1 + qtdeVotosCandidato2 + qtdeVotosCandidato3 + qtdeVotosNulo + qtdeVotosTotais;
var porcentagemNulo = qt
