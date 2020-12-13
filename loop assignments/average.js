var sum = 0;
var counter= 0;
while(true){
    var userInput = prompt("Enter a number");
    userInput = parseInt(userInput);
    sum = sumOfNum(sum,userInput);
    if(counter >=25){
        break;
    }
    counter++;
    
}
var average = calAverage(sum,counter);
console.log(average);
function calAverage(sum,count){
    return sum/count;
}
function sumOfNum(a,b){
    return a + b;
}

