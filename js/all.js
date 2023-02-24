new Vue({
    el: '#app',
    data: {
      focus:false,
    }, 
    methods: {
      mouseover: function(){
        this.focus = true
      },    
      mouseleave: function(){
        this.focus = false
      }
    }
})
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navBarBtn')
navLinks.forEach((element) => {
  element.addEventListener('click', () => { menuToggle.click() })
})
//解決手機錨點問題
const navA = document.querySelectorAll('.nav-item a')
navA.forEach((element) => {
  element.addEventListener('click', ()=>{
    const goTo = element.dataset.to
    const toDiv = '#' + goTo
      $("html,body").animate({scrollTop:$(toDiv).offset().top - 300},0)
  })
})

