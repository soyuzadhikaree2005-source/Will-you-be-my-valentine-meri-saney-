const photos = [
  "photo1.jpg",
  "photo2.jpg",
  "photo3.jpg",
  "photo4.jpg",
  "photo5.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

// Show first photo immediately
slide.src = photos[index];

// Slideshow: change photo every 3.5 seconds
setInterval(() => {
  index = (index + 1) % photos.length;
  slide.src = photos[index];
}, 3500);

// Heart rain
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.position = "absolute";
  heart.style.left = Math.random() * 100 + "vw"; // random horizontal
  heart.style.top = "-50px"; // start above screen
  heart.style.fontSize = 20 + Math.random() * 20 + "px"; // random size
  heart.style.opacity = 0.7 + Math.random() * 0.3; // slight transparency

  document.body.appendChild(heart);

  // animate fall
  const fallDuration = 4000 + Math.random() * 2000; // 4-6 seconds
  heart.style.transition = `top ${fallDuration}ms linear`;
  setTimeout(() => heart.style.top = "100vh", 50);

  // remove after animation ends
  setTimeout(() => heart.remove(), fallDuration + 50);
}, 400);
