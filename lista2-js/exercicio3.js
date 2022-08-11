//Faça um programa que faça a média de todos os nros de uma lista 

let numeros = [10, 20, 40, 50],
    soma = 0,
    media,
    contador = 0;
    

for (var numero of numeros){
    soma += numero
    contador++
}

//media
media = soma/contador

//output
console.log(`A média é: ${media.toFixed(1)}`)