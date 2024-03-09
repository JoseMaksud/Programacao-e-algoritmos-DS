// Exercícios com vetores
// 1.	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, e mostre a quantidade de números pares e ímpares deste vetor.
var x = [];
var qtdePar = 0;
var qtdeImpar = 0;

for (let i = 0; i < 5; i++) {
    x.push(parseInt(prompt("Digite um número")));
    if (x[i] % 2 == 0) {
        qtdePar++;
    } else {
        qtdeImpar++;
    }
}

console.log(x);
console.log("Quantidade de números pares = " + qtdePar);
console.log("Quantidade de números ímpares = " + qtdeImpar);

// 2.	Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3
// primeiros elementos deste vetor.

var x = [];
var soma = 0;

// For para leitura
for (let i = 0; i < 6; i++) {
    x.push(parseInt(prompt("Digite um número")));
}

// For para soma
for (let i = 0; i < x.length - 3; i++) {
    soma += x[i];
}
console.log("Soma dos 3 primeiros elementos = " + soma);

// 3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.

var x = [];
var y = [];

for (let i = 0; i < 5; i++) {
    x.push(parseInt(prompt("Digite um número")));
    y[i] = x[i] * 2;
} 

console.log("Vetor Normal = " + x);
console.log("Vetor Multiplicado por 2 = " + y );


// 4. Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.

var x = [];
var maior = [];

for (let i = 0; i < 5; i++) {
    x.push(parseInt(prompt("Digite um número")));
    if (i == 0) {
        maior = x[i];
    }
    if (x[i] > maior) {
        maior = x[i];
    }
}  

console.log("Maior número = " + maior);
