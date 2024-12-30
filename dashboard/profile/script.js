// script.js
document.addEventListener("DOMContentLoaded", () => {
    const walletButton = document.getElementById("wallet");
    const vipDetailsButton = document.getElementById("vip-details");
    const serviceButton = document.getElementById("service");
    const homeButton = document.getElementById("home");
    const launchButton = document.getElementById("launch");
    const myButton = document.getElementById("my");

    walletButton.addEventListener("click", () => {
        alert("Wallet clicked");
    });

    vipDetailsButton.addEventListener("click", () => {
        alert("VIP Details clicked");
    });

    serviceButton.addEventListener("click", () => {
        alert("Service clicked");
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
