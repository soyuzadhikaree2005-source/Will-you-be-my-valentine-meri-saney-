// Heart rain effect - works on all pages
function createFallingHeart() {
  const heart = document.createElement("div");
  heart.innerText = "💖";
  heart.style.position = "fixed";
  heart.style.fontSize = (10 + Math.random() * 20) + "px";
  heart.style.top = "-50px";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "9999";
  heart.style.animation = `fall ${3 + Math.random()*5}s linear forwards`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000); // remove after animation
}

// Create hearts every 300ms
setInterval(createFallingHeart, 300);
