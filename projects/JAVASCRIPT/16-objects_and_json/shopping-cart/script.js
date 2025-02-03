// object with product data

const products = [
    {
        name: "LD01 LOUNGHE CHAIR",
        price: 10,
        image: "https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png",
        description: "The LD01 Lounge Chair is the epitome of comfort and style. With its plush cushioning and ergonomic design, it provides the perfect seating experience. Whether you're reading a book, watching TV, or simply relaxing, this chair will cradle you in luxury. "
    },
    {
        name: "LD02 LOUNGHE CHAIR",
        price: 20,
        image: "https://purepng.com/public/uploads/large/purepng.com-office-chairchairfurniturebusinessobjectsoffice-chair-821523987888r4nnh.png",
        description: "The LD02 Lounge Chair is a modern take on a classic design. With its sleek lines and minimalist aesthetic, it's the perfect addition to any contemporary living space. Whether you're looking for a stylish accent piece or a comfortable place to relax, this chair has you covered."
    },
    {
        name: "LD03 LOUNGHE CHAIR",
        price: 30,
        image: "https://static.vecteezy.com/system/resources/previews/022/024/774/non_2x/chair-isolated-on-a-transparent-background-png.png",
        description: "The LD03 Lounge Chair is the perfect blend of form and function. With its clean lines and contemporary design, it's the ideal choice for any modern home. Whether you're looking for a stylish accent piece or a comfortable place to relax, this chair has you covered."
    },
    {
        name: "LD04 LOUNGHE CHAIR",
        price: 50,
        image: "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-modern-white-chair-object-png-image_10076590.png",
        description: "The LD04 Lounge Chair is a modern take on a classic design. With its sleek lines and minimalist aesthetic, it's the perfect addition to any contemporary living space. Whether you're looking for a stylish accent piece or a comfortable place to relax, this chair has you covered."
    }

];

// shopping cart sliding menu
const shopping_cart = document.getElementById("shopping-cart");
const cart_menu = document.getElementById("cart-menu");

//funzione che mostra il menu
shopping_cart.addEventListener("click", function ShowCart() {

    cart_menu.style.transform = "translateX(0%)";
});


// funzione che chiude il menu
const close_menu = document.getElementById("close-menu"); 
close_menu.addEventListener("click", function closeMenu() {

    cart_menu.style.transform = "translateX(110%)";
});



// change the main product based on the eventListener 
const main_item = document.getElementById("selected-item");
const item = document.querySelectorAll(".item > img");

// item data
const item_title = document.getElementById("item-title");
const item_img = document.getElementById("item-img");
const item_price = document.getElementById("item-price");
const item_description = document.getElementById("item-description");


// funzione che cambia i dati del prodotto selezionato in base ai dati dell'oggetto corrispondente
item.forEach((product, index) => {

    product.addEventListener("click", function() {

        // cambio la struttura dell'html in base ai dati della card selezionata
        const selectedProduct = products[index];

        main_item.innerHTML = `

             <h2>PRODUCT DETAIL</h2>
             <div class="main-flex-container">
            <img id="item-img" src="${selectedProduct.image}" alt="${selectedProduct.name}" />
            <div>
                <p id="item-title">${selectedProduct.name}</p>
                <span id="item-price">${selectedProduct.price}</span>
                <div class="main-item-buttons">
                    <button class="primary-button">Check Out</button>
                    <button class="add-cart-button" onclick="addToCart()">Add To Cart  <i class="fas fa-shopping-cart"></i></button>
                </div>
                <p id="item-description">${selectedProduct.description}</p>
            </div>
        </div>
        <h2>Similar Products</h2>

        `;
    })
});


// array del carrello
const cart = [];

// Keep the closeMenu function outside to ensure it works consistently
function closeMenu() {
    cart_menu.style.transform = "translateX(110%)";
}

// Bind the closeMenu event listener once (not dynamically)
document.getElementById("close-menu").addEventListener("click", closeMenu);

// Function to display the cart items dynamically
function displayCart() {
    const cart_items_container = document.getElementById("cart-items-container");
    cart_items_container.innerHTML = ''; // Clear the container before adding items

    if (cart.length === 0) {
        cart_items_container.innerHTML = `<p>Your cart is empty.</p>`;
    } else {
        cart.forEach(item => {
            cart_items_container.innerHTML += `
                <div style="display: flex; align-items: center;">
                    <img src="${item.image}" alt="${item.name}" style="width: 5rem; height: auto;">
                    <span>${item.name} - ${item.price}$ (x${item.quantity})</span>
                </div>
            `;
        });
    }
}

// Add to Cart function
function addToCart(index) {
    const selectedProduct = products[index]; 
    const existingProduct = cart.find(item => item.name === selectedProduct.name);

    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ 
            name: selectedProduct.name,
            price: selectedProduct.price,
            image: selectedProduct.image,
            quantity: 1
        });
    }

    // Update cart items count
    const cart_items_count = document.getElementById("shopping-items");
    cart_items_count.innerHTML = cart.reduce((total, item) => total + item.quantity, 0);

    // Display updated cart
    displayCart();
}


// Event listeners for product items
item.forEach((product, index) => {
    product.addEventListener("click", function() {
        const selectedProduct = products[index];

        main_item.innerHTML = `
            <h2>PRODUCT DETAIL</h2>
            <div class="main-flex-container">
                <img id="item-img" src="${selectedProduct.image}" alt="${selectedProduct.name}" />
                <div>
                    <p id="item-title">${selectedProduct.name}</p>
                    <span id="item-price">${selectedProduct.price}</span>
                    <div class="main-item-buttons">
                        <button class="primary-button">Check Out</button>
                        <button class="add-cart-button" onclick="addToCart(${index})">Add To Cart  <i class="fas fa-shopping-cart"></i></button>
                    </div>
                    <p id="item-description">${selectedProduct.description}</p>
                </div>
            </div>
            <h2>Similar Products</h2>
        `;
    });
});

// funzione che calcola il totale

const checkOut_button = document.getElementById("check-out"); 
checkOut_button.addEventListener("click", function checkOut() {

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        
      total += cart[i].price*cart[i].quantity;
    } 

    checkOut_button.innerHTML =  "Total: " + total + "$";
});
