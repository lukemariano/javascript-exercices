// 2.1) Faça um programa que percorra uma lista e inf. se o numero é impar ou par 

//entradas
let numeros = [1,2,3,4,5,6,8,9,10]

for (var number of numeros){
    if (number % 2 == 0){
        console.log(`O número ${number} é par`)
    }else{
        console.log(`O número ${number} é impar`)
    }
}
