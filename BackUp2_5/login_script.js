document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorDiv = document.getElementById('errorMessage');
    const toast = document.getElementById('successToast');
    const progress = document.querySelector('.toast-progress');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // 1. Capture Inputs
            const userField = document.getElementById('coachId');
            const passField = document.getElementById('password');
            const clubField = document.getElementById('clubCode');
            const btn = document.getElementById('loginBtn');

            const user = userField.value;
            const pass = passField.value;
            const club = clubField.value;

            // 2. Reset UI State
            errorDiv.style.display = "none";
            errorDiv.innerText = "";
            clubField.style.borderColor = "#333"; 

            // 3. SEQUENTIAL VALIDATION
            // If any of these fail, the code "returns" and stops.

            if (user !== "C.Jesse") {
                showError("incorrect username");
                return;
            }

            if (pass !== "jesse204") {
                showError("invalid password");
                return;
            }

            // CLUB CODE SECURITY GATE
            if (club !== "PAX-2026") {
                showError("invalid club code. Contact your performance director");
                
                // AUTO-CLEAR FEATURE
                clubField.value = ""; // Wipes the field
                clubField.style.borderColor = "#ff4d4d"; // Red alert border
                clubField.focus(); // Re-focus for a new attempt
                return; 
            }

            // 4. SUCCESS PROTOCOL
            // Only reaches here if User, Pass, AND Club Code are 100% correct.
            btn.innerHTML = '<i class="fa-solid fa-gear fa-spin"></i> LOGGING IN...';
            btn.disabled = true;

            setTimeout(() => {
                toast.classList.add('show');
                if (progress) {
                    progress.style.transition = 'width 1.5s linear';
                    progress.style.width = '0%';
                }
            }, 500);

            setTimeout(() => {
                window.location.href = "student.html";
            }, 2000);
        });
    }

    function showError(msg) {
        errorDiv.innerText = msg;
        errorDiv.style.display = "block";
    }
});