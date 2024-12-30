// script.js
document.addEventListener("DOMContentLoaded", () => {
    const vipButton = document.getElementById("vip");
    const serviceButton = document.getElementById("service");
    const latestEventsButton = document.getElementById("latest-events");
    const withdrawalButton = document.getElementById("withdrawal");
    const homeButton = document.getElementById("home");
    const launchButton = document.getElementById("launch");
    const myButton = document.getElementById("my");

    vipButton.addEventListener("click", () => {
        alert("VIP clicked");
    });

    serviceButton.addEventListener("click", () => {
        alert("Service clicked");
    });

    latestEventsButton.addEventListener("click", () => {
        alert("Latest Events clicked");
    });

    withdrawalButton.addEventListener("click", () => {
        alert("Withdrawal clicked");
    });

    homeButton.addEventListener("click", () => {
        alert("Home clicked");
    });

    launchButton.addEventListener("click", () => {
        alert("Launch clicked");
    });

    myButton.addEventListener("click", () => {
        alert("My clicked");
    });
});
