var getUserChoice = function (userInput){
    
    userInput = userInput.toLowerCase()

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
        return userInput;
    } else {
        console.log(`Error, invalid userInput`);
    }
}
// getUserChoice('paper')
// getUserChoice('rock')
// getUserChoice('scissors')
var getComputerChoice = function (){
    computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0){
        return 'rock';
    } else if (computerInput === 1){
        return ' paper';
    } else {return 'scissors'}
}
// console.log(`The computer chose ${getComputerChoice()}`)

var determineWinner = function (userChoice, computerChoice){
    if (userChoice===computerChoice){
        return 'The game was a tie'
    } else if (userChoice === 'rock'){ 
        if (computerChoice === 'paper'){
            return 'You have lost, paper beats rock'
        } else if (computerChoice === 'scissors'){
            return 'You have won, rock beats scissors!'
        }
    } else if (userChoice === 'paper'){
        if (computerChoice ==='rock'){
            return 'You have won, paper beats rock!';
        } else if (computerChoice === 'scissors'){
            return 'You have lost, scissors beats paper';
        }   
    } else if (userChoice === 'scissors'){
        if (computerChoice === 'rock'){
            return 'You have lost, rock beats scissors';
        }else if (computerChoice === 'paper'){
            return 'You have won, scissors beats paper!';
    };
}
}
// console.log(determineWinner(`rock`,`paper`))

var playGame = function (){
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice();

    console.log(`You chose ${userChoice}`)
    console.log(`The computer chose ${computerChoice}`)
console.log(determineWinner(userChoice,computerChoice))
}

playGame()
