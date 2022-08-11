/*
Faça um Programa que calcule a média das notas bimestrais.

ENTRADA                           SAÍDA
    10, 8, 9.5, 7, 10              8.9
    8, 8, 8                        8.0
    7, 5, 5.5, 6, 5                5.7

Tarefa:
- Crie um loop para percorrer todas as notas e armazene na variável total
- Veja como pegar a quantidade notas através do tamanho da lista
- Use a variável media para fazer o cálculo total / quantidade de notas
- Use o comando abaixo para testar seu programa

    $ node lista-01/js03-media-bimestral.js
    👉 a média das 5 notas do bimestre é 8.9

    - Teste para mais dados de entrada diferentes e verifique que o cálculo está correto
    - Veja como é feito para mostrar sempre 1 casa decimal
    - O que aconteceria se não tivesse o .toFixed com a entrada [7, 5, 5.5, 6, 5.1]

    - EXTRA:
        Como fazer para Mostrar APROVADO/REPROVADO no final (p/nota de corte = 7)
 */

//1º passo: criar lista com entradas de notas
// let notas1 = [10, 8, 9.5, 7, 10],
//     notas2 = [8, 8, 8],
//     notas3 = [7, 5, 5.5, 6, 5 ], 
//     todasAsNotas = [notas1, notas2, notas3];

// //variaveis
// let soma = 0,
//     tamanho = 0,
//     contador = 1,
//     media = 0; 


// //2º passo: aninhamento de for
// for (var notas in todasAsNotas){
//     for (var nota in todasAsNotas[notas]){
//         soma += todasAsNotas[notas][nota]}
//         tamanho = todasAsNotas[contador-1].length
//         media = soma/tamanho
//         console.log(`Para a lista de notas ${contador} a média é: ${media.toFixed(1)}`)
//         if (media >= 7){
//             console.log('APROVADO')
//         } else{
//             console.log('REPROVADO')
//         }
//         contador++
//         soma = 0;
//         tamanho = 0
//         media = 0
//     }

//entrada

let notas = [7, 5, 5.5, 6, 5 ],
    total = 0,
    media;

//loop
for (var nota of notas){
    total += nota
}

//quantidade de notas
tamanho = notas.length

//media
media = total/tamanho

//condicional
let resultado = (media >= 7) ? 'APROVADO' : 'REPROVADO'

//output
console.log(`👉 a média das ${tamanho} notas do bimestre é ${media.toFixed(1)}. ${resultado}`)











