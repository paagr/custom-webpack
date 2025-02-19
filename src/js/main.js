import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

const navbarSpacer = document.querySelector('.js-navbar-spacer')
const navbarNavToggler = document.querySelector('.js-navbar-search-toggler')

window.addEventListener('load', () => {
  navbarSpacer.style.width = `${navbarNavToggler.offsetWidth}px`
})

window.addEventListener('resize', () => {
  navbarSpacer.style.width = `${navbarNavToggler.offsetWidth}px`
})