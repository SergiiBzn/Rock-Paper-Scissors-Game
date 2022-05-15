let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = 'user'.fontsize(3);
  const smallCompWord = 'computer'.fontsize(3);
  const user_div = document.getElementById(user);
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} beats ${convertToWord(
    computer
  )} ${smallCompWord} <br>You win!</br>`;
  user_div.classList.add('green-glow');
  setTimeout(() => {
    user_div.classList.remove('green-glow');
  }, 2000);
}

function lose(user, computer) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = 'user'.fontsize(3);
  const smallCompWord = 'computer'.fontsize(3);
  const user_div = document.getElementById(computer);
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} loses to ${convertToWord(
    computer
  )} ${smallCompWord} <br>You lost...</br>`;
  user_div.classList.add('red-glow');
  setTimeout(() => {
    user_div.classList.remove('red-glow');
  }, 2000);
}

function draw(user, computer) {
  const smallUserWord = 'user'.fontsize(3);
  const smallCompWord = 'computer'.fontsize(3);
  result_p.innerHTML = `${convertToWord(
    user
  )} ${smallUserWord} equals ${convertToWord(
    computer
  )} ${smallCompWord} <br>It's a draw.</br>`;
  const user_div = document.getElementById(user);
  user_div.classList.add('grey-glow');
  setTimeout(() => {
    user_div.classList.remove('grey-glow');
  }, 2000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice.id + computerChoice) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoice.id, computerChoice);
      break;

    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice.id, computerChoice);
      break;

    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice.id, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener('click', () => {
    game(r);
  });

  paper_div.addEventListener('click', () => {
    game(p);
  });

  scissors_div.addEventListener('click', () => {
    game(s);
  });
}

main();
