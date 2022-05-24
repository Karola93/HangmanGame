const getClue = document.getElementById('clue');
const clue = document.getElementsByClassName('clue')[0];
const letterBtns = document.getElementsByClassName('letter-button');
// let showWord = document.getElementsByClassName('word')[0];
const mistakes = document.getElementsByClassName("mistakes")[0];
const image = document.getElementsByClassName('image')[0];

const kindsOfSports = ['Archery', 'Bowling', 'Climbing', 'Curling', 'Gymnastics'];
let answer = '';
let maxWrong = 10;
let wrongAnswers = 0;
let guess = [];
let wordStatus = null;
const archeryClue = 'Legolas';
const bowlingClue = 'Strike';
const climbingClue = 'Mountains on summer';
const curlingClue = 'Rectangular ice sheet';
const gymnasticsClue = ' Balance, strength, flexibility';
const answerAr = answer.toUpperCase().split('');

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];


const randomWord = () => {
    answer = kindsOfSports[Math.floor(Math.random() * kindsOfSports.length)];
}

const answerFunction = () => {
    answer = kindsOfSports[Math.floor(Math.random() * kindsOfSports.length)];
    if (answer === kindsOfSports[0]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = archeryClue;
        })
    } else if (answer === kindsOfSports[1]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = bowlingClue;
        })
    } else if (answer === kindsOfSports[2]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = climbingClue;
        })
    } else if (answer === kindsOfSports[3]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = curlingClue;
        })
    } else if (answer === kindsOfSports[4]) {
        getClue.addEventListener('click', () => {
            clue.innerHTML = gymnasticsClue;
        });
    }

    for (const btn of letterBtns) {
        btn.addEventListener('click', () => {
            if (answer.toUpperCase().split('').includes(btn.innerText)) {
                wordStatus= answer.toUpperCase().split('').map(letter => letter === btn.innerText ? letter : letter.replace(letter,`</p>_</p>`) ).join('');
                document.getElementsByClassName('word')[0].innerHTML = wordStatus;
            } else {
                wrongAnswers += 1;
                let numberToString= wrongAnswers.toString();
                if (wrongAnswers <= 10) {
                    mistakes.innerText = numberToString;
                    image.innerHTML = `<img src=./images/${numberToString}.png alt="Hang Man Image">`
                } else {
                    mistakes.innerText = '10';
                    image.innerHTML = `<img src=./images/over.png alt="Hang Man Image">`
                }
            }
        } );
    }
}

document.getElementsByClassName("maxWrong")[0].innerText = maxWrong;

const guessWord = () => {
    wordStatus = answer.toUpperCase().split('').map(letter => letter.replace(letter,`</p>_</p>`) ).join('');
    document.getElementsByClassName('word')[0].innerHTML = wordStatus;
}


const createAlphabetUi = () => {
    const myButtons = document.getElementsByClassName('buttons');
    for (const letter of alphabet) {
        const p= document.createElement('p');
        p.innerHTML = `<button class="letter-button btn btn-default L"> ${letter.toUpperCase()} </button>`
        myButtons[0].appendChild(p);
    }
}

const toUpperCase = () =>{
    const upperCase = document.querySelector('.upperCase').innerText.toUpperCase();
    const upper = document.querySelector('.upperCase').innerHTML=`<strong> ${upperCase} </strong>` ;
};

randomWord();
guessWord();
createAlphabetUi();
answerFunction();
toUpperCase();


