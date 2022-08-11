/**
Faça um Programa que peça a temperatura em Fahrenheit, 
transforme e mostre graus Celsius. 

ENTRADA         SAÍDA
   32           32 °F 👉 convertido para celsius -> 0
   50           50 °F 👉 convertido para celsius -> 10
   90           90 °F 👉 convertido para celsius -> 32

 */

// peça Fahrenheit
let fahrenheit = 32,
    conversaoCelsius = (fahrenheit - 32) * 5/9;

// output
console.log(`${fahrenheit} °F 👉 convertido para celsius -> ${conversaoCelsius.toFixed(0)}`)