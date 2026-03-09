document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.nav-item.active').classList.remove('active');
        this.classList.add('active');
    });
});

// Simulate a data update from Performance Analytics X
function updateStats() {
    const calories = document.querySelector('.stat-item strong');
    let currentCals = parseInt(calories.innerText.replace(',', ''));
    
    // Every 5 seconds, simulate burned calories
    setInterval(() => {
        currentCals += Math.floor(Math.random() * 5);
        calories.innerText = currentCals.toLocaleString();
    }, 5000);
}

window.onload = updateStats;
