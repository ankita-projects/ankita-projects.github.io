var carlist = [];

function addcar(event) {
  event.preventDefault();
  var carnumber = document.getElementById("carnumber").value;
  var carmaker = document.getElementById("carmaker").value;
  var carmodel = document.getElementById("carmodel").value;
  var price = document.getElementById("price").value;
  var color = document.getElementById("color").value;
  var car = {
    carNumber: carnumber,
    carMaker: carmaker,
    carModel: carmodel,
    Price: price,
    color: color,
  };

  carlist.push(car);
  console.log(carlist);
  addToCarListTable(car);
}

function addToCarListTable(car) {
  let table = document.getElementById("carListTable");
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  cell1.innerHTML = car.carNumber;
  row.appendChild(cell1);

  let cell2 = document.createElement("td");
  cell2.innerHTML = car.carMaker;
  row.appendChild(cell2);

  let cell3 = document.createElement("td");
  cell3.innerHTML = car.carModel;
  row.appendChild(cell3);

  let cell4 = document.createElement("td");
  cell4.innerHTML = car.Price;
  row.appendChild(cell4);

  let cell5 = document.createElement("td");
  cell5.innerHTML = car.color;
  row.appendChild(cell5);

  table.appendChild(row);
}
