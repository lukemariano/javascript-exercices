//Faça um programa que faça a soma de todos números de uma lista 

//entradas 
let numeros = [10, 20, 40, 60],
    soma = 0;

for (var numero of numeros){
    soma += numero
}

console.log(`O resultado da soma é: ${soma}`)