var totalEleitores = prompt("Digite o número total de eleitores: ");
var votosBrancos = prompt("Digite o número de votos brancos: ");
var votosNulos = prompt("Digite o número de votos nulos: ");
var votosValidos = totalEleitores - votosBrancos - votosNulos;
var percentualb = votosBrancos / totalEleitores * 100;
var percentualn = votosNulos / totalEleitores * 100;
var percentualv = votosValidos / totalEleitores * 100;

console.log("O total de eleitores é: ", totalEleitores);
console.log("O percentual de votos brancos é de:", percentualb + "%");
console.log("O percentual de votos nulos é de:", percentualn + "%");
console.log("O percentual de votos válidos é de:", percentualv + "%");


//correção
var votosBrancos = parseInt(prompt("Digote o total de votos brancos"));
var votosNulos = parseInt(prompt("Digote o total de votos nulos"));
var votosValidos = parseInt(prompt("Digote o total de votos validos"));

var totalEleitores = votosBrancos + votosNulos + votosValidos;

var percBrancos = (votosBrancos / totalEleitores) * 100;
var percNulos = (votosNulos / totalEleitores) * 100;
var percValidos = (votosValidos / totalEleitores) * 100; 