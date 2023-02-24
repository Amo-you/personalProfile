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
  navLinks.forEach((event) => {
    event.addEventListener('click', () => { menuToggle.click() })
  })