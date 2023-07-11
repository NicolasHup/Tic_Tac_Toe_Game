// Create  Array to store the gameboard data
let boardData =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

//Define game variables 

let player =1
let gameOver = false;
//Pull in cells from DOM

let btnOption = document.querySelectorAll(".btn-grey");

//playetr "x" plays first
let xTurn = true;

//Add event listner to Display X/O onclick

btnOption.forEach((element, index) =>{
    element.addEventListener("click", () =>{
        /*if(xTurn){
            xTurn = false;
            //display x
            element.innerText = "X"
        } else {
            xTurn =true;
            //Display O
            element.innerText = "O"
        }*/

        placeMarker(index)
    })
})

// Create function that makes sure button does not change maker once it was pressed initially

function placeMarker(index){
    //Determine row and colmn from index
    let col = index % 3
    let row = (index - col)/3
  //Check if the current cell is empty
  if(boardData[row][col] == 0 && gameOver ==false){
        boardData[row][col] = player; 
     //Change player
        player *= -1;
        addMarkers();
        checkResult();
    }   
}


// Craete a function for placing player markers

function addMarkers(){
    //Iterate over rows 
    for(let row = 0; row < 3; row++){
        //Iterate over colmns
        for(let col = 0; col < 3; col++){
            //Check if it is player1s marker
            if(boardData[row][col] == 1){
                //update cells to add x marker
                btnOption[(row * 3) + col].innerText = "X";
            } else if(boardData[row][col] == -1){
                //Update cell if it O marker
                btnOption[(row * 3) + col].innerText = "O";
            }
        }
    }
}

function checkResult(){
    //check rows and columns 
    for(let i = 0; i < 3; i++){
        let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
        let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
        if(rowSum == 3 || colSum == 3){
            //player1 wins
            endGame(1);
            return //we stop where we are ...we have met the condition we need
        } else if(rowSum == -3 || colSum == -3){
             //player2 wins
            endGame(2)
            return //we stop where we are ...we have met the condition we need
        }
    }
    //Check diagonals
    let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
    let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
    if(diagonalSum1 == 3 || diagonalSum2 == 3){
        //player1 wins
        endGame(1);
        return //we stop where we are ...we have met the condition we need
    } else if(diagonalSum1 == -3 || diagonalSum2 == -3){
        //player2 wins
        endGame(2);
        return //we stop where we are ...we have met the condition we need
    }

    //Check for a tie
    if(boardData[0].indexOf(0) == -1 &&
        boardData[1].indexOf(0) == -1 &&
        boardData[2].indexOf(0) == -1){
        endGame(0);
        return //we stop where we are ...we have met the condition we need
    }
}


//Function to end the game amd display results

function endGame(winner){
    // Trigger game over
    gameOver = true;
    //check if game ended in a tie 
    if(winner == 0){
        console.log("Tie")
    } else {
        console.log(`Player ${winner} wins!`)
    }
}
