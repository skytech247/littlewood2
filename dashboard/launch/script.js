document.addEventListener("DOMContentLoaded", () => {
    const launchButton = document.getElementById("launch");
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("modal-close-icon");
    const confirmButton = document.getElementById("confirm-button");

    // Show modal when launch button is clicked
    launchButton.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Close modal when close button (x) is clicked
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when confirm button is clicked
    confirmButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
