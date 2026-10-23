// 1. Select Elements
const filterButtons = document.querySelectorAll(".filter-btn");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const allBooks = Array.from(document.querySelectorAll(".book-card"));

// 2. State Variables
let itemsPerPage = 24; // 4 rows of 6 books
let currentPage = 1;
let currentFilter = "all";

// 3. The Main Display Function
function updateDisplay() {
    // A. Filter the books
    const filteredBooks = allBooks.filter((book) => {
        return currentFilter === "all" || book.dataset.category === currentFilter;
    });

    // B. Calculate how many to show
    const itemsToShow = currentPage * itemsPerPage;

    // C. Loop through ALL books. Hide/Show based on filter AND pagination
    allBooks.forEach((book) => {
        const isMatch = currentFilter === "all" || book.dataset.category === currentFilter;
        const indexInFiltered = filteredBooks.indexOf(book);

        if (isMatch && indexInFiltered < itemsToShow) {
            book.classList.remove("hidden-by-pagination"); // Show
        } else {
            book.classList.add("hidden-by-pagination"); // Hide
        }
    });

    // D. Manage Button Visibility
    if (itemsToShow >= filteredBooks.length) {
        loadMoreBtn.style.display = "none"; // Hide button if all books are shown
    } else {
        loadMoreBtn.style.display = "flex"; // Show button if there are more
    }
}

// 4. Filter Button Click Event
filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Update active button style
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Reset pagination to page 1 for the new filter
        currentFilter = button.dataset.filter;
        currentPage = 1;

        updateDisplay();
    });
});

// 5. Load More Button Click Event
loadMoreBtn.addEventListener("click", () => {
    currentPage++; // Go to next page
    updateDisplay();
});

// 6. Initialize on Page Load
updateDisplay();
