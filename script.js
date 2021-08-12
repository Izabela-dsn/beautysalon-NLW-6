// Abertura e fechamento do menu pelos ícones
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  //console.log(element)
  element.addEventListener('click', function () {
    //alert('Cliquei');
    /* Pega tudo que esta no nav e vê se na lista de classes
    das div há o show, se tem tira, se não tem coloca. */
    nav.classList.toggle('show')
  })
}

// Fechamento do menu pelas indices
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  //console.log(link)
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// Colocar sombra no header ao rolar a pagina

const header = document.querySelector('#header')
navHeight = header.offsetHeight
function putShadowInHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Slide dos testemunhos pelo swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// Aparecer o conteúdo da pagina quando for rolando ela
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, 
  #home .text, 
  #about .image, 
  #about .text, 
  #services header, 
  #services .card, 
  #testimonials header, 
  #testimonials .testimonials,
  #contact .text,
  #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// aparecer botão de ir para topo quando a página rolar
const backToTopButton = document.querySelector('.back-to-top')
function goBackToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// Menu selecionado quando a sessão estiver visível
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (let section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.add('active')
    } else {
      document
        .querySelector(`nav ul li a[href*=${sectionId}]`)
        .classList.remove('active')
    }
  }
}

//funções que precisam do scroll para funcionar
window.addEventListener('scroll', function () {
  putShadowInHeaderWhenScroll()
  goBackToTop()
  activateMenuAtCurrentSection()
})
