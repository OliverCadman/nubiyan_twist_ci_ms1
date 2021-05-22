// Show Cart

(function(){
    const cartInfo = document.getElementById('cart-info');
    const cart = document.getElementById('cart');
    const hideCart = document.getElementById('close-basket')
    
    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })

    hideCart.addEventListener('click', function(){
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
    
                console.log(fullPath)
            
                let pos = fullPath.indexOf('shop-images') + 11;
    
                // console.log(pos)
    
    
                let partPath = fullPath.slice(pos);
    
                console.log(partPath);
    
                const item = {};
                console.log(item)
                item.img = `assets/images/img-cart${partPath}`;
                let name = event.target.parentElement.parentElement.children[0].children[0].textContent;
                item.name = name;
                let price = event.target.parentElement.parentElement.children[1].children[1].textContent;
                item.price = price;
                let finalPrice = price.slice(1).trim();
    
                item.price = finalPrice;
    
                // console.log(item);
    
                const cartItem = document.createElement('div');
                cartItem.classList.add('cart-item', 
                                    'd-flex', 
                                    'justify-content-start', 
                                    'my-3');
    
                cartItem.innerHTML = `
                    <img src="${item.img}" id="item-img" alt="">
                    <div class="cart-item d-flex justify-content-between text-capitalize my-md-3">
                        <div class="item-text">
                            <p id="cart-item-title" class="font-weight-bold ml-3 mb-0"><span class="block">${item.name}</span></p>
                            <span class="ml-3">£</span>
                            <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
                        </div>
                        <div>
                        <button type="button" class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>`;
    
                // Select Cart
    
                const cart = document.getElementById('cart');
                const total = document.querySelector('.cart-total-container');
    
                cart.insertBefore(cartItem, total);
                showTotals();
                
    
    
            }
        });
    });
    
        // Show Total Price
        function showTotals(){
           
            const total =[];
            const items = document.querySelectorAll('.cart-item-price');
    
            items.forEach(function(item) {
                total.push(parseFloat(item.textContent));
            })
    
            const totalMoney = total.reduce(function(total,item){
                total += item;
                return total;
            },0);
    
            const finalMoney = totalMoney.toFixed(2);
    
            document.getElementById('cart-total').textContent = finalMoney;
            document.getElementById('item-count').textContent = '(' + total.length + ')';
        }
    
    })();


    