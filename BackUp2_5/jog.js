let time = 0;
let distance = 0;
let timerVar;
let holdTimer;

function startRun() {
    timerVar = setInterval(() => {
        time++;
        distance += 0.0035; // Simulated distance
        
        // Update Distance
        document.getElementById('distance-display').innerText = distance.toFixed(2);
        
        // Update Timer
        const m = Math.floor(time / 60).toString().padStart(2, '0');
        const s = (time % 60).toString().padStart(2, '0');
        document.getElementById('timer-display').innerText = `${m}:${s}`;
        
        // Update Pace (Time per KM)
        if (distance > 0) {
            const paceMin = Math.floor((time / 60) / distance);
            const paceSec = Math.floor(((time / 60) / distance) % 1 * 60);
            document.getElementById('pace-display').innerText = `${paceMin}'${paceSec.toString().padStart(2, '0')}"`;
        }
    }, 1000);
}

// "Hold to Stop" Logic
function startHold() {
    holdTimer = setTimeout(finishRun, 1500); // Must hold for 1.5 seconds
}

function cancelHold() {
    clearTimeout(holdTimer);
}

function finishRun() {
    clearInterval(timerVar);
    document.getElementById('summary-overlay').style.display = 'block';
    
    // Summary Stats
    const peak = (14 + Math.random() * 4).toFixed(1);
    const cals = Math.floor(distance * 65); // Rough calorie burn
    const nextDist = (distance * 1.1).toFixed(2);

    document.getElementById('peak-speed').innerText = peak + " km/h";
    document.getElementById('calories').innerText = cals;
    document.getElementById('target-msg').innerText = 
        `Strong session. Your aerobic baseline is rising. For your next run, target ${nextDist} KM to maintain current progress.`;
}

window.onload = startRun;
