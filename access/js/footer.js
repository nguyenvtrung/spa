window.addEventListener("load", function () {
  {
    const sliderButonBack = $('footer .slider__buton--back')
    const sliderButonNext = $('footer .slider__buton--next')
    const itemFooter = $$('#footer .slider__img img')
    const dotItem = $('footer .slider__item--btn ul')
    const itemWidth = itemFooter[0].offsetWidth
    let positionX = 0
    let index = 0
    sliderButonBack.onclick = function () {
      clickSlider(-1)
    }
    sliderButonNext.onclick = function () {
      clickSlider(1)
    }

    for (let index = 0; index < itemFooter.length; index++) {
      dotItem.innerHTML += `
      <li class="item--btn" data-index="${index}"></li>
    `
    }
    
    setInterval(function() {
      sliderButonNext.click()
    },3000)

    function clickSlider(trung) {
      if (trung === 1) {
        if(index >= itemFooter.length - 1){
          positionX = 0 
          $('footer .slider__img').style = `transform: translateX(${positionX}px);`
          index = 0
        }
        positionX = positionX - itemWidth
        $('footer .slider__img').style = `transform: translateX(${positionX}px);`
        index++
      } else {
        if (index <= 0) {
          index = 0
          return
        }
        positionX = positionX + itemWidth
        $('footer .slider__img').style = `transform: translateX(${positionX}px);`
        index--
      }
    }

    function slid() {

    }
  }
})