const slider = document.getElementById('slider')
const arrowLeft = document.getElementById('arrow-left')
const arrowRight = document.getElementById('arrow-right')
const scrollTotal = slider.scrollWidth
const sliderCards = document.getElementsByClassName('slider__card')

let scrollPosition = slider.offsetWidth

console.log( arrowLeft )
console.log( arrowRight )
console.log( sliderCards )
console.log( scrollTotal )
console.log( scrollPosition )

arrowLeft.addEventListener('click', moveToLeft)
arrowRight.addEventListener('click', moveToRight)

function moveToLeft(  ) {
    slider.scrollLeft -= scrollPosition
}

function moveToRight(  ) {
    slider.scrollLeft += scrollPosition
}
