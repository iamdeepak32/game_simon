let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

   document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");

        started = true;
        levelup();
    }    
});

    function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
    btn.classList.remove("flash");
}, 200);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function (){
    btn.classList.remove("userflash");
}, 200);
}

    function levelup () {
    userSeq =[];
    level++;
    h2.innerText = `level ${level}`;
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx]; 
    let randomBtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq );
    gameFlash(randomBtn); 

   
} 
   function checkAns(idx) {
 //   console.log("curr level :", level);
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
          setTimeout(levelup, 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function  () {
            document.querySelector("body").style.backgroundColor = "white";
 
        }, 100);
        reset();
    }

   }
function btnPress(){
    let btn =this;
    userFlash(btn);
     userColor= btn.getAttribute("id");
     userSeq.push(userColor);
      checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress)
      
      
}
function reset(){
    started =false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
