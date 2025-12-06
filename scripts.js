document.addEventListener("DOMContentLoaded", () => {
    const flipCard = document.getElementById("flipCard");

    if (!flipCard) {
        console.error("flipCard not found in DOM");
        return;
    }

    flipCard.addEventListener("click", () => {
        flipCard.classList.toggle("flipped");
    });
});
