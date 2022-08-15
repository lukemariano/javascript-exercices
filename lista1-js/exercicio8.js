/**
Faça um Programa que verifique se uma letra 
de entrada é vogal ou consoante.

Entrada           Saída
a                 vogal
I                 vogal
z                 consoante
J                 consoante
*/

// Entrada
const VOGAIS = ['a', 'e', 'i', 'o', 'u'];

let entrada = 'a',
    validacao =  (VOGAIS.includes(entrada)) ? 'vogal' : 'consoante'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (typeof entrada != 'string') {
    console.log('Entrada inválida.')
}else{
    console.log(validacao)
}

