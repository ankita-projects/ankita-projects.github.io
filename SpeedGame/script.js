let leaderBoard = new Map();
let currentPlayer = "";
let welcomeUser = document.getElementById("welcomeUser");
let scoredisplay = document.querySelector("#score");
let overlay = document.getElementById("gameResult");
let gameover = document.getElementById("displayScore");
let close = document.getElementById("close");

let hitCount = 0;
let missCount = 0;
let intervalId;
let birdCount = 0;
let audio = new Audio();

const playAudio = (source, loop) => {
  //function to provide what audio file to play on start & end of game
  audio.src = source;
  audio.autoplay = true;
  audio.loop = loop;
};

const startGame = () => {
  playAudio("sounds/bonus.wav", true); //playing audio wave file on start of game(true means looping)
  document.getElementById("stop").style.display = "block"; // make stop button visible
  document.getElementById("start").style.display = "none";          
  document.getElementById("playerName").style.display = "none";   
  currentPlayer=document.getElementById("Name").value;
  welcomeUser.textContent = `Welcome ${currentPlayer}`;
  document.querySelectorAll(".bulb").forEach((element) => {
    // adding eventlistner for each of the bulbs
    element.addEventListener("click", checkBird);
  });

  intervalId = setInterval(() => {
    //for keep changing the bulbs in every 1 sec
    document.querySelectorAll(".bulb").forEach((element) => {
      //hiding away all the birds
      element.style.setProperty("content", "");
    });
    var d = Math.floor(Math.random() * 4) + 1; // get random number between 1 and 4;
    document
      .getElementById("bulb" + d)
      .style.setProperty("content", "url(./image.png)");
    birdCount++;
    if (birdCount > hitCount + 3) {
      // After missed three highlighted bulbs game ends
      endGame();
    }
  }, 1000);
};
document.getElementById("stop").style.display = "none";
document.getElementById("start").addEventListener("click", startGame);

const checkBird = (event) => {
  //to determine source of the event(which button is clicked)
  let source = event.target || event.srcElement;
  console.log(source.style.content);
  if (source.style.content == 'url("./image.png")') {
    hitCount++;
  } else {
    endGame(); // If player clicked the wrong bulb, then game over
  }
  scoredisplay.textContent = `Your score is ${hitCount}`;
};

const endGame = () => {
  playAudio("sounds/gameOver.wav", false);
  document.getElementById("start").style.display = "block"; // Make start button visible
  document.getElementById("stop").style.display = "none"; // Hide stop button
  clearTimeout(intervalId); // Stop timeout
  console.log("Game over");
  overlay.style.visibility = "visible"; // Make overlay visible
  leaderBoard[currentPlayer]=hitCount;
  console.table(leaderBoard);
  gameover.textContent = `Your score is ${hitCount} & You missed ${missCount} `; //Show score
};

const reload = () => {
  window.location.reload(); // reload page
};
close.addEventListener("click", reload); // adding event listener to close button
