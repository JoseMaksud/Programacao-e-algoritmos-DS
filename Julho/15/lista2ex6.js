var kmpercorrido = parseFloat(prompt("Digite os KM percorridos: "));
var diasalugados = parseInt(prompt("Digite quantos dias o carro foi alugado: "));
var precodia = 90;
var precokm = 0.20;
var precototal = precodia * diasalugados + precokm * kmpercorrido;


console.log("O preço total a pagar é de R$", precototal);

//correção
var kmPercorridos = parseFloat(prompt("Digite os km percorridos: "));
var diasAlugados = parseInt(prompt("Digite quantos dias o carro foi alugado: "));

var valorKmPercorrido = kmPercorridos * 0.2;
var valorDiasAlugados = diasAlugados * 90;

var precoTotal = valorKmPercorrido + valorDiasAlugados;

alert("O preço total é de: " + precoTotal);