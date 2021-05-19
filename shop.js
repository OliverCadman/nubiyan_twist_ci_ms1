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
        //console.log(event.target);

        if(event.target.classList.contains('addbasket-button')) {
            let fullPath = 
            event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;
        
            let pos = fullPath.indexOf('album-covers') + 12;
            let partPath = fullPath.slice(pos);

            const item = {};
            item.img = `img-cart${partPath}`;
            let name = event.target.parentElement.parentElement.previousElementSibling;

            console.log(name);

            console.log(item);
            


        }
    });
});



})();