var smallestNum = 0;
var number = prompt("How many numbers you want to enter?");
number = parseInt(number);

for (i = 0; i < number; i++) {
  var userInput = prompt("What are those numbers?");
  userInput = parseInt(userInput);
  if (i === 0) {
    smallestNum = userInput;
  }
  if (userInput < smallestNum) {
    smallestNum = userInput;
  }
}
console.log(smallestNum);
