let box = document.querySelectorAll(".cell");
let reset = document.querySelector(".restart");
let turnO = true;
let stat = document.getElementsByClassName("status")[0];
let msg = document.getElementsByClassName("msg")[0];
const winng=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
let gameOver = false;

box.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (gameOver) return;
    if(turnO){
        cell.innerText = "O";
        turnO = false;
    }   
    else{
        cell.innerText = "X";
        turnO = true;
    } 
    cell.disabled = true;
    check();

  });
});
// function winner(){
//         msg.innerText=`winner is ${pos1val}`;
//         stat.classList.remove("hide"); 
// }

function check(){
    for(let pattern of winng ){

    let pos1val = box[pattern[0]].innerHTML;
    let pos2val = box[pattern[1]].innerHTML;
    let pos3val = box[pattern[2]].innerHTML;
        
        if(pos1val !="" && pos1val !="" && pos1val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                
                    console.log("winner is",pos1val);                    
                    msg.innerText = `Congratulations, Winner is ${pos1val}`;
                    stat.classList.remove("hide");
                    gameOver = true;
            }
        }
        
    }

}  
reset.addEventListener("click", () => {
    box.forEach((cell) => {
        cell.innerText = "";
        cell.disabled = false;
    });
    turnO = true;
    stat.classList.add("hide");
    msg.innerText = "";
    gameOver = false; // গেম আবার শুরু হবে
});







