const mealsByDiet = {
    keto: [
        { id: 1,
          name: "Roasted Broccoli with Lemon-Garlic",
          diet: "keto",
          price: 12,
          calories: 167, protein: 3, carbs: 8, fats: 14,
          image:"https://www.eatingwell.com/thmb/fAre8enJigr5a6ugYBIhS0z4TIg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7881931-aa3fe8282b4b426bb944977b86833ae2.jpg",
         },
           { id: 2,
          name: "Sea Bass with Citrus Salsa",
          diet: "keto",
          price: 14,
          calories: 298, protein: 32, carbs: 14, fats: 12,
          image:"https://www.eatingwell.com/thmb/H0_cXJuASuGVNZsHmy03AFJCfwM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sea-bass-citrus-salsa-8029366-e75dcb5400bf4497887b19098ab4439c.jpg",
         }
    ],

    paleo: [
        { id: 3,
          name: "Guacamole-Stuffed Poblano Peppers",
          diet: "paleo",
          price: 15,
          calories: 185, protein: 3, carbs: 14, fats: 15,
          image:"https://www.eatingwell.com/thmb/CTrJKJdYn2zWQ2_SlnMZZkQAT3Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3758222-2f440abb184c48c1a27ff59e38f38954.jpg",
         },
           { id: 4,
          name: "Green Eggs & Ham Soup",
          diet: "paleo",
          price: 14,
          calories: 266, protein: 22, carbs: 14, fats: 15,
          image:"https://www.eatingwell.com/thmb/Pv2woPzYG99ixfVSnZzSzjqXtvg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/56783951-678946d0202e40c0903df3303917f1d7.jpg",
         }
        
    ],

    protein: [
        { id: 5,
          name: "Turkey Meatballs and Cheese Raviolis",
          diet: "protein",
          price: 16,
          calories: 700, protein: 53, carbs: 64, fats: 26,
          image:"https://uploads-v2.trifectanutrition.com/wp-content/uploads/2024/12/02112041/PM0001TY-002-1.jpg",
         },
           { id: 6,
          name: "Panang Chicken Curry",
          diet: "protein",
          price: 16,
          calories: 635, protein: 38, carbs: 18, fats: 48,
          image:"https://uploads-v2.trifectanutrition.com/wp-content/uploads/2023/11/20101826/KT0019CX-002-1.jpg",
         }
    ],

    vegan: [
        { id: 7,
          name: "Ratatouille",
          diet: "vegan",
          price: 19,
          calories: 152, protein: 4, carbs: 30, fats: 4,
          image:"https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg?resize=600:*&output-format=auto&output-quality=auto",
         },
           { id: 8,
          name: "Sourdough Bread",
          diet: "vegan",
          price: 16,
          calories: 460, protein: 12, carbs: 96, fats: 1,
          image:"https://img.buzzfeed.com/video-api-prod/assets/dffd29bd9d394a8c8b0770c61dc0c079/FB.jpg?resize=600:*&output-format=auto&output-quality=auto",
         }
    ],

    vegetarian:[
        { id: 9,
          name: "Vegetarian Spaghetti Squash Lasagna",
          diet: "vegetarian",
          price: 16.50,
          calories: 350, protein:18, carbs:34, fats:18,
          image:"https://www.eatingwell.com/thmb/OTThIfqp9s1ZXFpcJrpZBqM3UFY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4684307-60bfbee57d1a401cba6cb268ff511779.jpg",
         }
    ],

    dash:[
        { id: 10,
          name: "Stuffed Sweet Potato with Hummus Dressing",
          diet: "dash",
          price: 15,
          calories: 472, protein: 21, carbs:85, fats:7,
          image:"https://www.eatingwell.com/thmb/w8D0PZsdBoyC8GvHbMSlF4aQBV4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/4565006-246ba274a2b645fdad6a9d0274a41b88.jpg",
         }
    ],

    mediterranean:[
        { id: 11,
          name: "Fajita-Stuffed Portobello Mushrooms",
          diet: "mediterranean",
          price: 15,
          calories: 427, protein: 23, carbs: 33, fats:25,
          image:"https://www.eatingwell.com/thmb/46ufG32V46DpmRH9RCKMKfX_tRs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-fajita-stuffed-portobello-mushrooms-beauty-133_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-ced6a9e310e943a79ade55f3fcd505e2.jpg",
         },
           { id: 12,
          name: "Spaghetti Squash Nests with Kale, White Beans & Mushrooms",
          diet: "mediterranean",
          price: 15,
          calories: 366, protein: 10, carbs: 36, fats: 22,
          image:"https://www.eatingwell.com/thmb/ThT31CQYyRLRMyhH0kGoV2rt8ik=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/EWL-Spaghetti-Squash-Nests-Kale-White-Bean-Mushrooms-3x2-097_preview_maxWidth_4000_maxHeight_4000_ppi_300_quality_100-f1d4804b5c69457d9b5101a9d40a6d20.jpg",
         }
    ],
    whole30:[
        { id: 13,
          name: "Baby Kale Breakfast Salad with Smoked Trout & Avocado",
          diet: "whole30",
          price: 14.50,
          calories: 275, protein: 10, carbs: 9, fats:23,
          image:"https://www.eatingwell.com/thmb/lukfLJ9uLprRTMKuO1_V3zu43Fg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3749998-01ea9845bbae4bb98a8d23da1c246cd1.jpg",
         }
    ],


}

