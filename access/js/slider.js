window.addEventListener("load", function () {
  {
    const sliderButonBack = $('.slider__buton--back')
    const sliderButonNext = $('.slider__buton--next')
    const itemHeader = $$('#slider .slider__img img')
    const dotItem = $$('.item--btn')
    const itemWidth = itemHeader[0].offsetWidth
    let positionX = 0
    let index = 0
    sliderButonBack.onclick = function(){
      clickSlider(-1)
    }
    sliderButonNext.onclick = function(){
      clickSlider(1)
    }

    setInterval(function() {
      sliderButonNext.click()
    },3000)

    function clickSlider(trung) {
      if (trung === 1) {
        if(index >= itemHeader.length - 1){
          positionX = 0 
          $('.slider__img').style = `transform: translateX(${positionX}px);`
          index = 0
        }
        positionX = positionX - itemWidth
        $('.slider__img').style = `transform: translateX(${positionX}px);`
        index++
      } else {
        if(index <= 0){
          index = 0
          return
        }
        positionX = positionX + itemWidth
        $('.slider__img').style = `transform: translateX(${positionX}px);`
        index--
      }
    }
  }

})