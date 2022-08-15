/*
Faça um programa que dado um texto de entrada, imprima o texto
criptografado. A criptografia inicial é bem simples,
apenas converta a para b, b para c e assim por diante. 

ENTRADA          SAÍDA
abacate          bcbduf
zebra            @fcsb
Zebra            $fcsb

DICAS:
É uma variante do exercício js06
Pesquise a tabela ASCII, ai vamos ver que a = 97, que A = 65
(cada caracter no teclado tem uma representação numérica)
Pesquise os métodos de String fromCharCode que converte a para 97
e charCodeAt que faz 97 voltar para a
Assim, no podemos usar um método bem simples de criptografia que seria mudar
o código ASCII de forma a incrementar 1, ou seja, mudar de a para b, b para c 
e assim por diante!
quando for z ou Z mudar para @ e $ respectivamente ao invés de {
 */

// Entrada

let string = 'Deus',
    contador = 0,
    novaString = '',
    descriptografia = '';

//resolução
for (let indice in string){
    AscNumber = string.charCodeAt(contador)+1
    if (AscNumber == 123){
        novaString += '@'
    }
    else if(AscNumber == 91){
        novaString += '$'
    }else{
    novaString += String.fromCharCode(AscNumber)

    }
    contador++
}
console.log(novaString)

//descriptografia

contador = 0

for (let indice in novaString){
    AscNumber = novaString.charCodeAt(contador)-1
    if (AscNumber == 63){
        descriptografia += 'z'
    }
    else if (AscNumber == 35){
        descriptografia += 'Z'
    }
    else{
        descriptografia += String.fromCharCode(AscNumber)
    }
    contador++
}

console.log(descriptografia)