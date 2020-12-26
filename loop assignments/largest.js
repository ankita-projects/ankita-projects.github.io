var largestNum = 0;
var secondLargest = 0;
var number = prompt("How many numbers you want to enter?");
number = parseInt(number);

for (i = 0; i < number; i++) {
  var userInput = prompt("What are those numbers?");
  userInput = parseInt(userInput);
  if (i === 0) {
    largestNum = userInput;
  }
  if (i === 1) {
    if (userInput > largestNum) {
      secondLargest = largestNum;
      largestNum = userInput;
    }
  }
  else{
      secondLargest =largestNum;
  }
  if(i>1){
     if(userInput>largestNum) {
        secondLargest = largestNum;
        largestNum = userInput;
         
         
     }
  }
}
console.log(largestNum);
console.log(secondLargest);