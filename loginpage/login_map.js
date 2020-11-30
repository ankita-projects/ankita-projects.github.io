function submit(event) {
  event.prevntDefault()

  var name = document.getElementById("userId").value;
  var pass = document.getElementById("password").value;
  let users = new Map([
    ["ankit", "1234"],
    ["anika", "12345"],
    ["ankita", "123456"]
  ]);
  var a = users.has(name);
  var b = users.get(name);
  if (a==true  && pass == b) {

      alert("Hello")
  }
  
  else{
      alert("Bye")
  }

  console.log(users.get(name));
}
