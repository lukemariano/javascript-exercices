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
var vogaisIncludes = ['a', 'e', 'i', 'o', 'u'],
    entrada = 'a',
    validacao = (vogaisIncludes.includes(entrada)) ? 'vogal' : 'consoante'

// implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
if (typeof entrada != 'string') {
    console.log('Entrada inválida.')
}else{
    console.log(validacao)
}

