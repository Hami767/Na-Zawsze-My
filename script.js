// ===============================
// LICZNIK
// ===============================

const startDate = new Date("2023-06-07T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const el = document.getElementById("timer");
    if (el) {
        el.innerHTML = ${days} dni ${hours} godz ${minutes} min ${seconds} sek ❤️;
    }
}

updateTimer();
setInterval(updateTimer, 1000);


// ===============================
// SERCA
// ===============================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {
    if (!heartsContainer) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 10000);
}

setInterval(createHeart, 300);


// ===============================
// ZDJĘCIA (LIGHTBOX)
// ===============================

document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.style.position = "fixed";
        overlay.style.top = 0;
        overlay.style.left = 0;
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,0.😎";
        overlay.style.display = "flex";
        overlay.style.justifyContent = "center";
        overlay.style.alignItems = "center";
        overlay.style.zIndex = "9999";

        const bigImg = document.createElement("img");
        bigImg.src = img.src;
        bigImg.style.maxWidth = "90%";
        bigImg.style.maxHeight = "90%";
        bigImg.style.borderRadius = "20px";

        overlay.appendChild(bigImg);

        overlay.addEventListener("click", () => overlay.remove());

        document.body.appendChild(overlay);
    });
});
