
let products = [
    { id: 1, title: "Pre-workout", price: "$50", p: "High Energy & Focus", imageUrl: "images/pre.jpg" },
    { id: 2, title: "Whey Protein", price: "$80", p: "Muscle Recovery", imageUrl: "images/whey.jpg" },
    { id: 3, title: "Creatine", price: "$30", p: "Power & Strength", imageUrl: "images/creatine.jpg" },
    { id: 4, title: "BCAA", price: "$40", p: "Amino Acids for recovery", imageUrl: "images/bcaa.jpg" },
    { id: 5, title: "Multivitamins", price: "$25", p: "Daily health support", imageUrl: "images/vitamins.jpg" },
    { id: 6, title: "Omega 3", price: "$20", p: "Heart and brain health", imageUrl: "images/omega3.jpg" },
    { id: 7, title: "Fat Burner", price: "$45", p: "Weight management support", imageUrl: "images/burner.jpg" },
    { id: 8, title: "Mass Gainer", price: "$90", p: "High calorie for bulking", imageUrl: "images/gainer.jpg" }
];

let suppGrid = document.querySelector("#supp-grid");
let badge = document.querySelector(".badge");

function drawItems() {
    let productUI = products.map((item) => {
        return `
            <div class="supp-card">
                <img src="${item.imageUrl}" alt="${item.title}">
                <div class="supp-content">
                    <h3>${item.title}</h3>
                    <p class="supp-price">${item.price}</p>
                    <p style="font-size: 0.9rem; color: #666;">${item.p}</p>
                    <div class="supp-controls">
                        <button class="add-btn" onclick="addToCart(event, ${item.id})">ADD TO CART</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    
    suppGrid.innerHTML = productUI;
}

function addToCart(e, id) {
    e.preventDefault();
    
    let selectedItem = products.find(item => item.id === id);
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.push(selectedItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    showToast(`${selectedItem.title} Added!`);
    updateBadge();
}

function showToast(message) {
    let toast = document.getElementById("toast");
    let toastMsg = document.getElementById("toast-message");
    toastMsg.innerHTML = message;
    toast.classList.add("show");
    
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

function updateBadge() {
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    if (badge) {
        badge.style.display = cartItems.length > 0 ? "block" : "none";
        badge.innerHTML = cartItems.length;
    }
}

drawItems();
updateBadge();
