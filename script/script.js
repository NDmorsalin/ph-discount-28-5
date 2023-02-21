document.getElementById("btn").addEventListener("click", function () {
  const price = inputValue("price");
  if (price < 1) {
    alert("price not lass then 1");
    return;
  }
  const discount = (30 * price) / 100; //30% discount of given price
 
  const youHaveToPay = price - discount;

  document.getElementById("display").innerText = youHaveToPay;
  document.getElementById("save").innerText = discount;
});
