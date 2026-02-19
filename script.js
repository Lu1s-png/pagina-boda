const targetDate = new Date("2026-06-07T16:00:00-05:00");

function updateCountdown() {
    const now = new Date();
    const diffTime = targetDate - now;

    if (diffTime <= 0) {
        document.querySelector(".countdown").textContent = "¡Hoy es el gran dia! 💖";
        return;
    }

    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diffTime / (1000 * 60)) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
}

setInterval(updateCountdown, 1000);
updateCountdown();
