
alert("Welcome to the Follow Me Game! Press Ok to Start.");
let gameSeq=[];
let userSeq=[];

let btns=["red","green","yellow","purple"];

let started=false;
let level=0;
let highScore = localStorage.getItem("highScore") || 0;



let h2=document.querySelector("h2");
let startBtn = document.getElementById("startBtn");

document.addEventListener("keydown", startGame); // For keyboard
startBtn.addEventListener("click", startGame);   // For mobile

function startGame() {
  if (!started) {
    started = true;
    startBtn.style.display = "none";
    levelUp();
  }
}


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");

    },250);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
      btn.classList.remove("userflash");

  },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

function checkAns(idx){ 
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
      setTimeout(levelUp, 1000);
    }
  } else {
    // Update high score if needed
    if(level > highScore){
      highScore = level;
      localStorage.setItem("highScore", highScore);
    }

    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>High Score: <b>${highScore}</b><br>Press Any Key To Restart.`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);

    reset();
  }
}


function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

for (let btn of allBtns) {
  if (isTouchDevice) {
    btn.addEventListener("touchstart", btnPress);
  } else {
    btn.addEventListener("click", btnPress);
  }
}



function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}