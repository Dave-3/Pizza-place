function addToCartClicked(event) {
    
    var title = document.getElementByIdName('size')[0].innerText
    var price = document.getElementByIdName('toppings')[0].innerText
    var crust = document.getElementByIdName('crust')[0].src
    addItemToCart(title, price, crust)
}
