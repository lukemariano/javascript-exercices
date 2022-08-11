/**
 * Faça um Programa que inverta um texto. 
 * 
 * ENTRADA          SAÍDA
 * abacate          etacaba
 * 12345            54321
 * 
 * IMPORTANTE:
 * - Não usar bibliotecas, basta manipular a string de entrada de forma a embaralhá-la
 */

// Entrada
// let teste = 'abacate',
//     tamanho = teste.length,
//     letras,
//     reverseString = [];

// var contador = 0;

// while (contador < tamanho) {
//     contador++
//     letras = teste[teste.length - contador]
//     reverseString.push(letras)
// }
// console.log(reverseString.join(''))


//forma alternativa:


//1º definir uma string para inverter
let string = '12345',
    contador = 1,
    novaString = '';

//2º podemos utilizar o indice. Como? --> for
for (var indice in string){
    novaString += string[string.length - contador]
    contador++
}
console.log(novaString)