//Faça um programa que mostre o segundo maior nro da lista 

let numeros = [200, 90, 210, 220],
    maiorNumero = Number.MIN_SAFE_INTEGER,
    segundoMaiorNumero = Number.MIN_SAFE_INTEGER;

for (var numero of numeros){
    if (numero > maiorNumero){
        segundoMaiorNumero = maiorNumero
        maiorNumero = numero
    }
    else if (numero > segundoMaiorNumero){
        segundoMaiorNumero = numero
    }
}

console.log(segundoMaiorNumero)

