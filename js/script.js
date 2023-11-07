const words = [
    { word: "HTML", color: "#F06529" },
    { word: "CSS", color: "#2965F1" },
    { word: "JAVASCRIPT", color: "#F0DB4F" },
];

let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100;

function typeWord() {
    const word = words[wordIndex];
    const color = word.color;

    if (charIndex < word.word.length) {
        const span = document.createElement("span");
        span.textContent = word.word.charAt(charIndex);
        span.style.color = color;

        document.querySelector(".changing-text").appendChild(span);

        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, 7000);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        const textContainer = document.querySelector(".changing-text");
        textContainer.removeChild(textContainer.lastChild);
        charIndex--;
        setTimeout(eraseWord, typingSpeed / 2);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 1000);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeWord, 7000);
});

document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault(); // Untuk mencegah aksi bawaan dari tautan

    var targetElement = document.getElementById('home');
    targetElement.scrollIntoView({ behavior: 'smooth' });
});

function weather() {
    window.location.href = "https://marcelwng7.github.io/weather/";
}