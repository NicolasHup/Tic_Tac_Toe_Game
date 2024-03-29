
// Setting up the factory function 
let createPlayer = () => {
    
    // Loop through two times to capture the players first name, and auto assign their player number and 
    for (let i = 0; i<4; i++){

        if (gameBoardModule.playerArray.length >= 6){
            gameBoardModule.makePlayerMove();
            break;

        } else if (gameBoardModule.playerArray.length == 0) {
            let playerName = prompt("Player 1 enter your name:")

            if (playerName == "" || playerName == null) {
                alert("Sorry, name cannot be blank!");
                continue;
            }

            let playerNumber = 1;
            let assignedXO = "X";
            alert("You are player 1, and your assigned letter is X!");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of the playerArray....", gameBoardModule.playerArray);
            //return{pllayerName, playerNumber, assignedXO}

        } else if (gameBoardModule.playerArray.length !== 0){
            let playerName = prompt("Player 2 enter your name:");

            if (playerName == "" || playerName == null){
                alert("Sorry, name cannot be blank");
                continue;
            }

            let playerNumber = 2;
            let assignedXO = "O";
            alert("You are player 2, and your assigned letter is O");
            gameBoardModule.playerArray.push(playerName, playerNumber, assignedXO);
            console.log("Show me the contents of the playerArray....", gameBoardModule.playerArray)

        }
    }
};

// Setting up the gameboard module 
let gameBoardModule = (function() {
    let gameBoard = [];
    let playerArray= [];

    // Publicly exposed function to envoke next player move
    let makePlayerMove = () => {

        // Checks for two player submission and gameboard array dosen't spill over gridboxes 
        if (playerArray.length == 6 && gameBoard.length < 9){

            // Controls for player move 
            if (gameBoard.length == 0){
                alert("Player 1, please make your move!");
                gameBoard.push(playerArray[2]);
                console.log("Show me the current gameBoard array...", gameBoard);

            } else if (gameBoard[gameBoard.length - 1 ] == "X"){
                alert("Player 2 please make your move!");
                gameBoard.push(playerArray[5]);
                console.log("Show me the current gameBoard Array...", gameBoard);

            } else if (gameBoard[gameBoard.length - 1] == "O"){
                alert("Player 1, please make your move!");
                gameBoard.push(playerArray[2]);
                console.log("Show me the current gameBoard Array...", gameBoard);
            }
        }; 
    } 

    return {gameBoard, playerArray, makePlayerMove};
})();

// Setting up the displayController module
let displayControllerModule = (function() {
    const makeMove = document.querySelectorAll(".game-board-button")

    // Start indexing and looping through each button node
    let index = 0;
    makeMove.forEach(makeMoves =>{
        makeMoves.dataset.linkedButton = index;
        makeMoves.addEventListener("click", renderArrayToScreen);

        function renderArrayToScreen() {
            const gridBoxes = document.querySelectorAll(".grid-box ");

            // Start indexing and looping Through each grid box node
             let index = 0;
             gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                // Render clicked play on the correct grid box and display
                if (gridBox.getAttribute("data-linked-Button") == makeMoves.getAttribute("data-linked-Button")) {
                    gridBox.textContent = gameBoardModule.gameBoard[gameBoardModule.gameBoard.length - 1];
                    console.log("Show me my makeMoves linked button value...", makeMoves.dataset.linkedButton);
                    console.log("Show me my gridBox linked button value...", gridBox.dataset.linkedButton);
                }
            index++;   
            })

            // Run local function to check for win/disable gameboard from further play/display winnern on DOM
            function checkWin(player){
             
                const horizontal = [0,3,6].map(i=>{return[i,i+1,i+2]});
                const vertical = [0,1,2].map(i=>{return[i,i+3,i+6]});
                const diagonal = [[0,4,8],[2,4,6]];

                let allwins = [].concat(horizontal).concat(vertical).concat(diagonal);

                let results = allwins.some(indices => {
                    return gridBoxes[indices[0]].textContent == player && gridBoxes[indices[1]].textContent == player && gridBoxes[indices[2]].textContent == player
                });
                    return results;
            }

            if (checkWin ("X") == true){
                console.log(gameBoardModule.playerArray[0], " Wins");
                const body = document.querySelector(".n-button");
                const playerWinMessage = document.createElement("h3");
                playerWinMessage.textContent = (gameBoardModule.playerArray[0] + " Wins!!");
                body.appendChild(playerWinMessage)
                makeMove.forEach(makeMoves => {
                    makeMoves.remove();
                })
                startGameButton.remove();
                return;
            } else if (checkWin ("O") == true){
                console.log(gameBoardModule.playerArray[3], " Wins");
                const body = document.querySelector(".n-button");
                const playerWinMessage = document.createElement("h3");
                playerWinMessage.textContent = (gameBoardModule.playerArray[3] + " Wins!!");
                body.appendChild(playerWinMessage);
                makeMove.forEach(makeMoves => {
                    makeMoves.remove();
                })
                startGameButton.remove();
                return;
            } else if (gameBoardModule.gameBoard.length == 9){
                console.log("Tie!");
                const body = document.querySelector(".n-button");
                const playerWinMessage = document.createElement("h3");
                playerWinMessage.textContent = ("Tie!!");
                body.appendChild(playerWinMessage);
                makeMove.forEach(makeMoves => {
                    makeMoves.remove();
                })
                startGameButton.remove();
                return;
            }
        gameBoardModule.makePlayerMove();    
        }
    index++;
    })

    // Listen for click to start the game 
    const startGameButton = document.querySelector(".start-game-button");
    startGameButton.addEventListener("click", createPlayer);

    // Listen for click to restart the game 
    const clearBoard = document.querySelector(".clear-board-button");
    clearBoard.addEventListener("click", clearBoar);
    
    function clearBoar(){
        location.reload();
    }
})();
