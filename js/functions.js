document.getElementById('mobile-show').addEventListener('click', showMenu)
document.querySelector('.search').addEventListener('click', showSearch)

function showMenu() {
    document.querySelector('#nav').classList.toggle('show')
    // document.body.style.backgroundColor = "red";
    document.querySelector('.nav-modal').classList.toggle('modal')
    // document.querySelector('.nav-modal').style.z-index = '900'
}
function showSearch() {
    document.querySelector('#search').classList.toggle('showSearch')
    // document.body.style.backgroundColor = "red";
    document.querySelector('.nav-modal').classList.toggle('modal')
    // document.querySelector('.nav-modal').style.z-index = '900'
}

document.getElementById('close').addEventListener('click', closeMenu)

function closeMenu() {
    document.querySelector('#nav').classList.remove('show')
    document.querySelector('.nav-modal').classList.remove('modal')
    // document.body.style.backgroundColor = "white";
    // document.querySelector('.mobile-nav').style.width = "0%";
}
