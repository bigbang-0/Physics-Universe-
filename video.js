const videoData = [
    // ================= MECHANICS =================
    { id: "KOKnWaLiL8w", title: "Newton's Laws of Motion Explained", category: "Mechanics", duration: "12:45" },
    { id: "w3BhzYI6zXU", title: "Vectors and 2D Motion: Crash Course", category: "Mechanics", duration: "10:06" },
    {
        id: "35TCGtI9guM",
        title: "Kinematics: Velocity, Displacement & Units",
        category: "Mechanics",
        duration: "10:00",
    },
    { id: "96gBQqgWwkM", title: "Kinematics Part 1: The Basics", category: "Mechanics", duration: "11:20" },

    // ================= THERMODYNAMICS =================
    { id: "DxL2HoqLbyA", title: "Thermodynamics Crash Course", category: "Thermodynamics", duration: "15:20" },
    { id: "tuSC0ObB-qY", title: "The Physics of Heat", category: "Thermodynamics", duration: "09:00" },
    { id: "aOSIKuD04U", title: "Entropy & The Second Law", category: "Thermodynamics", duration: "15:00" },
    {
        id: "JuWtBR-rDQk",
        title: "Heat Transfer: Conduction, Convection, Radiation",
        category: "Thermodynamics",
        duration: "10:30",
    },

    // ================= QUANTUM PHYSICS =================
    { id: "gD7spIB_Q14", title: "Introduction to Quantum Physics", category: "Quantum Physics", duration: "18:10" },
    {
        id: "Slhiyfpktiw",
        title: "Introduction to Quantum Mechanics (Lecture)",
        category: "Quantum Physics",
        duration: "45:00",
    },
    {
        id: "BGdZBDi3nZ0",
        title: "The Birth of Quantum Mechanics Part 1",
        category: "Quantum Physics",
        duration: "10:00",
    },
    {
        id: "xKUd_eXMhlo",
        title: "The Birth of Quantum Mechanics Part 2",
        category: "Quantum Physics",
        duration: "10:00",
    },

    // ================= ELECTROMAGNETISM =================
    { id: "qMnQQudvaE4", title: "The Electric Field Explained", category: "Electromagnetism", duration: "10:15" },
    { id: "WqvImbn9GG4", title: "MIT Physics Demo: Faraday's Cage", category: "Electromagnetism", duration: "05:00" },
    { id: "K40lNL3KsJ4", title: "Maxwell's Equations: Crash Course", category: "Electromagnetism", duration: "10:49" },
    {
        id: "CvuZNrg9cx8",
        title: "Introduction to Electric & Magnetic Fields",
        category: "Electromagnetism",
        duration: "14:13",
    },

    // ================= WAVES & OPTICS =================
    { id: "iO81v42dQA", title: "Transverse Waves Explained", category: "Waves & Optics", duration: "04:39" },
    { id: "L4BBp1n-hl4", title: "Wave Optics: Huygens' Principle", category: "Waves & Optics", duration: "20:00" },
    { id: "SNUNohhpwQs", title: "Transverse and Longitudinal Waves", category: "Waves & Optics", duration: "12:06" },
    {
        id: "w3BhzYI6zXU",
        title: "Interference and Diffraction of Light",
        category: "Waves & Optics",
        duration: "11:00",
    },

    // ================= RELATIVITY =================
    { id: "AInCqm5nCzw", title: "Special Relativity: Crash Course Physics", category: "Relativity", duration: "09:00" },
    { id: "tebK7Ciiu1s", title: "The Principle of Relativity", category: "Relativity", duration: "10:00" },
    { id: "GNyFDumkfh4", title: "Introduction to Spacetime & Relativity", category: "Relativity", duration: "12:30" },
    { id: "KOKnWaLiL8w", title: "General Relativity & Gravity", category: "Relativity", duration: "11:00" },
];

// 2. Selectors & State
const videoGrid = document.getElementById("videoGrid");
const loadMoreBtn = document.getElementById("videoLoadMoreBtn");
const modal = document.getElementById("videoModal");
const modalIframeContainer = document.getElementById("modalIframeContainer");
const closeModal = document.getElementById("closeModal");
const modalOverlay = document.getElementById("modalOverlay");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentPage = 1;
let currentFilter = "all"; // Track the active filter
const itemsPerPage = 12;

// 3. The Card Generator & Pagination
function renderVideos() {
    // A. Filter the data
    let filteredData = videoData;
    if (currentFilter !== "all") {
        filteredData = videoData.filter((v) => v.category === currentFilter);
    }

    // B. Paginate the filtered data
    const startIndex = 0;
    const endIndex = currentPage * itemsPerPage;
    const videosToShow = filteredData.slice(startIndex, endIndex);

    videoGrid.innerHTML = ""; // Clear grid

    videosToShow.forEach((video) => {
        const thumbUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;

        const card = document.createElement("div");
        card.className = "video-card";
        card.innerHTML = `
            <div class="thumbnail-container" data-id="${video.id}">
                <img src="${thumbUrl}" alt="${video.title}">
                <span class="duration-badge">${video.duration}</span>
            </div>
            <div class="video-info">
                <div class="channel-avatar">
                    <img src= "image/logo.png" alt="Physic Universe Logo" >
                </div>
                <div class="video-text">
                    <h3>${video.title}</h3>
                    <p>Physic Universe • 1M views • 2 days ago</p>
                </div>
            </div>
        `;

        const thumbContainer = card.querySelector(".thumbnail-container");
        attachHoverEvents(thumbContainer, video.id, thumbUrl);
        attachClickEvent(card, video.id);

        videoGrid.appendChild(card);
    });

    // C. Manage the Load More button
    if (endIndex >= filteredData.length) {
        loadMoreBtn.style.display = "none";
    } else {
        loadMoreBtn.style.display = "flex";
    }
}

// 4. The Hover Logic
function attachHoverEvents(container, videoId, thumbUrl) {
    container.addEventListener("mouseenter", () => {
        container.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0" allow="autoplay"></iframe>`;
    });

    container.addEventListener("mouseleave", () => {
        container.innerHTML = `
            <img src="${thumbUrl}" alt="Video">
            <span class="duration-badge">Loading...</span>
        `;
    });
}

// 5. The Full Screen Modal Logic
function attachClickEvent(card, videoId) {
    card.addEventListener("click", () => {
        modalIframeContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" allow="autoplay; fullscreen"></iframe>`;
        modal.classList.add("active");
    });
}

function closeVideoModal() {
    modal.classList.remove("active");
    modalIframeContainer.innerHTML = "";
}

closeModal.addEventListener("click", closeVideoModal);
modalOverlay.addEventListener("click", closeVideoModal);

// 6. Load More Button
loadMoreBtn.addEventListener("click", () => {
    currentPage++;
    renderVideos();
});

// 7. Filter Button Logic
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Update active styling
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Update state and reset page
        currentFilter = button.dataset.filter;
        currentPage = 1;

        renderVideos(); // Re-render the grid
    });
});

// 8. Initialize on page load
renderVideos();
