var anoNascimento = parseInt( prompt("Digite o ano em que nasceu:") );
var anoAtual = parseInt(prompt("Digite o ano atual:"));

var idadeEmAnos = anoAtual - anoNascimento;
var idadeEmMeses = idadeEmAnos * 12;
var idadeEmSemanas = idadeEmAnos * 52;
var idadeEmDias = idadeEmAnos * 365;

alert("Idade em Anos: " + idadeEmAnos);
alert("Idade em Meses: " + idadeEmMeses);
alert("Idade em Semanas: " + idadeEmSemanas);
alert("Idade em Dias: " + idadeEmDias);