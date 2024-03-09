// 1) Faça um algoritmo que imprima todos os números ímpares no intervalo entre 1 e 30 (incluindo ambos).
for (let i = 1; i <= 30; i++) {
    if(i % 2 != 0){
        console.log(i);
    }
}

// WHILE

var i = 1; 

while (i <= 30) {
    if (i % 2 != 0) {
        console.log(i);
    }
    i++
}

// 2) Faça um algoritmo que imprima a quantidade de números multiplos de 7 intervalo entre 1 e 70 (incluindo ambos).
var qtde = 0;
debugger;
for (let i = 1; i <= 70; i++) {
    if(i % 7 == 0){
        qtde++; // --> qtde = qtde + 1;
    }
}
console.log("Quantidade de multiplos: " + qtde);


// WHILE

var qtde = 0;
let i = 1;

while (i <= 70) {
    if(i % 7 == 0){
        qtde++; // --> qtde = qtde + 1;
    }
    i++
}
console.log("Quantidade de multiplos: " + qtde);


// 3) Faça um algoritmo que imprima a quantidade de números pares e a quantidade de números ímpares em um intervalo digitado pelo usuário.
var inicio = parseInt(prompt("Digite o início"));
var fim = parseInt(prompt("Digite o fim"));
var qtPares = 0;
var qtImpares = 0;

for (let i = inicio; i <= fim; i++) {
    if(i % 2 == 0){
        qtPares++;
    } else {
        qtImpares++;
    }
}

console.log("Qtde de pares: " + qtPares);
console.log("Qtde de ímpares: " + qtImpares);

// WHILE

var fim = parseInt(prompt("Digite o fim"));
var qtPares = 0;
var qtImpares = 0;
let i = 1;

while (i <= fim) {
    if(i % 2 == 0){
        qtPares++;
    } else {
        qtImpares++;
    }
    i++
}

console.log("Qtde de pares: " + qtPares);
console.log("Qtde de ímpares: " + qtImpares);


// 4) Faça um algoritmo que imprima a soma dos números multiplos de 11 em um intervalo digitado pelo usuário;
var inicio = parseInt(prompt("Digite o início"));
var fim = parseInt(prompt("Digite o fim"));

var somaMultiplos = 0;

for (let i = inicio; i <= fim; i++) {
    if(i % 11 == 0) {
        somaMultiplos += i; // --> somaMultiplos = somaMultiplos + i;
    }
}

console.log("Soma múltiplos de 11: " + somaMultiplos);

// WHILE

var fim = parseInt(prompt("Digite o fim"));

var somaMultiplos = 0;

let i = 1;

while (i <= fim) {
    if(i % 11 == 0) {
        somaMultiplos += i; // --> somaMultiplos = somaMultiplos + i;
    }
    i++
}

console.log("Soma múltiplos de 11: " + somaMultiplos);


// 5) Faça um algoritmo que imprima o somatório de todos os números entre 1 e um valor digitado pelo usuário. Por exemplo, se o usuário digitar o número 4, o programa deverá calcular o somatório 1 + 2 + 3 + 4 = 10.
var fim = parseInt(prompt("Digite um número"));
var soma = 0;

for (let i = 1; i <= fim; i++) {
    soma += i;
}

console.log("Resultado: " + soma);

// WHILE

var fim = parseInt(prompt("Digite um número"));
var soma = 0;
let i = 1;

while (i <= fim) {
    soma += i;
    i++
}

console.log("Resultado: " + soma);


// 6) Escreva um programa que leia um valor (N) inteiro, digitado pelo usuário teclado e imprima os N primeiros números ímpares. Exemplo: ditando 5, o programa deverá exibir os 5 primeiros ímpares (1,3,5,7,9).
var num = parseInt(prompt("Digite um número"));

var contImpares = 0;
for (let i = 1; i < Infinity; i++) {
    if(i % 2 != 0){
        console.log(i);
        contImpares++;
    }
    if(contImpares == num){
        break;
    }
}

// WHILE

var num = parseInt(prompt("Digite um número"));

var contImpares = 0;

let i = 1;
while (i < Infinity) {
    if(i % 2 != 0){
        console.log(i);
        contImpares++;
    }
    if(contImpares == num){
        break;
    }
    i++
}


// 7)Escreva um programa que leia um número inteiro N pelo teclado e:
// 	a) indique se N é um número primo;
// 	b) imprima os números primos até N;
// 	c) imprima os N primeiros números primos.

var n = parseInt(prompt("Digite o valor de N"));

var ehPrimo =  verficaPrimo(n);

// a
console.log("#### Letra A ####");
if(ehPrimo == true){
    console.log("É primo");
} else {
    console.log("Não é primo");
}

// WHILE

var n = parseInt(prompt("Digite o valor de N"));

var ehPrimo =  verficaPrimo(n);

console.log("#### Letra A ####");
if(ehPrimo == true){
    console.log("É primo");
} else {
    console.log("Não é primo");
}



// b
console.log("#### Letra B ####");
for(var i = 1; i <= n; i++){
    if(verficaPrimo(i) == true){
        console.log(i);
    }
}

// WHILE
var n = parseInt(prompt("Digite o valor de N"));

var ehPrimo =  verficaPrimo(n);

console.log("#### Letra B ####");
let i = 1;
while(i <= n){
    if(verficaPrimo(i) == true){
        console.log(i);
    }
    i++
}


// c
console.log("#### Letra C ####");
var contPrimos = 0;
for(var i = 1; i <= Infinity; i++){
    if(verficaPrimo(i) == true){
        console.log(i);
        contPrimos++;
    }
    if (contPrimos == n) {
        break;
    }
}

// WHILE
console.log("#### Letra C ####");
var n = parseInt(prompt("Digite o valor de N"));

var ehPrimo =  verficaPrimo(n);

var contPrimos = 0;
let i = 1;
while(i <= Infinity){
    if(verficaPrimo(i) == true){
        console.log(i);
        contPrimos++;
    }
    if (contPrimos == n) {
        break;
    }
    i++
}


function verficaPrimo(n) {
    var contDiv = 0;
    var i = 1;

    while(i <= n){
        if(n % i == 0){
            contDiv++;
        }
        i++
    }

    if(contDiv == 2) {
        return true;
    } else {
        return false;
    }
}