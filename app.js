//@ts-check
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
var r_sound = new Audio('sounds/r.wav');
var p_sound = new Audio('sounds/p.wav');
var s_sound = new Audio('sounds/s.wav');

function compChoice() {
    const choices = ['Rock','Paper','Scissor'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
};

function win(userChoice, getCompChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${userChoice} beats ${getCompChoice}. You win!`;
    scoreBoard_div.classList.add('glow-green');
    setTimeout(() => scoreBoard_div.classList.remove('glow-green'), 300);
};

function lose(userChoice, getCompChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${getCompChoice} beats ${userChoice}. Computer Wins!`;
    scoreBoard_div.classList.add('glow-red');
    setTimeout(() => scoreBoard_div.classList.remove('glow-red'), 300);
};

function draw(userChoice, getCompChoice) {
    result_p.innerHTML = `${userChoice} and ${getCompChoice}. Play again.`;
    scoreBoard_div.classList.add('glow-gray');
    setTimeout(() => scoreBoard_div.classList.remove('glow-gray'), 300);
};

function game(userChoice){
    const getCompChoice = compChoice();
    switch (userChoice + getCompChoice) {
        case 'RockScissor':
        case 'PaperRock':
        case 'ScissorPaper':
            win(userChoice, getCompChoice);
            break;
        case 'RockPaper':
        case 'PaperScissor':
        case 'ScissorRock':
            lose(userChoice, getCompChoice);
            break;
        case 'RockRock':
        case 'PaperPaper':
        case 'ScissorScissor':
            draw(userChoice, getCompChoice);
            break;
    }
};

function main() {
    rock_div.addEventListener('click', () => game('Rock'));
    rock_div.onclick = () => r_sound.play();
    paper_div.addEventListener('click', () => game('Paper'));
    paper_div.onclick = () => p_sound.play();  
    scissor_div.addEventListener('click', () => game('Scissor'));
    scissor_div.onclick = () => s_sound.play();
};

main();

