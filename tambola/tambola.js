let tambola = {
  board: [],                           
  pickNumber: function () {                                   //it generate a random number for board
    let number = Math.floor(Math.random() * 91);
    let checkNumber = this.board.includes(number);
    if (!checkNumber && number != 0) {
      this.board.push(number);
      return number;
    }
    return this.pickNumber(); //calling itself, recurssion
  },
  crossCheck: function (numberlist) {
    //if user claim that my lines, corner..  is finished
    let noMatch = false;
    numberlist.forEach((playerNumber) => {
      //player number is each number player has in the numberlist
      if (!this.board.includes(playerNumber)) {
        noMatch = true;
        return;
      }
    }); //if no match is true then it will go inside if(noMatch)
    if (noMatch) {
      console.log("you lose");
      return false;
    }
    console.log("You win");
    return true;
  },
  generateTicket: function () {
    var ticketData = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    var randomNumberList = [];
    while (randomNumberList.length < 15) {
      let randomNumber = Math.floor(Math.random() * 91);
      let existInTktData = randomNumberList.includes(randomNumber);
      if (!existInTktData && randomNumber!=0) {
        randomNumberList.push(randomNumber);
      }
    }
    for(i=0;i<3;i++){                                        
    var numberPositionList = [];
    while (numberPositionList.length < 5) {                                       //determing positions of where to put 5 random numbers
      let randomNumber = Math.floor(Math.random() * 9);                          // range of random number
      let existInPositionData = numberPositionList.includes(randomNumber);            // not repeating the position of numbers
      if (!existInPositionData) {
        numberPositionList.push(randomNumber);
      }
    }    
    console.log("numberPositionList ", numberPositionList)                                                               // this is for postion array,
    const sliceOfRandomNumberList = randomNumberList.splice(0, 5);          // breaking random num in 5 chunks
    console.log("sliceOfRandomNumberList ", sliceOfRandomNumberList)
    numberPositionList.forEach((item,index) => {                           //item is item of 
      ticketData[i][item] = sliceOfRandomNumberList[index];
    });
   
  }
    console.log(ticketData);

    var ticket = [
      [0, 12, 0, 0, 49, 67, 0, 2, 0],
      [0, 12, 0, 0, 49, 67, 0, 2, 0],
      [0, 12, 0, 0, 49, 67, 0, 2, 0],
    ];
    return ticketData;
  },

  displayTicket: function () {
    var ticketData = this.generateTicket();
    var ticketTable = document.getElementById("ticket");                  //
    ticketTable.style.display = "block";
    document.getElementById("playerbutton").style.display = "none";
    document.getElementById("gameMaster").style.display = "none";

    for (i = 0; i < 3; i++) {
      var row = document.createElement("tr");
      for (j = 0; j < 9; j++) {                                             //UI for tkt generate
        var cellNumber = document.createElement("td");
        cellNumber.setAttribute("style", "height:100px;width:300px");
        cellNumber.setAttribute("class","tkttable")

        if (ticketData[i][j] != 0) {
          //because we don't want to show 0
          cellNumber.innerHTML = ticketData[i][j];
          cellNumber.setAttribute("onclick", "tambola.crossTktNumber(event)");
        }
        row.appendChild(cellNumber);
      }
      ticketTable.appendChild(row);
    }
  },

  crossTktNumber: function (event) {
    var source = event.target || event.srcElement;
    source.style.textDecoration = "line-through";
  },

  displayBoard: function () {                                             // blank board
    var table = document.getElementById("board");
    document.getElementById("board").style.display = "block";
    document.getElementById("gameMaster").style.display = "none";
    document.getElementById("playerbutton").style.display = "none";
    document.getElementById("generateNumber").style.display = "block";
    for (i = 0; i < 9; i++) {
      var row = document.createElement("tr");
      for (j = 1; j < 11; j++) {
        var tableData = document.createElement("td");
        tableData.setAttribute("style", "height:20px;width:30px");
        tableData.setAttribute("class", "tableSize");
        tableData.setAttribute("id", i * 10 + j);
        tableData.innerHTML = "  "; //initially board is empty
        row.appendChild(tableData);
      }
      table.appendChild(row);
    }
  },
  showNumber: function () {
    let number = this.pickNumber();
    var heading = document.getElementById("displayNumber");
    var text = document.createElement("H1");
    text.innerHTML = number;
    document.getElementById("heading").innerHTML = number;
    console.log(this.board);
    document.getElementById(number).style.backgroundColor = "red";
    document.getElementById(number).innerHTML = number;
  },
};
