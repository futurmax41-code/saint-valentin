window.addEventListener("DOMContentLoaded", () => {

  // Texte qui s’écrit pour l’invitation
  const introText = "Lena, veux-tu être ma Valentine cette année ? 💖";
  const introElem = document.getElementById("intro-text");
  let i = 0;
  function typeIntro() {
    if(i < introText.length){
      introElem.innerHTML += introText.charAt(i);
      i++;
      setTimeout(typeIntro, 100);
    }
  }
  typeIntro();

  // Boutons Oui / Non
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const optionsDiv = document.getElementById("options");
  const invitationDiv = document.getElementById("invitation-buttons");

  yesBtn.addEventListener("click", () => {
    invitationDiv.style.display = "none";
    optionsDiv.style.display = "block";
  });

  noBtn.addEventListener("click", () => {
    alert("Oh 😢 j’espère que tu changeras d’avis !");
  });

  // Contenu des options
  const texts = {
    raison: "Je t’aime pour ton sourire, ta gentillesse et chaque petit moment passé avec toi 💖",
    qualites: "Tu es belle, intelligente, drôle et incroyablement attentionnée 😍",
    decla: "Lena, je veux que tu saches que tu es la personne la plus spéciale pour moi et je t’aime profondément ❤️",
    bisous: "😘😘😘 Mille bisous pour toi, ma Valentine ! 💕"
  };

  window.showContent = function(option){
    const content = document.getElementById("content");
    content.innerHTML = texts[option];

    // Animation magique
    content.style.transform = "scale(0.8)";
    content.style.opacity = 0;
    setTimeout(() => {
      content.style.transition = "all 0.5s ease";
      content.style.transform = "scale(1)";
      content.style.opacity = 1;
    }, 50);
  }

  // Pluie de cœurs classique
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 300);

  // Cœurs qui suivent la souris
  document.addEventListener("mousemove", (e) => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "16px";
    heart.style.opacity = 0.7;
    heart.style.animation = `follow 1s ease-out forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
  });

  // Musique douce
  const music = document.getElementById("music");
  if(music){
    music.volume = 0;
    music.play();
    let vol = 0;
    const fadeIn = setInterval(() => {
      if(vol < 0.5){
        vol += 0.01;
        music.volume = vol;
      } else {
        clearInterval(fadeIn);
      }
    }, 200);
  }

});

