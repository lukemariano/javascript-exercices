//Faça um programa que mostre o segundo maior nro da lista 

let numeros = [200, 90, 150, 20],
    maiorNumero = 0,
    segundoMaiorNumero = 0;

for (var numero of numeros){
    if (numero > maiorNumero){
        maiorNumero = numero
    }
    if (numero < maiorNumero && numero > segundoMaiorNumero){
        segundoMaiorNumero = numero
    }
}

console.log(segundoMaiorNumero)

