// var swiper = new Swiper('.blog-slider', {
//     spaceBetween: 30,
//     effect: 'fade',
//     loop: true,
//     // mousewheel: {
//     //   invert: false,
//     // },
//     autoplay: {
//       delay: 10000,
//       disableOnInteraction: false,
//   },
//   keyboard: {
//       enabled: true,
//       onlyInViewport: true,
//   },
//   navigation: {
//           nextEl: ".fa-angle-right",
//           prevEl: ".fa-angle-left"
//       },
    
//     // autoHeight: true,
//     pagination: {
//       el: '.blog-slider__pagination',
//       clickable: true,
//     }
//   });

var swiper = new Swiper('.bg-grid-slides', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 10000, // 10 segundos
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    navigation: {
        nextEl: ".fa-angle-right",
        prevEl: ".fa-angle-left",
    },
    pagination: {
        el: '.slide_controls-indicators',
        clickable: true,
    },
    on: {
        init: function () {
            // Configura la barra de progreso para el primer slide
            const progressBar = document.querySelector('.progress-bar-fill');
            progressBar.style.transition = `width ${this.params.autoplay.delay}ms linear`;
            progressBar.style.width = '100%';
  
            // Configura los números del slider
            document.querySelector('.opacity-slide-active').textContent = this.slides.length - 2; // Excluye los duplicados en loop
            document.querySelector('.current-slide').textContent = this.realIndex + 1;
        },
        slideChange: function () {
            // Reinicia la barra al inicio del nuevo slide
            const progressBar = document.querySelector('.progress-bar-fill');
            progressBar.style.transition = 'none'; // Elimina la transición para el reinicio
            progressBar.style.width = '0%';
  
            // Actualiza el número del slide actual
            document.querySelector('.current-slide').textContent = this.realIndex + 1;
  
            // Reinicia la barra de progreso con transición
            setTimeout(() => {
                progressBar.style.transition = `width ${this.params.autoplay.delay}ms linear`;
                progressBar.style.width = '100%';
            }, 50); // Pausa breve para asegurar que el reinicio sea visible
        },
    },
  });
  
  // Inicializa Swiper
  swiper.init();
  
  
  






//   // Seleccionamos todos los botones y contenedores
// const showHideBtns = document.querySelectorAll('.show-hide-btn');
// const containers = document.querySelectorAll('.container');

// // Aseguramos que haya el mismo número de botones y contenedores
// showHideBtns.forEach((btn, index) => {
//   btn.addEventListener('click', () => {
//     // Usamos startViewTransition para activar la transición cuando cambiamos la clase
//     document.startViewTransition(() => {
//       containers[index].classList.toggle('expanded');
//     });
//   });
// });

  
  
  
  
  
  
  