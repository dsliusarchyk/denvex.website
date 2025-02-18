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

    if (!menu || !buttonImg) return; // Перевірка на існування елементів

    menu.classList.toggle("open");

    // Зміна іконки: бургер-меню ↔ хрестик
    buttonImg.src = menu.classList.contains("open") ? "./icons/close.svg" : "./icons/code-menu.svg";
}

// Закриття меню при кліку поза ним (але не на кнопці меню)
document.addEventListener("click", function(event) {
    const menu = document.getElementById("sideMenu");
    const button = document.getElementById("menuBtn");

    if (!menu || !button) return;

    // Якщо натискання поза меню та кнопкою, закриваємо його
    if (menu.classList.contains("open") && 
        !menu.contains(event.target) && 
        !button.contains(event.target)) {
        menu.classList.remove("open");

        // Повертаємо початкову іконку
        const buttonImg = button.querySelector("img");
        if (buttonImg) {
            buttonImg.src = "./icons/code-menu.svg";
        }
    }
});

// Ефект друкування тексту (анімація)
document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to DenVex";
    let i = 0;
    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return; // Уникаємо помилки, якщо елемента немає

    typingElement.innerHTML = ""; // Очищаємо текст перед друком

    function typeWriter() {
        if (i < text.length) {
            typingElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Швидкість друку
        }
    }
    typeWriter();
});
