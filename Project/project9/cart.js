const cartContainer = document.getElementById("cartContainer");
const subtotalDisplay = document.getElementById("subtotal");

// Load cart from localStorage


let cart = JSON.parse(localStorage.getItem("cart")) || {};
  
function renderCart() {


    cartContainer.innerHTML = ""; // Clear cart display
    let subtotal = 0;


    if (Object.keys(cart).length === 0) {
        cartContainer.innerHTML = `<p>Your cart is empty. Start adding products!</p>`;
        subtotalDisplay.innerHTML = ""; // Clear subtotal display
        return;
    }
    
    Object.values(cart).forEach((item) => {
        let div = document.createElement("div");
        div.className = "cart-item";

        let title = document.createElement("p");
        title.innerHTML = item.title;

        let price = document.createElement("p");
        price.innerHTML = `Price: $${item.price.toFixed(2)}`;

        let quantity = document.createElement("div");
        quantity.innerHTML = `Quantity: ${item.quantity}`;

        // Remove Button
        let removeBtn = document.createElement("button");
        removeBtn.innerHTML = "Remove";
        removeBtn.addEventListener("click", () => {
            removeFromCart(item.id); // Call remove function
        });

        subtotal += item.price * item.quantity;

        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(quantity);
        div.appendChild(removeBtn);

        cartContainer.appendChild(div);
    });

    subtotalDisplay.innerHTML = `Subtotal: $${subtotal.toFixed(2)}`;
}


// Remove item from cart
function removeFromCart(itemId) {
    
        delete cart[itemId]; // Delete item from cart object
        localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
        renderCart(); // Re-render the cart
    
}

// Initial render of cart
renderCart();
