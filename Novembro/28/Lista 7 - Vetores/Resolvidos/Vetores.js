// 3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor, e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.
var numeros = [];

// For para leitura dos dados
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número"));
}

var novo = [];
// For para processamento
for (let i = 0; i < 5; i++) {
    novo[i] = numeros[i] * 2;
}

console.log("### Vetor 1 ###")
// For para exibição dos dados
for (let i = 0; i < 5; i++) {
    console.log(numeros[i])
}

console.log("### Vetor 2 ###")
// For para exibição dos dados
for (let i = 0; i < 5; i++) {
    console.log(novo[i])
}



// 4. Faça um algoritmo que receba 5 números inteiros, armazene-os em um vetor, em seguida, descubra e exiba o maior número.
var numeros = [];

// For para leitura dos dados
for (let i = 0; i < 5; i++) {
    numeros[i] = parseInt(prompt("Digite o " + (i + 1) + "º número"));
}

var maior = 0;
// For para processamento
for (let i = 0; i < 5; i++) {
    if(numeros[i] > maior){
        maior = numeros[i];
    }
}

console.log("O maior número é " + maior);
