// --- Exercise Database ---
// NOTE: Swap these .mp4 URLs for actual short clips or optimized GIFs.
const exercises = [
    { 
        name: "Barbell Back Squat", 
        category: "strength", 
        muscles: "Quads, Glutes", 
        anim: "https://static.wixstatic.com/media/762391_93b778749e494a4c8f00ca09d78e7c1d~mv2.mp4" 
    },
    { 
        name: "Kettlebell Swing", 
        category: "strength", 
        muscles: "Hamstrings, Hips", 
        anim: "https://static.wixstatic.com/media/762391_1b7596b6e4b4498a9649514e82b0e68d~mv2.mp4" 
    },
    { 
        name: "Downward Dog To Cobra", 
        category: "mobility", 
        muscles: "Spine, Shoulders", 
        anim: "https://static.wixstatic.com/media/762391_923e2a0487004313b0c0363234d7d91e~mv2.mp4" 
    },
    { 
        name: "Burpee", 
        category: "cardio", 
        muscles: "Full Body", 
        anim: "https://static.wixstatic.com/media/762391_a15f01344440441a87b92641a94b415e~mv2.mp4" 
    }
];

// --- Load Exercises ---
function loadExercises(data) {
    const container = document.getElementById('exerciseContainer');
    container.innerHTML = ''; // Clear current list

    data.forEach(ex => {
        const item = `
            <div class="exercise-item" data-category="${ex.category}">
                <div class="animation-box">
                    <video class="anim-clip" autoplay loop muted playsinline>
                        <source src="${ex.anim}" type="video/mp4">
                    </video>
                </div>
                <div class="exercise-info">
                    <h4>${ex.name}</h4>
                    <p>Target: ${ex.muscles}</p>
                </div>
            </div>
        `;
        container.innerHTML += item;
    });
}

// --- Search Functionality ---
function searchExercises() {
    const input = document.getElementById('exerciseSearch').value.toLowerCase();
    const filtered = exercises.filter(ex => ex.name.toLowerCase().includes(input));
    loadExercises(filtered);
}

// --- Filter Functionality ---
function filterCategory(category) {
    // Update active button state
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        loadExercises(exercises);
    } else {
        const filtered = exercises.filter(ex => ex.category === category);
        loadExercises(filtered);
    }
}

// --- Initialization ---
window.onload = function() {
    // Check if we are on the library page
    if(document.getElementById('exerciseContainer')){
        loadExercises(exercises);
    }
    
    // Previous App Data simulation (from the first prompt)
    if(document.querySelector('.stat-item strong')){
        // Simulate burnt calories logic from previous code
    }
};