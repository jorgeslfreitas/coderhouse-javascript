var nome = prompt("Digite seu nome: ");
var anoNascimento = prompt("Em que ano nasceu?");
var anoAtual = 2024;

var idade = anoAtual - Number(anoNascimento);

console.log(`Olá ${nome}, sua idade é: ${idade} anos!`);
alert(`Olá ${nome}, sua idade é: ${idade} anos!`);

var nomeIdade = document.querySelector("#nomeidade");

nomeIdade.innerHTML = `Olá ${nome}, sua idade é: ${idade} anos!`;