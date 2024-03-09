// ----------------------
// -- Exercícios - FOR --
// ----------------------

// 1) Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos). 1 - 3 - 5 - 7 ... 29
for (var i = 1; i <= 30; i++) {
    if (i % 2 == 1){
        console.log(i);
    }
}

// 2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos). Qtde: 10
var Qtde = 0;

for (var i = 1; i <= 70; i++) {
    if (i % 7 == 0) {
        console.log(i);
        Qtde++; 
    }
}

console.log("Qtde: " + Qtde);

// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.
var intervalo = Number(prompt("Digite o intevalo de números"));
var qtdePar = 0;
var qtdeImpar = 0;

for (var i = 1; i <= intervalo; i++) {
    if (i % 2 == 0) {
        console.log(i);
        qtdePar ++;
    } else {
        console.log(i)
        qtdeImpar++;
    }
}

console.log("Quantidade de números pares: " + qtdePar);
console.log("Quantidade de números primosqtprimos: " + qtdeImpar);

// 4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário; 
var intervalo = Number(prompt("Digite o intevalo de números"));
var soma = 0;

for (var i = 1; i <= intervalo; i++) {
    if (i % 11 == 0) {
        console.log(i);
        soma += i;
    }
}

console.log ("Soma dos valores: " + soma);

// 5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.

var intervalo = Number(prompt("Digite o intevalo de números"));
var soma = 0;

for (var i = 0; i <= intervalo; i++) {
    console.log(i);
    soma += i;
}

console.log("Soma = " + soma);



// 6) Escreva um programa que leia um valor (N) inteiro, digitado pelo usuário teclado e imprima os N primeiros números ímpares. Exemplo: ditando 5, o programa deverá exibir os 5 primeiros ímpares (1,3,5,7,9).
var N = Number(prompt("Digite a quantidade números"));
var qtprimos = 0;

for (var i = 1; i <= Infinity; i++) {
    if (i % 2 != 0){
        console.log(i);
        qtprimos++;
    }

    if(qtprimos == N){
        break;
    }
}


// 7) Escreva um programa que leia um número inteiro N pelo teclado e:
//	 a) indique se N é um número primo;
//	 b) imprima os números primos até N;
//	 c) imprima os N primeiros números primos.

var N = Number(prompt("Digite o valor que deseja verificar se é primo"));

for (var i = 2; i < N; i++) {
    var primo = N % i;

    if (primo == 0) {
        console.log(N + " não é primo!");
        break;
    }
}

if (N == 2 || primo > 0){
    console.log(N + " é primo!");
}



var N = Number(prompt("Digite a quantidade números"));
var qtprimos = 0;

for (var i = 1; i <= Infinity; i++) {  
    if (N % i == 0 ) {
    console.log(i);
    qtprimos++;
    }
    if(qtprimos == N){
        break;
    }
}





var soma = 0;
for (let i = 1; i <= 10; i++) {
    soma = soma + i;
}