// Create  Array to store the gameboard data

let btnOption = document.querySelectorAll(".btn-grey");

//playetr "x" plays first
let xTurn = true;

//Add event listner to Display X/O onclick

btnOption.forEach((element, index) =>{
    element.addEventListener("click", () =>{
        if(xTurn){
            xTurn = false;
            //display x
            element.innerText = "X"
        } else {
            xTurn =true;
            //Display O
            element.innerText = "O"
        }

        console.log(index)
    })
})