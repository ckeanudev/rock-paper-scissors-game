
const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.getElementById("playbtn");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const score = document.querySelector(".score");

        playBtn.addEventListener("click", ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
            score.classList.add("fadeIn");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hands => {
            hands.addEventListener("animationend", function() {
                this.style.animation = '';
            })
        })



        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(options=> {
            options.addEventListener("click", function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                playerHand.src = `./IMG/rock.png`;
                computerHand.src = `./IMG/rock.png`;

                setTimeout(() => {
                    //comparing hands
                compareHands(this.textContent, computerChoice);
                //update hands picture
                playerHand.src = `./IMG/${this.textContent}.png`;
                computerHand.src = `./IMG/${computerChoice}.png`;
                }, 1500)

                //animation
                playerHand.style.animation = "shakePlayer 1.5s ease"
                computerHand.style.animation = "shakeComputer 1.5s ease"
            })
        })
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        //check if both the same
        if(playerChoice === computerChoice) {
            winner.textContent = "it's a Tie!";
            return;
        }

        //check if the rock wins
        if(playerChoice === 'rock') {
            if(computerChoice === 'paper'){
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }

        //check if the paper wins
        if(playerChoice === 'paper') {
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }
        }

         //check if the scissors wins
         if(playerChoice === 'scissors') {
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins!';
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins!';
                pScore++;
                updateScore();
                return;
            }
        }


    }

    startGame();
    playMatch();
};

game();