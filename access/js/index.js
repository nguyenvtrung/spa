const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const domain = document.location.origin
const head = $('head')
const header__top = $(".header__top")
const addElement = {
  head:function()
  {
    head.innerHTML += `
      <link rel="stylesheet" href="${domain}/access/css/index.css">
      <link rel="stylesheet" href="${domain}/access/css/header.css">
      <link rel="stylesheet" href="${domain}/access/css/footer.css">
    `
  },
  start : function(){
    this.head()
  }
}
addElement.start()



window.addEventListener("scroll" , function(e){
  const headerTopHeight = header__top.offsetHeight
  const headerNavMenuHeight = $(".header__navMenu").offsetHeight



  let headerNavMenuHeightNew = headerNavMenuHeight *2
  
  let valueScroll = window.scrollY || document.documentElement.scroll
  let heightNew = headerTopHeight - valueScroll

  if(heightNew < headerTopHeight){
    $("header").style = `transform: translateY(-${headerTopHeight}px);`
    $("#slider").style = `top : ${headerNavMenuHeightNew}px; margin-bottom : ${headerNavMenuHeightNew}px;`
  }else{
    $("header").style = `height: ${headerTopHeight};`
    $("#slider").style = `top : 0px`
  }
  header__top.style = `height : ${heightNew}px;`


})




function backToTop(){
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      $('.backtotop').style = ` opacity: 1;`
    } else {
      $('.backtotop').style = ` opacity: 0;`
    }
  }
  
  $('.backtotop').onclick = function(){
    topFunction()
    console.log("1");
  }
}
backToTop()

