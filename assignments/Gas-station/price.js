
function payment() {
    var priceOfgasoline = document.getElementById("price").value;
    var userMoney = document.getElementById("money").value;
    var gasolineamount = userMoney/priceOfgasoline ;
    console.log(gasolineamount)
    document.getElementById("gasolineamount").value =  gasolineamount + " liter";
}

function averageSpeed() {
    var distance = document.getElementById("distance").value;
    var time = document.getElementById("time").value;
    var averagespeed = distance/time ;
    console.log(averagespeed)
    document.getElementById("averagespeed").value =  averagespeed + "Km/h";
}