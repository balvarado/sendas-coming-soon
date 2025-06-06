// Set the target date (change this date as needed)
const launchDate = new Date("September 1, 2025 00:00:00").getTime();

// Update the countdown every second
const timer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    if (timeLeft < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "We have launched!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}, 1000);
