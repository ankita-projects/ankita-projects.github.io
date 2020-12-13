var counter = 0;
for (i = 0; i < 3; i++) {
  var userInput = prompt("Enter a number");

  userInput = parseInt(userInput);

  if (checkIsEven(userInput)) {
    counter++;
  }
}
console.log("Total numbers of Even numbers = ", counter);
function checkIsEven(input){
    if (input % 2 === 0){
       return true;
    }
       return false;
}