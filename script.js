// Create  Array to store the gameboard data
let boardData =[
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

//Define game variables 

let player =1

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
  if(boardData[row][col] == 0){
        boardData[row][col] = player; 
     //Change player
        player *= -1;

        addMarkers()
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
            }else if(boardData[row][col] == -1){
                //Update cell if it O marker
                btnOption[(row * 3) + col].innerText = "O";
            }
        }
    }
}




