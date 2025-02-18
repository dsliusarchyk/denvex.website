/*
============================================
DenVex Portfolio - Interactive Features
Created by: DenVex 🚀
Year: 2025
============================================
*/

function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const buttonImg = document.getElementById("menuBtn").querySelector("img");

    if (!menu || !buttonImg) return;

    menu.classList.toggle("open");

    buttonImg.src = menu.classList.contains("open") ? "./icons/close.svg" : "./icons/code-menu.svg";
}

document.addEventListener("click", function(event) {
    const menu = document.getElementById("sideMenu");
    const button = document.getElementById("menuBtn");

    if (!menu || !button) return;

    if (menu.classList.contains("open") && 
        !menu.contains(event.target) && 
        !button.contains(event.target)) {
        menu.classList.remove("open");

        const buttonImg = button.querySelector("img");
        if (buttonImg) {
            buttonImg.src = "./icons/code-menu.svg";
        }
    }
});

document.getElementById("current-year").textContent = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to DenVex";
    let i = 0;
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return; 

    typingElement.innerHTML = "";

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});
