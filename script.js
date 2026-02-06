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
// Contenu pour chaque option
const texts = {
  raison: `
  Lena, je t’aime pour tellement de raisons…<br>
  - Ton sourire qui illumine ma journée 🌞<br>
  - Ta gentillesse qui touche tout le monde 💖<br>
  - Ta façon de rendre chaque moment spécial ✨<br>
  - Tout simplement toi, unique et incroyable ❤️
  `,
  qualites: `
  Tes qualités sont infinies, Lena…<br>
  - Tu es douce et attentionnée 😍<br>
  - Intelligente et pleine de vie 💡<br>
  - Drôle et spontanée 😂<br>
  - Ta personnalité me fait sourire chaque jour 😊
  `,
  decla: `
  Lena, je veux que tu saches quelque chose de très important…<br>
  Depuis que je t’ai rencontrée, tu es devenue la personne la plus spéciale pour moi.<br>
  Je t’aime profondément et je rêve de passer encore plein de moments merveilleux avec toi 💖
  `,
  bisous: `
  Mille bisous pour toi, ma Valentine 😘💞<br>
  Que ce petit geste virtuel te rappelle à quel point je tiens à toi !<br>
  💌💖😘💖💌
  `
};

// Fonction pour afficher le texte quand on clique sur un bouton
function showContent(option){
  const content = document.getElementById("content");
  if(!content) return; // Si l'élément n'existe pas, ne rien faire
  content.innerHTML = texts[option];

  // Animation simple
  content.style.transform = "scale(0.9)";
  content.style.opacity = 0;
  setTimeout(() => {
    content.style.transition = "all 0.5s ease";
    content.style.transform = "scale(1)";
    content.style.opacity = 1;
  }, 50);

  // Explosion de cœurs
  for(let j=0; j<10; j++){
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random()*100 + "vw";
    heart.style.top = Math.random()*80 + "vh";
    heart.style.fontSize = "20px";
    heart.style.animationDuration = (2 + Math.random()*2) + "s";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(), 4000);
  }
}

// Pluie de cœurs
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random()*100 + "vw";
  heart.style.animationDuration = (3 + Math.random()*3) + "s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(), 6000);
}, 300);

// Cœurs qui suivent la souris
document.addEventListener("mousemove", e=>{
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "💖";
  heart.style.position = "fixed";
  heart.style.left = e.client

