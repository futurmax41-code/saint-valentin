window.addEventListener("DOMContentLoaded", () => {

  // ===== Texte intro animation =====
  const introElem = document.querySelector(".intro h1");
  if(introElem){
    const text = introElem.textContent;
    introElem.textContent = "";
    let i = 0;
    function typeWriter(){
      if(i < text.length){
        introElem.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }
    typeWriter();
  }

  // ===== Contenu des options lettre.html =====
  const texts = {
    raison: "Je t’aime pour ton sourire, ta gentillesse et chaque petit moment passé avec toi 💖",
    qualites: "Tu es belle, intelligente, drôle et incroyablement attentionnée 😍",
    decla: "Lena, tu es la personne la plus spéciale pour moi et je t’aime profondément ❤️",
    bisous: "Mille bisous pour toi 😘💞 Que ce petit geste te rappelle à quel point je tiens à toi !"
  };

  window.showContent = function(option){
    const content = document.getElementById("content");
    content.innerHTML = texts[option];

    // Effet magique
    content.style.transform = "scale(0.9)";
    content.style.opacity = 0;
    setTimeout(() => {
      content.style.transition = "all 0.5s ease";
      content.style.transform = "scale(1)";
      content.style.opacity = 1;
    }, 50);

    // Explosion de petits cœurs
    for(let j=0; j<10; j++){
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.innerHTML = "💖";
      heart.style.left = Math.random()*100 + "vw";
      heart.style.top = Math.random()*80 + "vh";
      heart.style.fontSize = 20 + "px";
      heart.style.animationDuration = (2 + Math.random()*2) + "s";
      document.body.appendChild(heart);
      setTimeout(()=>heart.remove(), 4000);
    }
  }

  // ===== Pluie de cœurs =====
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.animationDuration = (3 + Math.random()*3) + "s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 6000);
  }, 300);

  // ===== Cœurs qui suivent la souris =====
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

  // ===== Musique douce fade-in =====
  const music = document.getElementById("music");
  if(music){
    music.volume = 0;
    music.play();
    let vol = 0;
    const fadeIn = setInterval(() => {
      if(vol < 0.5){
        vol += 0.01;
        music.volume = vol;
      } else clearInterval(fadeIn);
    }, 200);
  }

});
