document.addEventListener("DOMContentLoaded", () => {
    // --- 1. Animate the XP Bar ---
    const xpBar = document.getElementById("xpBar");
    // Wait 300ms for the page to load, then set the width to 49% (2450/5000)
    setTimeout(() => {
        xpBar.style.width = "49%";
    }, 300);

    // --- 2. Generate the Heatmap Data ---
    const heatmapGrid = document.getElementById("heatmapGrid");
    const totalDays = 140; // Approximately 5 months of data

    for (let i = 0; i < totalDays; i++) {
        const box = document.createElement("div");

        // Randomly assign activity levels (0 to 3)
        // Math.random() gives 0-1. We multiply by 4 to get 0-3.999, then floor.
        // We bias it slightly so level 0 (empty) is more common.
        let activityLevel = Math.floor(Math.random() * 4);

        // Add the class
        box.classList.add("hm-box", `level-${activityLevel}`);

        // Add a tooltip title
        box.title = `${activityLevel * 30} minutes studied`;

        heatmapGrid.appendChild(box);
    }
});