// Local Quantities (Not a full cart logic)
let quantities = {};
let currentFilter = 'all';

function getAllMeals() {
    return Object.values(mealsByDiet).flat();
}

function renderMeals() {
    const grid = document.getElementById('meals-grid');
    let filtered = (currentFilter === 'all') ? Object.values(mealsByDiet).flat() : (mealsByDiet[currentFilter] || []);
    
    grid.innerHTML = filtered.map(meal => {
        const qty = quantities[meal.id] || 0;
        return `
        <div class="meal-card">
            <img src="${meal.image}" alt="${meal.name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
            
            <div class="meal-content">
                <h3>${meal.name}</h3>
                <p>$${meal.price}</p>
                <div class="nutrition-grid">
                    <div class="stat-box calories">🔥 ${meal.calories}</div>
                    <div class="stat-box protein">💪 ${meal.protein}g</div>
                    <div class="stat-box carbs">🌾 ${meal.carbs}g</div>
                    <div class="stat-box fats">🧈 ${meal.fats}g</div>
                </div>
                <div class="meal-controls">
                    <div class="quantity-selector">
                        <button onclick="changeQty(${meal.id}, -1)" class="qty-btn">−</button>
                        <span id="qty-${meal.id}" class="qty-number">${qty}</span>
                        <button onclick="changeQty(${meal.id}, 1)" class="qty-btn">+</button>
                    </div>
<button onclick="addToCart(${meal.id})" class="add-btn">Add</button>
                </div>
            </div>
        </div>`;
    }).join('');

}

//Only changes the number shown
function changeQty(id, delta) {
    quantities[id] = Math.max(0, (quantities[id] || 0) + delta);
    const el = document.getElementById(`qty-${id}`);
    if (el) el.textContent = quantities[id];
}

//Triggered when "Add" is clicked
function handleAddClick(id) {
    //  لسا كود ال cart
    showToast(`Meal ${id} selected! ✓`);
}

function filterMeals(diet) {
    currentFilter = diet;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Find and activate the clicked button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if(btn.textContent.toLowerCase() === diet.toLowerCase()) btn.classList.add('active');
    });

    renderMeals();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}


function addToCart(id) {
    const quantity = quantities[id] || 0;

    if (quantity === 0) {
        showToast("Please Choose the quantity first!! ⚠️");
        return;
    }

    const allMeals = getAllMeals();
    const selectedMeal = allMeals.find(meal => meal.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let productToAdd = {
        id: selectedMeal.id,
        title: selectedMeal.name,
        price: "$" + selectedMeal.price,
        imageUrl: selectedMeal.image,
        p: `${selectedMeal.diet} diet`,
    };

    for (let i = 0; i < quantity; i++) {
        cart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(cart));


    showToast(`Added ${quantity} Successfully!!✅`); 
    

    quantities[id] = 0;
    document.getElementById(`qty-${id}`).textContent = 0;
}

renderMeals();