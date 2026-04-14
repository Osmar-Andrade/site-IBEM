
const imagens = [
  'imagens/menbros-do-louvor.png',
  'imagens/menbros-ibem.svg',
  'imagens/menbros-1.svg'
];

const container = document.querySelector('.wrapperConatianer-hero');
let index = 0;

function trocarImagem() {
  container.style.backgroundImage = `url('${imagens[index]}')`;
  index = (index + 1) % imagens.length;
}


trocarImagem();
setInterval(trocarImagem, 5000);


let slideIndex = 0;
let slides = document.querySelectorAll(".slide");

function mostrarSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[n].classList.add("active");
}





function fechar() {
  document.getElementById("boasvindas").style.display = "none";
}



const versiculos = [
  "João 3:16 - Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.",
  "Salmos 23:1 - O Senhor é o meu pastor e nada me faltará.",
  "Filipenses 4:13 - Posso todas as coisas naquele que me fortalece.",
  "Jeremias 29:11 - Eu é que sei os planos que tenho para vocês, diz o Senhor."
];


document.querySelector('.oracao-card button').addEventListener('click', () => {
  alert("🙏 Seu pedido foi enviado! Estaremos orando por você.");
});





const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.5s";
});

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});


