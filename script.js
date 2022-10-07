

// ABOUT SECTION //


$("#scrolling_text").typer({
  strings: [
    "HTML",
    "CSS",
    "JavaScript",
    "jQuery",
    "SQL",
    "PHP",
    "Wordpress"
  ]
});

$("#scrolling_text").typer({
  typeSpeed: 60,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat: true,
  autoStart: true,
  startDelay: 100,
});

$("#scrolling_text").typer({
  
    useCursor:true
  
  });
  



// WORK SECTION //

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
  

