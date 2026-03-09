function generateMedicalClearance() {
    const statusBox = document.querySelector('.clearance-tag');
    const hrvValue = document.querySelector('.med-card:nth-child(3) .value');
    
    // Simulate real-time recovery data check
    const randomHRV = Math.floor(Math.random() * (95 - 75 + 1)) + 75;
    hrvValue.innerHTML = `${randomHRV} <small>ms</small>`;

    if (randomHRV < 80) {
        statusBox.innerText = "CAUTION: FATIGUE DETECTED";
        statusBox.style.background = "#ff3e3e";
    } else {
        statusBox.innerText = "READY FOR LOAD";
        statusBox.style.background = "#ceff05";
    }
}

// Run on load
window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.clearance-tag')) {
        generateMedicalClearance();
    }
});
