let tambola = {
  board: [],
  ticket: [],
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
  /*generateTicket: function () {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", 'https://uyxovs1z2k.execute-api.us-east-2.amazonaws.com/default/tambola', false); // false for synchronous request
    xmlHttp.send(null);
    const newLocal = xmlHttp.responseText;
    console.log(newLocal)
    return JSON.parse(newLocal);
  },*/
  generateTicket: function () {
    var ticketData = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    for (i = 0; i < 3; i++) {
      var numberPositionList = [];
      while (numberPositionList.length < 5) {                                       //determing positions of where to put 5 random numbers
        let randomNumber = Math.floor(Math.random() * 9);                          // range of random number
        let existInPositionData = numberPositionList.includes(randomNumber);            // not repeating the position of numbers
        if (!existInPositionData) {
          numberPositionList.push(randomNumber);
        }
      }
      // this is for postion array,
      // breaking random num in 5 chunks
      for (var j = 0; j < numberPositionList.length; j++) {
        ticketData[i][numberPositionList[j]] = this.generateRandomNumberInRange(numberPositionList[j] + 1);

      }

    }
    console.log(ticketData);
    return ticketData;
  },
  generateRandomNumberInRange: function (number) {
    const numberForTicket = Math.floor(Math.random() * ((number * 10) - ((number - 1) * 10)) + (number - 1) * 10);
    if (!this.ticket.includes(numberForTicket)) {
      this.ticket.push(numberForTicket)
    } else {
      return this.generateRandomNumberInRange(number)
    }
    return numberForTicket;
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
        cellNumber.setAttribute("style", "height:20px;width:40px");


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