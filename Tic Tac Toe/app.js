let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector(".newgame");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
function resetgame(){
    let turn0 = true;
    msgContainer.classList.add("hide");
    enablebtn();

}
function enablebtn(){
    for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
    }
}
function disablebtn(){
    for(let box of boxes){
    box.disabled = true;
    }
}
boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if (turn0 === true) {
            box.innerText = "O";
            turn0 = false;            
        } else {
            box.style.color="green";
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

function showWinner(win) {
    msgContainer.classList.remove("hide");
    msg.innerText = `Congratulations winner is ${win}`;
    disablebtn();
}
function checkWinner() {
    for(pattern of winPatterns){
        if(boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != ""){
            if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText){
                let winner = boxes[pattern[0]].innerText;
                showWinner(winner);
            }
        }
    }
}
newBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);
