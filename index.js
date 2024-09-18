const menu = document.getElementById('menu')
const nav = document.getElementById('nav')

const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY
}

document.addEventListener('scroll', storeScroll)

storeScroll()

menu.addEventListener('click', () => {
    if (nav.style.opacity !== '0') {
        nav.style.opacity = '0'
    }
    
    else {
        nav.style.opacity = '1'
    }
})