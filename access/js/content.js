window.addEventListener("load", function () {
  {
    const sliderButonBack = $('.content__slider .slider__buton--back')
    const sliderButonNext = $('.content__slider .slider__buton--next')
    const itemcontent = $$('.content__slider .slider__img img')
    const dotItem = $('.content__slider .slider__item--btn ul')
    const itemWidth = itemcontent[0].offsetWidth
    let positionX = 0
    let index = 0
    sliderButonBack.onclick = function () {
      clickSlider(-1)
    }
    sliderButonNext.onclick = function () {
      clickSlider(1)
    }

    for (let index = 0; index < itemcontent.length/2; index++) {
      dotItem.innerHTML += `
      <li class="item--btn" data-index="${index}"></li>
    `
    }
    
    setInterval(function() {
      sliderButonNext.click()
    },3000)

    function clickSlider(trung) {
      if (trung === 1) {
        if(index >= itemcontent.length - 1){
          positionX = 0 
          $('.content__slider .slider__img').style = `transform: translateX(${positionX}px);`
          index = 0
        }
        positionX = positionX - itemWidth
        $('.content__slider .slider__img').style = `transform: translateX(${positionX}px);`
        index++
      } else {
        if (index <= 0) {
          index = 0
          return
        }
        positionX = positionX + itemWidth
        $('.content__slider .slider__img').style = `transform: translateX(${positionX}px);`
        index--
      }
    }

    function slid() {

    }
  }
})