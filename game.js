let time = 30;
let score = 0;

// No folder, just direct files
const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg"
];

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
const okBtn = document.getElementById("okBtn");

function createHeart() {
  if (time <= 0) return;

  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.className = "heart";
  heart.style.left = Math.random() * 90 + "vw";
  heart.style.top = Math.random() * 80 + "vh";

  heart.onclick = () => {
    score++;
    scoreEl.innerText = "Hearts: " + score;
    heart.remove();
  };

  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1500);
}

// Start heart creation every 0.5s
let heartInterval = setInterval(createHeart, 500);

// Timer countdown
let timerInterval = setInterval(() => {
  time--;
  timerEl.innerText = "Time: " + time;
  if (time === 0) {
    clearInterval(timerInterval);
    clearInterval(heartInterval);
    startPhotoRain();
  }
}, 1000);

function startPhotoRain() {
  const totalPhotos = score; // number of hearts clicked

  for (let i = 0; i < totalPhotos; i++) {
    const img = document.createElement("img");

    // Pick a random photo from the photos array
    img.src = photos[Math.floor(Math.random() * photos.length)];

    img.className = "photo";
    img.style.position = "absolute";
    img.style.top = "-150px"; // start above screen
    img.style.left = Math.random() * 90 + "vw"; // random X
    img.style.width = 50 + Math.random() * 100 + "px"; // random size 50-150px
    img.style.height = "auto";
    img.style.opacity = 0.7 + Math.random() * 0.3; // slight transparency
    document.body.appendChild(img);

    // Function to animate falling
    function fall() {
      img.style.transition = "none";
      img.style.top = "-150px";
      img.style.left = Math.random() * 90 + "vw"; // random X
      img.style.width = 50 + Math.random() * 100 + "px";

      setTimeout(() => {
        const speed = 4000 + Math.random() * 3000; // 4-7 seconds fall
        img.style.transition = `top ${speed}ms linear, left ${speed}ms linear`;
        img.style.top = window.innerHeight + "px";
        img.style.left = Math.random() * 90 + "vw";
      }, 50);
    }

    // Start first fall
    fall();

    // Repeat fall continuously
    setInterval(fall, 5000 + Math.random() * 2000); // random interval for natural effect
  }

  okBtn.style.display = "block";
}



