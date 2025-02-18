/*
============================================
DenVex Portfolio - Full-Screen Matrix Background
Created by: DenVex 🚀
Year: 2025
============================================
*/

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

// Встановлюємо розмір Canvas на весь екран
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Символи матриці
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 Welcome to DenVex";
const fontSize = 16; // 🔹 Розмір шрифту для меншої насиченості
const columns = Math.floor(canvas.width / fontSize); // 🔹 Тепер правильно розраховуємо кількість колонок
const drops = Array(columns).fill(1);

// Функція для малювання ефекту "Матриці"
function drawMatrix() {
    // Напівпрозорий темно-сірий фон
    ctx.fillStyle = "rgba(20, 20, 20, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Блідо-сірий колір символів (не такий насичений)
    ctx.fillStyle = "rgba(180, 180, 180, 0.3)";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.50) continue; // 🔹 Пропускаємо деякі символи для меншої щільності

        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Перезапуск символів, коли вони досягають низу
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

// Функція для оновлення розміру canvas при зміні розміру вікна
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Оновлюємо кількість колонок відповідно до нового розміру екрану
    const newColumns = Math.floor(canvas.width / fontSize);
    
    // Якщо кількість колонок змінилася – оновлюємо масив `drops`
    if (newColumns !== drops.length) {
        drops.length = newColumns;
        drops.fill(1);
    }
}

// Запускаємо анімацію
setInterval(drawMatrix, 120);

// Оновлюємо Canvas при зміні розміру вікна
window.addEventListener("resize", resizeCanvas);
