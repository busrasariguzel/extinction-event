
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

const newUlLi = document.querySelectorAll('.app ul li')
function changeOpacity(event){
event.target.style.opacity ='0'
}

function eventListenerLoop2 () {
    for (let i=0;i<newUlLi.length;i++) {
    newUlLi[i].addEventListener('click', changeOpacity);
}
}

eventListenerLoop2()

const newImage = document.querySelectorAll('#row img')
function hide(event){
event.target.style.width = '0'
}

function eventListenerLoop3 () {
    for (let i=0;i<newImage.length;i++) {
    newImage[i].addEventListener('click', hide);
}
}

eventListenerLoop3()

const newButton = document.querySelector('#toggle')
newButton.addEventListener('click', button)


function button(){
    for (let i=0;i<newUl.length;i++) {
        newUl[i].style.textDecoration = 'line-through'
    }
    for (let i=0;i<newUlLi.length;i++) {
        newUlLi[i].style.opacity = '0'
    }
    for (let i=0;i<newImage.length;i++) {
        newImage[i].style.width = '0'
        }
}



