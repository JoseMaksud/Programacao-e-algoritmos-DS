//       0  1   2   3            -- Posição lembrando que COMEÇA NO ZERO
var x = [7, 10, 50, 15];

console.log(x[1]);

// Soma
x[0] + x[1];

// Exemplo de prompt
x[0] = parseInt(prompt("Digite um número"));

x.push(3); // vai adicionar o 3 em último

x.unshift(2); // vai adcionar o 2 em primeiro

// Somar tudo
var soma = 0;
for (let i = 0; i < x.length; i++) {
    soma += x[i];
}
console.log(soma);




// EXEMPLO COM TEXTOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
var frutas = ["maçã", "pera", "uva"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}