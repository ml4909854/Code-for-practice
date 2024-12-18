let total = document.getElementById("total");
let btn = document.getElementById("cal");
let bill = document.getElementById("bill");
    let tip = document.getElementById("tip");

btn.addEventListener("click", function () {
    
    const billValue = bill.value
    const tipValue = tip.value
    const totalValue = billValue*(1+tipValue/ 100)
    total.innerText = totalValue
  
});
