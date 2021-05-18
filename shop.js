// Show Cart

(function(){
const cartInfo = document.getElementById('cart-info');
const cart = document.getElementById('cart');

cartInfo.addEventListener('click', function(){
    cart.classList.toggle('show-cart');
})
})();

// Add Items to Cart

(function (){
const cartBtn = document.querySelectorAll('.addbasket-button');

cartBtn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        console.log(event.target);
    })
})



})();