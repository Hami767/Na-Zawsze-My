// ===============================
// LICZNIK CZASU
// ===============================

const startDate = new Date("2023-06-07T00:00:00");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (diff % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (diff % (1000 * 60))
        / 1000
    );

    document.getElementById("timer").innerHTML =
        ${days} dni ${hours} godz. ${minutes} min ${seconds} sek. ❤️;
}

updateTimer();

setInterval(updateTimer, 1000);


// ===============================
// ANIMOWANE SERDUSZKA
// ===============================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heart.style.opacity =
        Math.random();

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 300);


// ===============================
// PŁYNNE PRZEWIJANIE
// ===============================

document.documentElement.style.scrollBehavior = "smooth";
