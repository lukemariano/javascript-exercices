/* Desenvolva um gerador de tabuada, 
capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
O usuário deve informar de qual numero ele deseja ver a tabuada. 
A saída deve ser conforme o exemplo abaixo:
Tabuada de 5: 5 X 1 = 5, 5 X 2 = 10, ..., 5 X 10 = 50 */

let entrada = 5,
    contador = 1,
    multiplicacao,
    range = 11;

//loop

while (contador < range && contador > 0){
    multiplicacao = entrada * contador
    console.log(`Tabuada de ${entrada}: ${entrada} X ${contador} = ${multiplicacao}`)
    contador++
}


