document.getElementById("btn").addEventListener("click", function () {
  const price = elementToValue("price");
  const coupon = inputValueText("coupon");

  let discount;

  let youHaveToPay;

  if (coupon === "DSC30") {
    discount = (30 * price) / 100; //30% discount of given price
    youHaveToPay = price - discount;
    const  status   = document.getElementById('status')
    status.classList.remove('text-orange-700')
    status.classList.add('text-green-500')
    status.innerText = 'success'
  }else{
    discount = 0
    youHaveToPay = price
    const  status   = document.getElementById('status')
    status.classList.remove('text-green-500')
    status.classList.add('text-orange-700')
    status.innerText = 'Wrong'
  }

  document.getElementById("display").innerText = youHaveToPay;
  document.getElementById("save").innerText = discount;
});
