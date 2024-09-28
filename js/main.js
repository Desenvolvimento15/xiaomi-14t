!function(e,t){
    var i = t.documentElement;
    var main = t.querySelector('main'); 
    function n(){
        var t = i.clientWidth,
            n = t >= 1226 ? t / 10 : 122.6;
        i.style.fontSize = n + "px", e.rootFontSize = n, e.oriRootFontSize = 256;
    }
    
    if (e.addEventListener("resize", (function(){n()}), !1),
        e.addEventListener("pageshow", (function(e){e.persisted && n()}), !1),
        n(),
        e.devicePixelRatio && e.devicePixelRatio >= 2)
    {
        var o = t.createElement("div"),
            d = t.createElement("main");
        d.className = "container"; 
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

    const slideTexts = ["Titã Cinza", "Azul Titã", "Azul Titã",];

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