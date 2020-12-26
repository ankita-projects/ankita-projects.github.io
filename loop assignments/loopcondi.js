var sum = 0;
var counter = 0;


while (true) {
  var number = prompt("Enter a number");
  number=parseInt(number);
  counter++;
  var condition = prompt("Do you want to continue?");
  sum = sumOfNum(sum, number);
  if (condition === "n" || condition === "N") {
    break;
  }
 
}
var average = averageOfNum(sum, counter);
console.log(average);

function averageOfNum(a, b) {
  return a/b;
}
function sumOfNum(c,d) {
  return c+d;
}
