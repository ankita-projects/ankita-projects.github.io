class cars {                                                                                   // car is object
    constructor(licenceNumber,carMaker,carModel,price,colour){
        this.licenceNumber = licenceNumber;
        this.carMaker = carMaker;
        this.carModel = carModel;
        this.price=price;
        this.colour=colour;
    }
};

let carList =[];
function addCar(){
  var licenceNumber= document.getElementById("plate").value;
  var carMaker= document.getElementById("maker").value;
  var carModel= document.getElementById("model").value;
  var price= document.getElementById("price").value;
  var colour= document.getElementById("color").value;
  var car = new cars(licenceNumber,carMaker,carModel,price,colour);     //object
  carList.push(car);
  console.log(carList);                                                
}
 function findCarBylicence(licenceNumber){
     for (let index = 0; index < carList.length; index++) {
         const element = carList[index];
        if( element.licenceNumber == licenceNumber) {
              return element;
              
        }
        
     }
 }
 function displayCar(){
   var searchCar =findCarBylicence(document.getElementById("search").value);
   console.log(searchCar);
   document.getElementById("licence").innerHTML=searchCar.carMaker + " " + searchCar.carModel;

 }