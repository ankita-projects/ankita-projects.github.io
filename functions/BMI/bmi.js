
function calculateBmi(weight,height){
    
    return  BMI =  weight/(height*height);
    
    
}
function displayBmi(){
    var weightGiven =parseInt(document.getElementById("weight").value);
    var heightGiven=parseFloat(document.getElementById("height").value );
    document.getElementById("BMI").innerHTML =calculateBmi(weightGiven,heightGiven);
      
}
    
