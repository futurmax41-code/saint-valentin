document.addEventListener("DOMContentLoaded", () => {

  // Pluie de cœurs (toujours)
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (3 + Math.random()*3) + "s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 6000);
  }, 300);

  // Cœurs qui suivent la souris → seulement sur PC
  if(window.innerWidth > 768){
    document.addEventListener("mousemove", e=>{
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "💖";
      heart.style.position = "fixed";
      heart.style.left = e.clientX + "px";
      heart.style.top = e.clientY + "px";
      heart.style.fontSize = "16px";
      heart.style.opacity = 0.7;
      heart.style.animation = "follow 1s ease-out forwards";
      document.body.appendChild(heart);
      setTimeout(()=>heart.remove(), 1000);
    });
  }

  // Musique douce fade-in
  const music = document.getElementById("music");
  if(music){
    music.volume = 0;
    music.play().catch(()=>{}); // mobile bloque autoplay
    let vol = 0;
    const fadeIn = setInterval(() => {
      if(vol < 0.5){
        vol += 0.01;
        music.volume = vol;
      } else clearInterval(fadeIn);
    }, 200);
  }

});
