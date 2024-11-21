function calculateProgress() {
    const water = parseFloat(document.getElementById("water").value) || 0;
    const steps = parseInt(document.getElementById("steps").value) || 0;
    const sleep = parseFloat(document.getElementById("sleep").value) || 0;

    const waterGoal = 3; 
    const stepsGoal = 10000; 
    const sleepGoal = 8; 

    const waterProgress = ((water / waterGoal) * 100).toFixed(1);
    const stepsProgress = ((steps / stepsGoal) * 100).toFixed(1);
    const sleepProgress = ((sleep / sleepGoal) * 100).toFixed(1);

    let progressHTML = `
        <p>Water Intake: ${water}L (${waterProgress}%)</p>
        <div class="progress-bar" style="width: ${waterProgress}%; background-color: ${waterProgress >= 100 ? 'green' : 'red'};"></div>
        <p>Steps Walked: ${steps} (${stepsProgress}%)</p>
        <div class="progress-bar" style="width: ${stepsProgress}%; background-color: ${stepsProgress >= 100 ? 'green' : 'red'};"></div>
        <p>Sleep Hours: ${sleep}h (${sleepProgress}%)</p>
        <div class="progress-bar" style="width: ${sleepProgress}%; background-color: ${sleepProgress >= 100 ? 'green' : 'red'};"></div>
    `;
}