var turn = "player2";
var gameOver = false;
var counter = 0;
let tictactoe = {
  cellClick: function (event) {
    if (!gameOver) {
      //
      var source = event.target || event.srcElement;
      console.log(source.id);

      if (turn == "player2" && source.innerHTML == "") {
        source.innerHTML = "O";
        turn = "player1";
      }
      if (turn == "player1" && source.innerHTML == "") {
        source.innerHTML = "X";
        turn = "player2";
      }

      var isWinner = this.checkIfWinner(source.id, source.innerHTML);
      if (isWinner) {
        alert(turn + " You Won ");
        gameOver = true;
      }

      if (counter == 8 && !isWinner) {
        alert("Game draw");
        gameOver = true;
      }
      counter++;
    }
  },

  displayBoard: function () {
    let gameBoard = document.getElementById("board");

    gameBoard.style.display = "block";
    for (i = 0; i < 3; i++) {
      var row = document.createElement("tr");
      for (j = 0; j < 3; j++) {
        var cellNumber = document.createElement("td");
        cellNumber.setAttribute("style", "height:30px;width:30px");
        cellNumber.setAttribute("class", "b");
        cellNumber.setAttribute("id", i + "-" + j);
        cellNumber.setAttribute("onclick", "tictactoe.cellClick(event)");
        document.getElementById("game").style.display = "none";

        row.appendChild(cellNumber);
      }
      gameBoard.appendChild(row);
    }
  },
  checkIfWinner: function (id, valueAtId) {
    var winnerCombinations = [
      ["0-0", "0-1", "0-2"],
      ["1-0", "1-1", "1-2"],
      ["2-0", "2-1", "2-2"],
      ["0-0", "1-0", "2-0"],
      ["0-1", "1-1", "2-1"],
      ["0-2", "1-2", "2-2"],
      ["0-0", "1-1", "2-2"],
      ["0-2", "1-1", "2-0"],
    ];
    for (let i = 0; i < winnerCombinations.length; i++) {
      var winnerFound = false;
      if (winnerCombinations[i].includes(id)) {
        for (let j = 0; j < winnerCombinations[i].length; j++) {
          if (
            document.getElementById(winnerCombinations[i][j]).innerHTML ==
            valueAtId
          ) {
            winnerFound = true;
          } else {
            winnerFound = false;
            break;
          }
        }
        if (winnerFound) {
          return winnerFound;
        }
      }
      return false;
    }
  },
};
