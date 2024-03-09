// Atividade de Programação e Algoritmos – 28/11/2023
// 1)	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor e mostre os números pares deste vetor;
var x = [];

// For para leitura
for (let i = 0; i < 5; i++) {
    x.push(parseInt(prompt("Digite um número")));
}

// For para os números pares
for (let i = 0; i < 5; i++) {
    if (x[i] % 2 == 0) {
        console.log("Par :" + x[i]);
    }
}

//  2)	Faça um algoritmo que leia 6 valores do tipo inteiro e armazene-os em um vetor. A seguir, o algoritmo deverá exibir: 
// (a) todos os números ímpares que existem no vetor; 
// (b) o menor valor existente no vetor;
// (c) a média dos valores do vetor;

var x = [];
var menor = 0;
var media = 0;

for (let i = 0; i < 6; i++) {
    x.push(parseInt(prompt("Digite um número")));
    // a
    if (x[i] % 2 != 0) {
        console.log("Impar :" + x[i]);
    }

    //b
    if (i == 0) {
        menor = x[i];
    }
    if (x[i] < menor) {
        menor = x[i];
    }

    //c
    media += x[i]; 
}

console.log("Menor número: " + menor)
console.log("Média dos valores : " + media / x.length);