const menuBt = document.querySelector('.menu_bt')
const nav = document.querySelector('header nav')

let showingMenu = false;


function toggleNav() {
    if(showingMenu == false) {

        nav.style.transform = 'translateX(0)';

        showingMenu = true;

        if(showingWalletStats == true) {
            toggleWalletStats()
        }
    } else {

        nav.style.transform = 'translateX(-100%)';

        showingMenu = false;
    }
}

menuBt.addEventListener('click', toggleNav)


window.addEventListener("scroll", function(e){
    if(showingMenu == true) {
        toggleNav()
    }
})




let touchstartX = 0
let touchendX = 0

let touchstartY = 0
let touchendY = 0
    
function checkDirection() {

    if(window.matchMedia('(max-width: 1000px)').matches) {
        if((touchendX - (window.innerWidth / 1.9)) > touchstartX && touchendY < (touchstartY + 100) && touchendY > (touchstartY - 100)) {
    
            if(showingMenu == false) {
                toggleNav()
            }
        }
    
        if(touchendX < (touchstartX - 30)) {
    
            // console.log(touchstartX + ", " + touchendX)

            if(showingMenu == true) {
                toggleNav()
            }
        }
    }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  touchstartY = e.changedTouches[0].screenY
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  touchendY = e.changedTouches[0].screenY
  checkDirection()
})