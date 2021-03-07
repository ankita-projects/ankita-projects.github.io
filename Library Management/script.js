 putDisplay = (event) => {
    let source = event.target || event.srcElement;                  //to determine source of the event(which button is clicked)
    let displayElement = document.getElementById("input");
    let existingValue = displayElement.innerHTML;   
    let newValue = existingValue + source.id;   // concatinating numbers to create higher numbers
    displayElement.innerHTML = newValue;
}

calculate = () => {                        // event handler which invoked when you press "=" button,
    let displayElement=document.getElementById("input");
    let equation = displayElement.innerHTML;           //takes two number seperated by operator
    if(equation.indexOf("+")>0){                     // check if the operation exist,
        let number = equation.split("+");
        let firstNumber = parseFloat(number[0]);
        let secondNumber = parseFloat(number[1]);
        let result = firstNumber + secondNumber;
        console.log(result);
        displayElement.innerHTML = result;
    }

    if(equation.indexOf("-")>0){
        let number = equation.split("-");
        let firstNumber = parseFloat(number[0]);
        let secondNumber = parseFloat(number[1]);
        let result = firstNumber - secondNumber;
        console.log(result);
        displayElement.innerHTML = result;
    }

    if(equation.indexOf("*")>0){
        let number = equation.split("*");
        let firstNumber = parseFloat(number[0]);
        let secondNumber = parseFloat(number[1]);
        let result = firstNumber * secondNumber;
        console.log(result);
        displayElement.innerHTML = result;
    }
    if (equation.indexOf("÷") > 0) {
        let numbers = equation.split("÷");
        console.log(numbers);

        let firstNum = parseFloat(numbers[0]);
        let secondNum = parseFloat(numbers[1]);
        let result = firstNum / secondNum;
        displayElement.innerHTML = result;
      }
     
}
 clearDisplay = () => {
   let clear = document.getElementById("input");
    clear.innerHTML = "";
  }