// importando palavras
import { WORDS } from "./words.js";

// define o número de suposições
const NUMBER_OF_GUESSES = 6;
// define o número de tentativas restantes
let guessesRemaining = NUMBER_OF_GUESSES,
// diz qual o número da tentativa atual
    currentGuess = [],
    nextLetter = 0,
// gera a palavra correta aleatoriamente
    rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]

// debugger
console.log(rightGuessString)

// função para criar o tabuleiro de palavras iniciais

const startingBoard = () => {
    // pega a div do game board e acrescenta uma linha com 5 quadrados a cada loop
    let board = document.getElementById("game-board");

    // gera 6 linhas para a tabuleiro de palavras
    for (let i =0; i < NUMBER_OF_GUESSES; i++){
        // cria uma nova div que será uma linha para letras e adiciona a classe 'letter-row' após adicionar o elemento no HTML
        let row = document.createElement("div")
        row.className = "letter-row"


        // gera 5 quadrados para cada linha criada do tabuleiro
        for (let j = 0; j < 5; j++){
            let box = document.createElement("div")
            box.className = "letter-box"
            //define a div como filha da linha --> especificidade
            row.appendChild(box)
        }

        // para cada linha completada com 5 quadrados, adiciona as dentro da div game-board
        board.appendChild(row)

    }
}

startingBoard()

//evento para capturar tecla digitada

document.addEventListener("keyup", (e) => {

    //verifica se o usuário ainda tem tentativas de palpites restantes
    if(guessesRemaining === 0){
        return
    }

    //captura a tecla do evento e converte para String
    let pressedKey = String(e.key)


    if (pressedKey === "Backspace" && nextLetter !== 0){
        deleteLetter()
        return
    }

    if (pressedKey === "Enter"){
        checkGuess()
        return
    }

    // verificação de tecla digitada entre 'a' e 'z' utilizando regex
    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1){
        return
    }else{
        // se a verificação for válida, adicionamos a letra no quadrado
        insertLetter(pressedKey)
    }
}) 

//função para inserir letras nos quadrados
const insertLetter = (pressedKey) => {
    //verifica se ainda a quadrados para se digitar
    if (nextLetter === 5){
        return
    }

    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter]
    animateCSS(box, 'pulse')
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter +=1
}

//função para deletar uma letra
// encontra o quadrado correto e apaga o caracter desse quadrado
const deleteLetter = () =>{
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let box = row.children[nextLetter - 1]
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop()
    nextLetter -= 1
}

const checkGuess = () =>{
    let row = document.getElementsByClassName("letter-row")[6 - guessesRemaining]
    let guessString = ''

    //retorna uma matriz da variável rightGuessString
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length != 5) {
        toastr.error("Not enough letters!")
        return
    }

    if (!WORDS.includes(guessString)) {
        toastr.error("Word not in list!")
        return
    }

    for (let i = 0; i < 5; i++){
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]

        let letterPosition = rightGuess.indexOf(currentGuess[i])
        //se a letra estiver no palpite correto
        if (letterPosition === -1){
            letterColor = 'grey'
        } else {
            // se a letra estiver na palavra
            //se o index da letra e o indix rightGuess forem os mesmos === palavra correta
            if (currentGuess[i] === rightGuess[i]){
                //background verde
                letterColor = '#6aaa64'
            }else{
                // quadrado amarelo
                letterColor = '#c9b458'
            }
            
            rightGuess[letterPosition] = '#'

        }

        let delay = 250 * i
        setTimeout(() => {
            //flip box
            animateCSS(box, 'flipInX')
            //shade box
            box.style.backgroundColor = letterColor
            shadeKeyBoard(letter, letterColor)
        }, delay)

    }

    if (guessString === rightGuessString){
        toastr.success("You guessed right! Game over!")
        guessesRemaining = 0
        return
    } else{
        guessesRemaining -= 1;
        currentGuess = []
        nextLetter = 0

        if(guessesRemaining === 0){
            toastr.error("You've run out of guesses! Game over!")
            toastr.info(`The right word was: "${rightGuessString}"`)
        }
    }
}

//função para colorir o teclado de acordo com as palavras corretas, na posição errada ou que não estão na palavra
const shadeKeyBoard = (letter, color) =>{
    for(const elem of document.getElementsByClassName("keyboard-button")) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            if(oldColor === '#6aaa64'){
                return
            }

            if(oldColor === '#c9b458' && color !== '#6aaa64'){
                return
            }

            elem.style.backgroundColor = color
            break
        }
    }
}

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target

    if(!target.classList.contains("keyboard-button")){
        return
    }
    let key = target.textContent

    if(key === 'Del'){
        key = "Backspace"
    }
    document.dispatchEvent(new KeyboardEvent("keyup", {'key':key}))
})

//animation

const animateCSS = (element, animation, prefix = 'animate__') =>
//Criando uma promise e retornando-a
    new Promise((resolve, reject) =>{
        const animationName = `${prefix}${animation}`;
        //const node = document.querySelector(element)
        const node = element;
        node.style.setProperty('--animate-duration', '0.3s');

        node.classList.add(`${prefix}animated`, animationName);

        // Quando a animação termina nos limpamos a classe e resolvemos a promessa
        function handleAnimationEnd(event){
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }
        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    })