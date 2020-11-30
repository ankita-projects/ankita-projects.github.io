
function payment() {
    var priceOfgasoline = document.getElementById("price").value;
    var userMoney = document.getElementById("money").value;
    var gasolineamount = userMoney/priceOfgasoline ;
    console.log(gasolineamount)
    document.getElementById("gasolineamount").value =  gasolineamount + " liter";
}