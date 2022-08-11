//Faça um programa que mostre o maior nro da lista 

let numeros = [20, 40, 90, 5, 2],
    maiorNumero = 0;

//loop
for (var numero of numeros){
    if (numero > maiorNumero){
        maiorNumero = numero
    }
}

console.log(`O maior número é: ${maiorNumero}`)