let btnOption = document.querySelectorAll(".btn-grey");


//playetr "x" plays first
let xTurn = true;
let count = 0;
//Display X/O onclick

btnOption.forEach((element) =>{
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
    })
})