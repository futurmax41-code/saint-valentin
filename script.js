// === Page index.html ===
if(document.getElementById("intro-text")){
  const introText = "Lena, j’ai quelque chose d’important à te dire…";
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
}

function goToLetter(){
  window.location.href = "lettre.html";
}

// === Page lettre.html ===
if(document.getElementById("letter-text")){
  const letterContent = "Depuis que je t’ai rencontrée, Lena, chaque détail a un peu plus de sens.\nTon sourire, ta voix, ta manière d’être…\nAlors aujourd’hui, j’avais envie de te dire que je t’aime, profondément ❤️";
  const letterElem = document.getElementById("letter-text");
  let j = 0;
  function typeLetter() {
    if(j < letterContent.length){
      let char = letterContent.charAt(j);
      if(char === "\n") char = "<br><br>";
      letterElem.innerHTML += char;
      j++;
      setTimeout(typeLetter, 50);
    }
  }
  typeLetter();
}

function backHome(){
  window.location.href = "index.html";
}

// === Pluie de cœurs (fonctionne sur les deux pages) ===
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 6000);
}, 300);
