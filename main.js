
const newUl = document.querySelectorAll('.app ol li')
function lineThru(event){
event.target.style.textDecoration = 'line-through'
}

function eventListenerLoop () {
    for (let i=0;i<newUl.length;i++) {
    newUl[i].addEventListener('click',lineThru);
}
}

eventListenerLoop()








// const secondUlLis = document.querySelectorAll('#secondUl li');

// for (let i = 0; i < secondUlLis.length; i++) {
//   if (i % 2 === 1) {
//     secondUlLis[i].style.backgroundColor = 'lightblue';
//   }
// }







// function lineThru(event){
//     event.target.style.textDecoration = 'line-through'
// }
// document.querySelectorAll('ol li').addEventListener('click', lineThru)
// const firstUlLis = document.querySelectorAll('#firstUl li');
// newOpacity = document.querySelectorAll('.app ul li').addEventListener('click', changeOpacity)
// function changeOpacity(event){
//     for (let i = 0; i < newOpacity.length; i++) {
//     newOpacity[i].style.opacity ='0'
// }
// }
// // document.querySelectorAll('ul').addEventListener('click', changeOpacity)

// function hideImage(event){

//     event.target.style.display = 'none'
// }
// newImage = document.querySelectorAll('row').addEventListener('click', hideImage)