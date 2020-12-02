var registeredlist = [];
function Submit(event) {
  event.preventDefault();
  var FirstName = document.getElementById("firstName").value;
  var LastName = document.getElementById("lastName").value;
  var Email = document.getElementById("email").value;

  var userobject = {
    firstName: FirstName,
    lastName: LastName,
    email: Email,
  };
  registeredlist.push(userobject);
}
function ShowRegisteredUser(event) {
  var userListLength, i;

  userListLength = registeredlist.length;

  for (i = 0; i < userListLength; i++) {
    registerdTable(registeredlist[i]) // 
    console.log(registeredlist[i]);
  }
}
function registerdTable(userobject){
  let table = document.getElementById("registrationListTable");
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  cell1.innerHTML = userobject.firstName;
  row.appendChild(cell1);

  let cell2 = document.createElement("td");
  cell2.innerHTML = userobject.lastName;
  row.appendChild(cell2);

  let cell3 = document.createElement("td");
  cell3.innerHTML = userobject.email;
  row.appendChild(cell3);

  table.appendChild(row);
}