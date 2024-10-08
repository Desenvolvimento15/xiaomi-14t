!function(e,t){
  var i = t.documentElement;
  var main = t.querySelector('.container-xiaomi-14'); // Alterado para selecionar o elemento com a classe 'container-xiaomi-14'
  
  function n(){
      var t = i.clientWidth,
          n = t >= 1226 ? t / 10 : 122.6;
      i.style.fontSize = n + "px", e.rootFontSize = n, e.oriRootFontSize = 256;
  }

  e.addEventListener("resize", function() { n(); }, !1);
  e.addEventListener("pageshow", function(e) { e.persisted && n(); }, !1);
  n();

  if (e.devicePixelRatio && e.devicePixelRatio >= 2) {
      var o = t.createElement("div"),
          d = t.createElement("main");
      d.className = "container-xiaomi-14"; // Mantido o uso da classe 'container-xiaomi-14'
      o.style.border = "0.5px solid transparent";
      d.appendChild(o);
      i.appendChild(d);
      1 === o.offsetHeight && i.classList.add("hairlines");
      i.removeChild(d);
  }
}(window,document);


$(document).ready(function() {
    const $slides = $('#slides');
    const $dotsContainer = $('#dots-container');
    const $textItem = $('#text-item');

    const slideTexts = ["Titã Cinza", "Azul Titã",];

    let currentSlide = 0;

    function showSlide(index) {
      $slides.css('transform', `translateX(${-index * 100}%)`);
      $textItem.text(slideTexts[index]);

      $('.dot').each(function(i, dot) {
        $(dot).toggleClass('active', i === index);
      });
    }

    function createDots() {
      for (let i = 0; i < slideTexts.length; i++) {
        const $dot = $('<span>').addClass('dot').on('click', () => showSlide(i));
        $dotsContainer.append($dot);
      }
    }

    function autoPlay() {
      setInterval(() => {
        currentSlide = (currentSlide + 1) % slideTexts.length;
        showSlide(currentSlide);
      }, 3000); // Altera o slide a cada 3 segundos
    }

    createDots();
    showSlide(currentSlide);
    autoPlay();
  });




  
  let currentSlide03 = 0;
  const slides03 = document.querySelectorAll('.slide03');
  const totalSlides03 = slides03.length;
  
  console.log(`Total de slides: ${totalSlides03}`); // Verifica se os slides estão sendo selecionados
  
  function showNextSlide03() {
      currentSlide03 = (currentSlide03 + 1) % totalSlides03;
      console.log(`Mudando para o slide: ${currentSlide03 + 1}`); // Log do slide atual
      document.querySelector('.slider03').style.transform = `translateX(-${currentSlide03 * 100}%)`;
  }
  
  // Avança automaticamente a cada 3 segundos
  setInterval(showNextSlide03, 3000);
  
  let slideIndex4 = 1;
  showSlides4(slideIndex4);
  
  // Função para mudar o slide atual
  function currentSlide4(n) {
      showSlides4(slideIndex4 = n);
  }
  
  // Função para exibir os slides
  function showSlides4(n) {
      let i;
      let slides = document.getElementsByClassName("slider4-slide");
      let dots = document.getElementsByClassName("slider4-dot");
  
      if (n > slides.length) { slideIndex4 = 1 }
      if (n < 1) { slideIndex4 = slides.length }
  
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
  
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slides[slideIndex4 - 1].style.display = "block";
      dots[slideIndex4 - 1].className += " active";
  }
  
