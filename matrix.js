/*
============================================
DenVex Portfolio - Full-Screen Matrix Background
Created by: DenVex 🚀
Year: 2025
============================================
*/

const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 Welcome to DenVex";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);


function drawMatrix() {

    ctx.fillStyle = "rgba(20, 20, 20, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "rgba(180, 180, 180, 0.3)";
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        if (Math.random() > 0.50) continue; 

        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);


        if (drops[i] * fontSize > canvas.height && Math.random() > 0.98) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const newColumns = Math.floor(canvas.width / fontSize);
    
    if (newColumns !== drops.length) {
        drops.length = newColumns;
        drops.fill(1);
    }
}

setInterval(drawMatrix, 120);

window.addEventListener("resize", resizeCanvas);
