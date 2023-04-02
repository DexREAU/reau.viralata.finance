// const blackholeZoom = document.querySelector('.zoom_ctnr')

// const blackhole = document.querySelector('.blackhole')

// const blackholeborder = document.querySelector('.blackhole .border')
// const blackholeblur = document.querySelector('.blackhole .blur')

// let isInsideBlackHole = false;

// const statusCtnr = document.querySelector('.status_ctnr')

// function toggleBlackhole(e) {
//     if(isInsideBlackHole == false) {
//         e.preventDefault()
//         isInsideBlackHole = true;

//         blackholeborder.style.animation = 'unset'
//         blackholeblur.style.animation = 'unset'
//         blackholeZoom.style.transform = 'scale(5.5)'

//         setTimeout(() => {
//             statusCtnr.style.top = '24vh'
//         }, 900);
//     } else {
//         e.preventDefault()
//         isInsideBlackHole = false;
//         blackholeZoom.style.transform = 'scale(1)'

//         statusCtnr.style.top = 'calc(50% - (clamp(6rem, 10vw, 10rem) / 2))'

//         setTimeout(() => {
//             blackholeborder.style.animation = 'movegradient 3s linear infinite'
//             blackholeblur.style.animation = 'movegradient 3s linear infinite'
//         }, 1500);
//     }
// }

// blackhole.addEventListener('click', toggleBlackhole)