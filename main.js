let user_score = -1;
let comp_score = -1;
const result = document.getElementById('result');
const user_score_span = document.getElementById('user_score');
const comp_score_span = document.getElementById('comp_score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function convert_word(letter) {
  if (letter === 'r') return 'rock';
  if (letter === 'p') return 'paper';
  return 'scissors';
}


function get_comp_choice() {
  const choices = ['r', 'p', 's'];
  const Random_num = Math.floor(Math.random() * 3);
  return choices[Random_num];
}


function win(UserChoice, CompChoice) {

  const one = document.getElementById('one');
  one.classList.add('animation');
  setTimeout(() => { one.classList.remove('animation') }, 500);
  user_score++;
  user_score_span.innerHTML = user_score;
  result.innerHTML = `${convert_word(UserChoice)} Beats ${convert_word(CompChoice)} YOU WON`;
  const glow = document.getElementById(convert_word(UserChoice));
  glow.classList.add('green-glow');
  setTimeout(function() {
    glow.classList.remove('green-glow');
  }, 500);

}

function lost(UserChoice, CompChoice) {
  comp_score++;
  comp_score_span.innerHTML = comp_score;
  result.innerHTML = `${convert_word(UserChoice)} Beats ${convert_word(CompChoice)} YOU LOST`;
  const glow = document.getElementById(convert_word(UserChoice));
  glow.classList.add('red-glow');
  setTimeout(function() {
    glow.classList.remove('red-glow');
  }, 500);
}

function tie(UserChoice, CompChoice) {
  result.innerHTML = ' ITS A TIE';
  const glow = document.getElementById(convert_word(UserChoice));
  glow.classList.add('blue-glow');
  setTimeout(function() {
    glow.classList.remove('blue-glow');
  }, 500);
}

// main game logic
function game(UserChoice) {
  let CompChoice = get_comp_choice();

  switch (UserChoice + CompChoice) {
    case "pr":
    case "sp":
    case "rs":
      win(UserChoice, CompChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lost(UserChoice, CompChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(UserChoice, CompChoice);
      break;
  }
}


// adding event listeners
function main() {
  rock.addEventListener('click', function() {
    game('r');
  })


  paper.addEventListener('click', function() {
    game('p');
  })

  scissors.addEventListener('click', function() {
    game('s');
  })
}

main();
game();
get_comp_choice();