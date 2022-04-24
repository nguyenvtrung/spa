const photo =  $$('.album .photo')
const albumWidth = $('.album').offsetWidth - 50
const albumHeight = $('.album').offsetHeight/2

    photo[0].setAttribute("style" , `transform: rotate(-14deg); left : 0%; top : 20px;` )
    photo[1].setAttribute("style" , `transform: rotate(-4deg); left : 10%; top : 50px;` )
    photo[2].setAttribute("style" , `transform: rotate(14deg); left : 20%; top : 70px;` )
    photo[3].setAttribute("style" , `transform: rotate(18deg); left : 30%; top : 45px;` )
    photo[4].setAttribute("style" , `transform: rotate(24deg); left : 40%; top : 100px;` )
    photo[5].setAttribute("style" , `transform: rotate(-4deg); left : 10%; top : 100px;` )
    photo[6].setAttribute("style" , `transform: rotate(-10deg); left : 60%; top : 20px;` )
    // photo[7].setAttribute("style" , `transform: rotate(-10deg); left : 70%; top : 20px;` )

    