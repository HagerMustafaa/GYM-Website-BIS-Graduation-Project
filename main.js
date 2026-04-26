function handleScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal'); 
    const windowHeight = window.innerHeight;
    const revealPoint = 150; 

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        } 
    });
}

window.addEventListener('load', () => {
    handleScrollAnimations();
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

window.addEventListener('scroll', handleScrollAnimations);

function selectPlan(planName) {
    const planDisplay = document.getElementById('display-plan');
    planDisplay.innerText = planName + " PLAN";
    
    const overlay = document.getElementById('membership-overlay');
    overlay.style.display = 'flex';
    
    localStorage.setItem('userMembership', planName);
}

function closeCard() {
    const overlay = document.getElementById('membership-overlay');
    overlay.style.display = 'none';
    
    alert("Please visit our branch to buy and activate your ID Card!");
}