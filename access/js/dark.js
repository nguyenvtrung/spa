const darkBtn = $('.header__darkTheme__Trung')
const style = $('style')
darkBtn.addEventListener('click' , function(){
  darkBtn.classList.toggle('dark')
  $('.header__logo').setAttribute("src", `${domain}/access/imgs/header/logoDark.png`)
  $('.header__darktheme').setAttribute("src", `${domain}/access/imgs/header/sun.png`)

  style.innerHTML = `
  :root
        {
          --bg-header : #242526;
          --color-trung : #432566;
          --color-main : #242526;
          --color-body : #18191a;
          --color-text : #fff;
          --title : #fff;
          --color-text--hover : #fff;
        }
  `
  $('.header__darkTheme__Trung.dark').addEventListener('click' , function(){
    $('.header__logo').setAttribute("src", `${domain}/access/imgs/header/trung_header_logo.png`)
    $('.header__darktheme').setAttribute("src", `${domain}/access/imgs/header/moon.png`)
  
    theme()
  })
})


function theme(){
  style.innerHTML = `
  :root
        {
          --bg-header : #fff;
          --color-trung : #432566;
          --color-main : #fff;
          --color-body : #fff;
          --color-text : #333;
          --title : #fff;
          --color-text--hover : #fff;
        }
`
}

theme()