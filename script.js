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
