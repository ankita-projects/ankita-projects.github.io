function submit() {
  var name = document.getElementById("userId").value;
  var pass = document.getElementById("password").value;
  let users = ["ankit", "anika", "ankita"]
  var indexOfName = users.indexOf(name);

  console.log(indexOfName);
  if (indexOfName >= 0){
      alert("Hello ")
  }
  else{
      alert("Good bye")
  }

}


