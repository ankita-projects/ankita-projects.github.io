var sum = 0;
var smallestNum = 0;
var largestNo = 0;
for (i = 0; i < 10; i++) {
  var number = prompt("Enter ten numbers");
  number = parseInt(number);

  sum = sum + number;
  console.log(sum);
  if (i === 0) {
    smallestNum = number;
  }
  if (number < smallestNum) {
    smallestNum = number;
  }
  if (i === 0) {
    largestNo = number;
  }
  if (number > largestNo) {
    largestNo = number;
  }
  
}
var average = sum / 10;
console.log(average);
console.log(smallestNum);
console.log(largestNo);
