import { links } from "./links.js";

let lastScroll = 0;
const topbar = document.getElementById("topbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScroll) {
        // Scroll down
        topbar.classList.add("hidden");
    } else {
        // Scroll up
        topbar.classList.remove("hidden");
    }
    lastScroll = currentScroll;
});

const navbar = document.getElementById("navbar");
links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.path;
    a.textContent = link.label;
    navbar.appendChild(a);
});
