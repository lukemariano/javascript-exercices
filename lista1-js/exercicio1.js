//Faça um Programa que dado o ano de nascimento, mostre a idade

//1º passo definir e atribuir ano de nascimento
let anoNascimento = 2002;

//2º passo subtrair ano atual(function?) do ano de nascimento para obter a idade
let anoAtual = new Date();
let ano = anoAtual.getFullYear();
let idade = ano - anoNascimento;
//3º passo mostrar a saida
console.log(`A sua idade é ${idade}`);

