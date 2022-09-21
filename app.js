const mainContainer = document.querySelector(".main-container");
const thankYouContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgainButton = document.getElementById("rate-again");
const ratting = document.querySelector(".number-of");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
    mainContainer.style.display = "none";
    thankYouContainer.classList.remove("hidden");
});

rateAgainButton.addEventListener("click", () => {
    mainContainer.style.display = "block";
    thankYouContainer.classList.add("hidden");
});
rates.forEach(e => {
    e.addEventListener("focus", () => {
        ratting.innerHTML = e.innerHTML;
    });
});