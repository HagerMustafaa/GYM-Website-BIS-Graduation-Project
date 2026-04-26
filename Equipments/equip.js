const equipments = [
    { id: 1, name: "Resistance Bands", price: 10, img: "../Gallery/Resistance Bands.jfif" },
    { id: 2, name: "Yoga Mat", price: 25, img: "../Gallery/yoga mat.jfif" },
    { id: 3, name: "Dumbbells set", price: 50, img: "../Gallery/dumbbell set.jfif" },
    { id: 4, name: "Jump Rope", price: 10, img: "../Gallery/jump rope.jfif" },
    { id: 5, name: "Fitball", price: 15, img: "../Gallery/fitball.jfif" },
    { id: 6, name: "Push up bars", price: 40, img: "../Gallery/push up bars.jfif" }
    
];

function displayEquipments() {
    const grid = document.getElementById('equip-grid');
    grid.innerHTML = equipments.map(item => `
        <div class="equip-card">
            <img src="${item.img}" alt="${item.name}">
            <div class="eqip-content">
                <h3>${item.name}</h3>
                <p class="eqip-price">$${item.price}</p>
                <div class="eqip-controls">
                    <div class="quantity-selector">
                        <button class="qty-btn" onclick="changeQty(this, -1)">-</button>
                        <span class="qty-number">1</span>
                        <button class="qty-btn" onclick="changeQty(this, 1)">+</button>
                    </div>
                      <button class="add-btn" onclick="addToCart(${item.id}, this)">Add</button>
                </div>
            </div>
        </div>
    `).join('');
}


function changeQty(btn, change) {
    const qtySpan = btn.parentElement.querySelector('.qty-number');
    let currentQty = parseInt(qtySpan.innerText);
    currentQty = Math.max(1, currentQty + change);
    qtySpan.innerText = currentQty;
}


function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function addToCart(id, btn) {
    const qtySpan = btn.parentElement.querySelector('.qty-number');
    const quantity = parseInt(qtySpan.innerText);

    let selectedProduct = equipments.find(item => item.id === id);


    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let productToAdd = {
        id: selectedProduct.id,
        title: selectedProduct.name, 
        price: "$" + selectedProduct.price, 
        imageUrl: selectedProduct.img,
        p: "Equipment Item", 
        qty: quantity
    };


    for(let i = 0; i < quantity; i++) {
        cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    showToast();
}

window.onload = displayEquipments;