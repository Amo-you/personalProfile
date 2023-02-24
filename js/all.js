new Vue({
    el: '#app',
    data: {
      focus:false,
      message: 'Hover Me!'
    }, 
    methods: {
      mouseover: function(refName){
        console.log(refName)
        this.focus = true
        this.message = 'Good!'
      },    
      mouseleave: function(){
        this.focus = false
        this.message = 'Hover Me!'
      }
    }
  })
  const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navBarBtn')
    
  navLinks.forEach((event) => {
    event.addEventListener('click', () => { menuToggle.click() })
  })