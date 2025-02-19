const sideOpenBtn = document.querySelector('#sideOpenBtn')
const sideCloseBtn = document.querySelector('#sideCloseBtn')
const sideBar = document.querySelector('#side-bar')

sideOpenBtn.addEventListener('click', openSideBar)
sideCloseBtn.addEventListener('click', closeSideBar)

function openSideBar(){
    sideOpenBtn.classList.add('hidden')
    sideBar.classList.remove('-right-full')
    sideBar.classList.add('right-0')
}

function closeSideBar(){
    sideOpenBtn.classList.remove('hidden')
    sideBar.classList.remove('right-0')
    sideBar.classList.add('-right-full')
}