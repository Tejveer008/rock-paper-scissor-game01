let userScore = 0
let comScore = 0

const choices = document.querySelectorAll('.choice')
const msg = document.querySelector('#msg')

const userScorePara = document.querySelector("#user-score")
const comScorePara = document.querySelector("#computer-score")
 
// For computer choice
const genCompChoice = () => {
  const options = ['rock', 'paper', 'scissors']
  const randIdx = Math.floor(Math.random() * 2)
  return options[randIdx]
}

const drawGame = () => {
  console.log('Game was draw')
  msg.innerText = 'Draw ! Play Again❌'
  msg.style.backgroundColor = 'black'
}

const showWinner = (userWin, userChoice, comChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore
    console.log('you win!')
    msg.innerText = `You Win🏆! Your ${userChoice} beats ${comChoice}`
    msg.style.backgroundColor = 'green'
  } else {
    comScore++;
    comScorePara.innerText = comScore
    console.log('you lose !')
    msg.innerText = `You Lose👎! Computer ${comChoice} beats ${userChoice}`
    msg.style.backgroundColor = 'red'
  }
}

// we call the userChoice and computerChice here using Functions
const playGame = (userChoice) => {
  console.log('User choice  is: ', userChoice)

  // Generate computer choice
  const comChoice = genCompChoice()
  console.log('Computer choice  is: ', comChoice)

  if (userChoice === comChoice) {
    // Draw Game
    drawGame()
  } else {
    let userWin = true
    if (userChoice === 'rock') {
      // scissors , paper
      userWin = comChoice === 'paper' ? false : true
    } else if (userChoice === 'paper') {
      // rock, scissors
      userWin = comChoice === 'scissors' ? false : true
    } else {
      // rock, paper
      userWin = comChoice === 'rock' ? false : true
    }

    showWinner(userWin, userChoice, comChoice)
  }
}

// for user choice

choices.forEach((choice) => {
  // console.log(choice)
  choice.addEventListener('click', () => {
    // console.log("choice was clicked")
    const userChoice = choice.getAttribute('id')
    playGame(userChoice)
  })
})
