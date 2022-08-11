// Faça um programa que imprima na tela apenas os números ímpares entre 1 e 150. 

//while loop

let range = 151,
    contador = 1;

while (contador < 151 && contador > 0){
    if (contador % 2 != 0){
        console.log(contador)
    }
    contador++
}

