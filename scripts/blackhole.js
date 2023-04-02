const blackholeZoom = document.querySelector('.zoom_ctnr')

const blackhole = document.querySelector('.blackhole')

const blackholeborder = document.querySelector('.blackhole .border')
const blackholeblur = document.querySelector('.blackhole .blur')

let isInsideBlackHole = false;

function toggleBlackhole(e) {
    if(isInsideBlackHole == false) {
        e.preventDefault()
        isInsideBlackHole = true;

        blackholeborder.style.animation = 'unset'
        blackholeblur.style.animation = 'unset'
        blackholeZoom.style.transform = 'scale(5)'
    } else {
        e.preventDefault()
        isInsideBlackHole = false;
        blackholeZoom.style.transform = 'scale(1)'

        setTimeout(() => {
            blackholeborder.style.animation = 'movegradient 3s linear infinite'
            blackholeblur.style.animation = 'movegradient 3s linear infinite'
        }, 600);
    }
}

blackhole.addEventListener('click', toggleBlackhole)