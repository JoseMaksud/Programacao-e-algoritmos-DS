// -----------------------------------------
// -- Exercícios Programação e Algoritmos --
// -----------------------------------------

// 1) Elaborar um algoritmo que informe se um ano informado pelo usuário é bissexto ou não.
    var ano = parseInt(prompt("Informe o ano desejado:"));

    if (ano % 4 == 0) {
        alert("O ano é bissexto!");
    } else {
        alert("O ano não é bissexto!");
    }


// 2) Elaborar um algoritmo que lê 2 valores a e b e os escreve com a mensagem: "São múltiplos" ou "Não são múltiplos".

    var a = parseInt(prompt("Informe o primeiro valor:"));
    var b = parseInt(prompt("Informe o segundo valor:"));

    if (a % b == 0) {
        alert("São múltiplos!");
    } else {
        alert("não são múltiplos!");
    }


// 3) Elaborar um algoritmo que informe se um número informado pelo usuário é par ou ímpar.

    var num1 = parseInt(prompt("Informe o número desejado"));

    if (num1 % 2 == 0) {
        alert("Este número é par!");
    } else {
        alert("Este número é ímpar!");
    }


// 4) O sistema de avaliação de determinada disciplina, é composto por três provas. A primeira prova tem peso 4, a Segunda tem peso 3 e a terceira prova tem peso 3. Faça um algoritmo para calcular a média final de um aluno desta disciplina. Caso a média seja maior ou igual a 7 mostre APROVADO, se a média for entre 5 e 7, mostre em RECUPERAÇÃO, e se for menor do que 5 mostre REPROVADO. 

    var nota1 = parseInt(prompt("Informe a primeira nota"));
    var nota2 = parseInt(prompt("Informe a segunda nota"));
    var nota3 = parseInt(prompt("Informe a terceira nota"));

    var media = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / (4 + 3 + 3);


    if (media >= 7) {
        alert("Aprovado!");
    } else if (media >= 5 && media < 7) {
        alert("Recuperação!");
    } else if (media < 5) {
        alert("Reprovado!");
    }


// 5) Elabore um algoritmo que leia 3 valores inteiros e mostre o maior valor entre eles.

    var num1 = parseInt(prompt("Informe o primeiro valor"));
    var num2 = parseInt(prompt("Informe o segundo valor"));
    var num3 = parseInt(prompt("Informe o terceiro valor"));

    if (num1 > num2 && num1 > num3) {
        alert(num1 + " é o maior!");
    } else if (num2 > num1 && num2 > num3) {
        alert(num2 +" é o maior!");
    } else if (num3 > num1 && num3 > num2) {
        alert(num3 + " é o maior!");
    }

// 6) Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem crescente.

    var num1 = parseInt(prompt("Informe o primeiro valor"));
    var num2 = parseInt(prompt("Informe o segundo valor"));
    var num3 = parseInt(prompt("Informe o terceiro valor"));

    if (num1 < num2 && num2 < num3) {
        alert(num1 + "," + num2 + "," + num3);
    } else if (num1 < num3 && num3 < num2) {
        alert(num1 + "," + num3 + "," + num2);
    } else if (num2 < num1 && num1 < num3) {
        alert(num2 + "," + num1 + "," + num3);
    } else if (num2 < num3 && num3 < num1) {
        alert(num2 + "," + num3 + "," + num1);
    } else if (num3 < num1 && num1 < num2) {
        alert(num3 + "," + num1 + "," + num2);
    } else {
        alert(num3 + "," + num2 + "," + num1);
    }


    

// 7) Desenvolva um algoritmo que leia 3 valores inteiros e os apresente em ordem decrescente

    var num1 = parseInt(prompt("Informe o primeiro valor"));
    var num2 = parseInt(prompt("Informe o segundo valor"));
    var num3 = parseInt(prompt("Informe o terceiro valor"));

    if (num1 > num2 && num2 > num3) {
        alert(num1 + "," + num2 + "," + num3);
    } else if (num1 > num3 && num3 > num2) {
        alert(num1 + "," + num3 + "," + num2);
    } else if (num2 > num1 && num1 > num3) {
        alert(num2 + "," + num1 + "," + num3);
    } else if (num2 > num3 && num3 > num1) {
        alert(num2 + "," + num3 + "," + num1);
    } else if (num3 > num1 && num1 > num2) {
        alert(num3 + "," + num1 + "," + num2);
    } else {
        alert(num3 + "," + num2 + "," + num1);
    }


// 8) Elabore um algoritmo que dada a idade de um nadador classifica-o em uma das seguintes 
// categorias:
//    Infantil A --> 5 a 7 anos
//    Infantil B --> 8 a 10 anos
//    Juvenil A  --> 11 a 13 anos
//    Juvenil B  --> 14 a 17 anos
//    Adulto     --> Maior ou igual a 18 anos

    var idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 5 && idade < 7) {
        alert("Infantil A");
    } else if (idade >= 8 && idade <= 10) {
        alert("Infantil B");
    } else if (idade >= 11 && idade <= 13) {
        alert("Juvenil A");
    } else if (idade >= 14 && idade <= 17) {
        alert("Juvenil B");
    } else if (idade >= 18) {
        alert("Adulto");
    } else {
        alert("Categoria Indefinida");
    }

// 9) Elabore um algoritme que leia o ano de nascimento do usuário e informe se ele pode ou não votar. Faça uma pesquisa para descobrir os limites de idades em que o voto deve ser proibido, obrigatório ou facultativo.

    var ano = parseInt(prompt("Digite seu ano de nascimento:"));
    var idade = 2023 - ano;

    if (idade >= 0 && idade <= 15) {
        alert("Voto proibido!");
    } else if (idade >= 16 && idade <= 17 || idade > 70) {
        alert("Voto facultativo!");
    } else {
        alert("Voto obrigatório!");
    }


// 10) Um banco concederá um crédito especial aos seus clientes, variável com o saldo médio no último ano. Faça um algoritmo que leia o saldo médio de um cliente e calcule o valor do crédito de acordo com a tabela abaixo. Mostre uma mensagem informando o saldo médio e o valor do crédito.
//    De 0 a 200   --> Nenhum crédito
//    De 201 a 400 --> 20% do valor do saldo médio
//    De 401 a 600 --> 30% do valor do saldo médio
//    Acima de 601 --> 40% do valor do saldo médio 

    var saldomedio = parseFloat(prompt("Digite seu saldo médio:"));

    if (saldomedio <= 200) {
        alert("Nenhum crédito!");
    } else if (saldomedio > 200 && saldomedio <= 400) {
        saldomedio = saldomedio * 0.20;
        alert("Seu valor de crédito é de " + saldomedio);
    } else if (saldomedio > 400 && saldomedio <= 600) {
        saldomedio = saldomedio * 0.30;
        alert("Seu valor de crédito é de " + saldomedio);
    } else if (saldomedio > 600 ) {
        saldomedio = saldomedio * 0.40;
        alert("Seu valor de crédito é de " + saldomedio);
    }