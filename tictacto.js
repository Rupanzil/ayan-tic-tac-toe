let box = document.querySelectorAll(".cell");
let reset = document.querySelector(".restart");
let turnO = true;

box.forEach((cell) => {
  cell.addEventListener("click", () => {
    if(turnO){
        cell.innerText = "O";
        turnO = false;
    }   
    else{
        cell.innerText = "X";
        turnO = true;
    } 
    cell.disabled = true;
  });
});