document.addEventListener("DOMContentLoaded", function() {
    let cart = [];
    const cartItemsContainer = document.querySelector(".cartname");
    const totalPriceElement = document.querySelector(".cartprice");


       // Event listener for Add to Cart buttons
       document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", function() {
          const name = this.getAttribute("data-name");
          const price = parseFloat(this.getAttribute("data-price"));
    
          addToCart(name, price);
          displayCart();
        });
      });


      // Function to add product to the cart
    function addToCart(name, price) {
        const item = cart.find(product => product.name === name);
        if (item) {
          item.quantity++;
        } else {
          cart.push({ name, price, quantity: 1 });
        }
      }
    
      // Function to display the cart items
      function displayCart() {
        cartItemsContainer.innerHTML = ""; // Clear existing cart items
        let total = 0;
    
        cart.forEach(item => {
          const cartItem = document.createElement("p");
          cartItem.textContent = `${item.name} (x${item.quantity}) - Rs${(item.price * item.quantity).toFixed(2)}`;
          cartItemsContainer.appendChild(cartItem);
    
          total += item.price * item.quantity;
        });
    
        totalPriceElement.textContent = total.toFixed(2);
      }
    });
    



