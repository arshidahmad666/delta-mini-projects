let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]; //random btn chose

let started = false; //game not started yet
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  //ist step
  if (!started) {
    //abi tak agar game srt nahi hui
    console.log("game is started"); // toh game start karo
    started = true; //update value only one time game started

    LevelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash"); //flash class
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250); //after 1/4 sec flash remove
}

function userflash(btn) {
  btn.classList.add("userflash"); //user flash class
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250); //after 1/4 sec flash remove
}

function LevelUp() {
  //level up fun
  userSeq = []; //reset to empty value if wrong
  level++;
  h2.innerText = `level ${level}`; //updte level

  //random idx choose(of random btns)
  let randIdx = Math.floor(Math.random() * 4); //0 to 4
  let randColor = btns[randIdx]; //gives rndm clr
  let randbtn = document.querySelector(`#${randColor}`); //randm color se randm btn chose hoga

  gameSeq.push(randColor);
  console.log(gameSeq); //print game seq to hint

  gameFlash(randbtn); // now add that randbtn into gameFlash
}

function checkAns(idx) {
  // console.log("curr level:",level);

  if (userSeq[idx] === gameSeq[idx]) {
    //same value
    if (userSeq.length === gameSeq.length) {
      //if last level both then levelup to genrte new randclr
      setTimeout(LevelUp, 1000); //some delay of levelup
    }
  } else {
    //to track score of last level
    h2.innerHTML = `Game over! your score was <b>${level}</b> <br> press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150); //reset color red into white delay of 150 ms after game over
    reset(); //reset the game using reset fun
  }
}

function btnPress() {
  //btn press fun
  let btn = this; //that current btn which we pressed

  userflash(btn); // flash krna hai btn ko

  userColor = btn.getAttribute("id"); //user which clr btn enters
  userSeq.push(userColor); //add that user clr

  checkAns(userSeq.length - 1); //last btn check
}
let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  //reset game if wrong
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
