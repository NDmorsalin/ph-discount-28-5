document.getElementById('btn').addEventListener('click',function(){
    const price = elementToValue('price')

    const discount = (30*price)/100 //30% discount of given price
    console.log(discount);

    const youHaveToPay = price - discount

    document.getElementById('display').innerText = youHaveToPay
    document.getElementById('save').innerText = discount
})