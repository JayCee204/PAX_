document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const clubName = document.getElementById('clubName').value;
    const btn = document.querySelector('.generate-btn');
    const codeDisplay = document.getElementById('codeDisplay');
    const codeOutput = document.getElementById('generatedCode');

    // Button feedback
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> ENCRYPTING...';
    btn.disabled = true;

    setTimeout(() => {
        // Logic: Generate Code (PAX + First 3 letters of Club + Random Number)
        const prefix = clubName.substring(0, 3).toUpperCase();
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        const finalCode = `PAX-${prefix}-${randomNum}`;

        // Hide form and show code
        document.getElementById('registrationForm').style.opacity = "0.3";
        document.getElementById('registrationForm').style.pointerEvents = "none";
        
        codeOutput.innerText = finalCode;
        codeDisplay.style.display = "block";
        
        btn.innerText = "ORGANIZATION REGISTERED";
        btn.style.background = "#222";
        btn.style.color = "#666";
    }, 2000);
});

function copyCode() {
    const code = document.getElementById('generatedCode').innerText;
    navigator.clipboard.writeText(code);
    alert("Club Code copied to clipboard. Store it securely!");
}
