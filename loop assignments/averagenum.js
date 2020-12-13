var sum = 0;
for(i=0;i<5;i++){
    var number = prompt("Enter a number");
    number = parseInt(number);
    sum = sumOfNum(sum,number);
    
}
function averageOfNum(sum,count){
    return sum/count;
}
var average = averageOfNum(sum,number)
    console.log(average);
    
function sumOfNum(a,b){
        return a + b;
    }





