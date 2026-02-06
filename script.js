// Texte qui s’écrit dans l’intro
const introText = "J’ai quelque chose d’important à te dire…";
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

// Texte de la lettre
const letterContent = "Depuis que je t’ai rencontrée, chaque détail a un peu plus de sens.\nTon sourire, ta voix, ta manière d’être…\nAlors aujourd’hui, j’avais envie de faire les choses autrement.";
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
setTimeout(typeLetter, 2000);

// Scroll vers la lettre
function scrollToLetter() {
  document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
}

// Quand elle clique "Oui"
function yes() {
  document.body.style.background = "linear-gradient(120deg, #ff4d88, #ff99cc)";
  document.getElementById("response").innerHTML =
    "J’espère que cette soirée sera aussi belle que toi ❤️";
}

// Pluie de cœurs
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 6000);
}, 300);

