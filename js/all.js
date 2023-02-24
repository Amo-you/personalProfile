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
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      $("html,body").animate({scrollTop:$(toDiv).offset().top - 300},0)
    } else {
      $("html,body").animate({scrollTop:$(toDiv).offset().top},0)
    }
    //$("body,html")蘋果瀏覽器不會動
    
  })
})
//右下置頂按鈕
const topButton = document.getElementById('topButton')
topButton.addEventListener('click', () => {
  const goTo = topButton.dataset.to
  const toDiv = '#' + goTo 
  if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("html,body").animate({scrollTop:$(toDiv).offset().top - 300},0)
  } else {
    $("html,body").animate({scrollTop:$(toDiv).offset().top},0)
  }
})