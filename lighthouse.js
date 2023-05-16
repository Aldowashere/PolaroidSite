//select card element
let cardSound = document.querySelector('.card')
//return array
let audioArr = document.getElementsByClassName('.calmharbor')
console.log(audioArr)
//add event listeners
cardSound.addEventListener('mouseenter', ()=> {
    audioArr[0].play()
})