//percorra uma lista de números e retorne quantos numeros pares/impares

//loop for

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12],
    contadorPar = 0,
    contadorImpar = 0;

for (var numero of numeros) {
    if (numero % 2 == 0){
        contadorPar += 1
    }else{
        contadorImpar += 1
    }
}

console.log(`A quantidade de números pares é: ${contadorPar}`)
console.log(`A quantidade de números impares é: ${contadorImpar}`)

