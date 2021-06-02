/* Shopping Cart JavaScript - Referenced from YouTube video tutorials:
    YouTube Channel - freecodecamp.org
    Video Name - JavaScript Project Tutorial: Shopping Cart 
    
    &
    
    Youtube Channel - Web Dev Simplified 
    Video Name - JavaScript Shopping Cart Tutorial For Beginners */

    


// Show Cart - Referenced from YouTube channel "freecodecamp.org"

(function(){
    const cartInfo = document.getElementById('basket-info');
    const cart = document.getElementById('basket');
    const hideCart = document.getElementById('close-basket');
    const checkout = document.getElementById('checkout-button');
  

    
    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-basket');
    })

    hideCart.addEventListener('click', function(){
        cart.classList.toggle('show-basket');
    })

    checkout.addEventListener('click', function(){
        cart.classList.toggle('show-basket');
    })

    })();


 // Add Items to Cart - Referenced from YouTube Channel "freecodecamp.org"
    
    (function (){
    const cartBtn = document.querySelectorAll('.addbasket-button');
    
    cartBtn.forEach(function(btn) {
        btn.addEventListener('click', function(event) {
    
            if(event.target.classList.contains('addbasket-button')) {
                let fullPath = 
                event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.src;
    
                console.log(fullPath)
            
                let pos = fullPath.indexOf('shop-images') + 11 
    
    
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

    
                const cartItem = document.createElement('div');
                cartItem.classList.add('basket-item', 
                                    'd-flex', 
                                    'justify-content-start', 
                                    'my-3');
    
                cartItem.innerHTML = `
                    <img src="${item.img}" id="item-img" alt="">
                    <div class="basket-item d-flex justify-content-between text-capitalize my-md-3">
                        <div class="item-text">
                            <p id="basket-item-title" class="font-weight-bold ml-3 mb-0"><span class="block">${item.name}</span></p>
                            <span class="ml-3">£</span>
                            <span id="basket-item-price" class="basket-item-price mb-0">${item.price}</span>
                        </div>
                        <div>
                        <button type="button" class="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>`;

                

                   // Select Cart - Referenced from YouTube Channel "freecodecamp.org"
    
                const cart = document.getElementById('basket');
                const total = document.querySelector('.basket-total-container');
             
    
                cart.insertBefore(cartItem, total);
                showTotals();

                
                
                /* Remove Cart Item Button JavaScript referenced from YouTube tutorial:
                YouTube Channel - Web Dev Simplified
                Video Name - JavaScript Shopping Cart Tutorial for Beginners */

                var removeCartItemButtons = document.getElementsByClassName('btn-danger')
                for (var i = 0; i < removeCartItemButtons.length; i++) {
                    var button = removeCartItemButtons[i]
                    button.addEventListener('click', removeCartItem)
                    console.log('click')
                        
                }
                function removeCartItem(event) {
                 var buttonClicked = event.target
                buttonClicked.parentElement.parentElement.parentElement.remove();
                showTotals();
                }
                
    
    
            }
        });
    });
    
        // Show Total Price - Referenced from YouTube Channel "freecodecamp.org"
        function showTotals(){
           
            const total =[];
            const items = document.querySelectorAll('.basket-item-price');
    
            items.forEach(function(item) {
                total.push(parseFloat(item.textContent));
            })
    
            const totalMoney = total.reduce(function(total,item){
                total += item;
                return total;
            },0);
    
            const finalMoney = totalMoney.toFixed(2);
    
            document.getElementById('basket-total').textContent = finalMoney;
            document.getElementById('item-count').textContent = '(' + total.length + ')';
        }
    
    })();
    
    
    
    
    /* Checkout Modal Window - "Same as Billing Address" checkbox.
        Code referenced from Youtube Video Tutorial:
        Youtube Channel - Cairocoders
        Video Name - "Billing Address Same as Shipping Address jQuery" */

   $(document).ready(function(){
       $('#sameAddr').click(function(){
           if ($('#sameAddr').is(':checked')) {
               $('#fname_billing').val($('#fname_delivery').val());
               $('#lname_billing').val($('#lname_delivery').val());
               $('#addr_billing').val($('#addr_delivery').val());
               $('#addr_billing_2').val($('#addr_delivery_2').val());
               $('#city_billing').val($('#city_delivery').val());
               $('#country_billing').val($('#country_delivery').val());
               $('#zip_billing').val($('#zip_delivery').val());
           } else {
            $('#fname_billing').val('');
            $('#lname_billing').val('');
            $('#addr_billing').val('');
            $('#addr_billing_2').val('');
            $('#city_billing').val('');
            $('#country_billing').val('');
            $('#zip_billing').val('');
           }
       })
   });

        


    