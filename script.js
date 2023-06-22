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

        placeMaker(index)
    })
})

// Create function that makes sure button does not change maker once it was pressed initially

function placeMaker(index){
    //Determine row and colmn from index
    let col = index % 3
    let row = (index - col)/3
  //Check if the current cell is empty
  if(boardData[row][col] == 0){
        boardData[row][col] = player;
     //Change player
        player *= -1;

        console.log(boardData)
    }   
}